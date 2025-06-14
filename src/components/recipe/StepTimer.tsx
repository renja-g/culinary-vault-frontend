"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Timer, Play, Square, Pause } from "lucide-react";
import { InstructionTimer, TimeUnit } from "@/types/recipe";

interface StepTimerProps {
  timer: InstructionTimer;
}

const StepTimer = ({ timer }: StepTimerProps) => {
  // Convert timer duration to seconds
  const convertToSeconds = (duration: number, timeUnit: TimeUnit): number => {
    switch (timeUnit) {
      case TimeUnit.SECONDS:
        return duration;
      case TimeUnit.MINUTES:
        return duration * 60;
      case TimeUnit.HOURS:
        return duration * 3600;
      default:
        return duration;
    }
  };

  const totalDurationInSeconds = convertToSeconds(
    timer.duration,
    timer.timeUnit
  );
  const [timeLeft, setTimeLeft] = useState<number | null>(
    totalDurationInSeconds
  );
  const [isRunning, setIsRunning] = useState(false);
  const [isBeeping, setIsBeeping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);
  const beepIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize audio context on first interaction to comply with browser policies
  const initAudioContext = useCallback(() => {
    if (!audioContext.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioContext.current = new AudioContextClass();
    }
    return audioContext.current;
  }, []);

  // Create a single beep
  const createBeep = useCallback(() => {
    if (!audioContext.current) return;

    try {
      // Clean up any previous oscillator
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      }

      const context = audioContext.current;
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillatorRef.current = oscillator;
      gainNodeRef.current = gainNode;

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(830, context.currentTime);
      gainNode.gain.setValueAtTime(0.5, context.currentTime);

      oscillator.start();

      // Fade out the beep
      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        context.currentTime + 0.3
      );

      // Stop the oscillator after the beep is done
      setTimeout(() => {
        if (oscillatorRef.current === oscillator) {
          oscillator.stop();
          oscillator.disconnect();
          oscillatorRef.current = null;
        }
      }, 350);
    } catch (error) {
      console.error("Error playing notification sound:", error);
    }
  }, []);

  // Start continuous beeping
  const startContinuousBeeping = useCallback(() => {
    setIsBeeping(true);
    initAudioContext();

    // Create an initial beep
    createBeep();

    // Set up interval for continuous beeping (beep every 700ms)
    beepIntervalRef.current = setInterval(() => {
      createBeep();
    }, 700);
  }, [createBeep, initAudioContext]);

  // Stop continuous beeping
  const stopContinuousBeeping = () => {
    setIsBeeping(false);

    if (beepIntervalRef.current) {
      clearInterval(beepIntervalRef.current);
      beepIntervalRef.current = null;
    }

    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current.disconnect();
      oscillatorRef.current = null;
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev !== null && prev > 0 ? prev - 1 : null));
      }, 1000);
    } else if (timeLeft === 0 && !isBeeping) {
      setIsRunning(false);

      // Start continuous beeping when timer ends
      startContinuousBeeping();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, isBeeping, startContinuousBeeping]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (beepIntervalRef.current) {
        clearInterval(beepIntervalRef.current);
      }
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      }
      if (audioContext.current) {
        audioContext.current.close();
      }
    };
  }, []);

  const startTimer = () => {
    // If the alarm is currently beeping, stop it
    if (isBeeping) {
      stopContinuousBeeping();
    }

    initAudioContext(); // Initialize audio context on user interaction

    // Only reset timeLeft if we're starting fresh (not resuming from pause)
    if (!isPaused) {
      setTimeLeft(totalDurationInSeconds);
    }

    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const stopTimer = () => {
    // If the alarm is beeping, stop it
    if (isBeeping) {
      stopContinuousBeeping();
      resetTimer();
    }
  };

  const resetTimer = () => {
    setTimeLeft(totalDurationInSeconds);
    setIsRunning(false);
    setIsPaused(false);

    if (isBeeping) {
      stopContinuousBeeping();
    }
  };

  const formatTime = (seconds: number) => {
    // If original timer was in hours and we have more than an hour left, show hours
    if (timer.timeUnit === TimeUnit.HOURS && seconds >= 3600) {
      const hours = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    // If original timer was in hours but less than an hour left, or if in minutes and more than a minute left
    else if (seconds >= 60) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${String(secs).padStart(2, "0")}`;
    }
    // Show just seconds if less than a minute or if original timer was in seconds
    else {
      return `${seconds}s`;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <Timer className="w-4 h-4 mr-1 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {timeLeft !== null
            ? formatTime(timeLeft)
            : formatTime(totalDurationInSeconds)}
        </span>
      </div>

      {/* Show Start button when timer hasn't started or when it's been reset */}
      {!isRunning && !isBeeping && !isPaused ? (
        <Button
          variant="outline"
          size="sm"
          onClick={startTimer}
          className="h-7 px-2"
        >
          <Play className="w-3 h-3 mr-1" />
          Start Timer
        </Button>
      ) : null}

      {/* Show Continue button when paused */}
      {!isRunning && !isBeeping && isPaused ? (
        <Button
          variant="outline"
          size="sm"
          onClick={startTimer}
          className="h-7 px-2"
        >
          <Play className="w-3 h-3 mr-1" />
          Continue
        </Button>
      ) : null}

      {/* Show Pause button when running */}
      {isRunning && !isBeeping ? (
        <Button
          variant="outline"
          size="sm"
          onClick={pauseTimer}
          className="h-7 px-2"
        >
          <Pause className="w-3 h-3 mr-1" />
          Pause
        </Button>
      ) : null}

      {/* Show Stop Alarm button when beeping */}
      {isBeeping ? (
        <Button
          variant="outline"
          size="sm"
          onClick={stopTimer}
          className="h-7 px-2 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50"
        >
          <Square className="w-3 h-3 mr-1" />
          Stop Alarm
        </Button>
      ) : null}

      {/* Show Reset button when paused or when timer has been used */}
      {(isPaused ||
        (!isRunning &&
          !isBeeping &&
          timeLeft !== null &&
          timeLeft !== totalDurationInSeconds)) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={resetTimer}
          className="h-7 px-2"
        >
          Reset
        </Button>
      )}
    </div>
  );
};

export default StepTimer;
