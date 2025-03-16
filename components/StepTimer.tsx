'use client';
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Timer, Play, Square } from "lucide-react";

interface StepTimerProps {
  duration: number;
}

const StepTimer = ({ duration }: StepTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number | null>(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isBeeping, setIsBeeping] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);
  const beepIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Initialize audio context on first interaction to comply with browser policies
  const initAudioContext = useCallback(() => {
    if (!audioContext.current) {
      const AudioContextClass = window.AudioContext || 
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(830, context.currentTime);
      gainNode.gain.setValueAtTime(0.5, context.currentTime);
      
      oscillator.start();
      
      // Fade out the beep
      gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.3);
      
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
        setTimeLeft(prev => prev !== null && prev > 0 ? prev - 1 : null);
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
    setTimeLeft(duration);
    setIsRunning(true);
  };

  const stopTimer = () => {
    // If the timer is running, stop it
    if (isRunning) {
      setIsRunning(false);
    }
    // If the alarm is beeping, stop it
    else if (isBeeping) {
      stopContinuousBeeping();
      resetTimer();
    }
  };

  const resetTimer = () => {
    setTimeLeft(duration);
    setIsRunning(false);
    
    if (isBeeping) {
      stopContinuousBeeping();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <Timer className="w-4 h-4 mr-1 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {timeLeft !== null ? formatTime(timeLeft) : formatTime(duration)}
        </span>
      </div>
      
      {!isRunning && !isBeeping ? (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={startTimer}
          className="h-7 px-2"
        >
          <Play className="w-3 h-3 mr-1" />
          Start Timer
        </Button>
      ) : (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={stopTimer}
          className={`h-7 px-2 ${isBeeping ? "bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50" : ""}`}
        >
          <Square className="w-3 h-3 mr-1" />
          {isBeeping ? "Stop Alarm" : "Stop"}
        </Button>
      )}
      
      {!isRunning && !isBeeping && timeLeft !== null && timeLeft !== duration && (
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