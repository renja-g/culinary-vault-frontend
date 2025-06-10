import { create } from 'zustand';

interface ServingsState {
  originalServings: number;
  currentServings: number;
  setOriginalServings: (servings: number) => void;
  increaseServings: () => void;
  decreaseServings: () => void;
  getScalingFactor: () => number;
  reset: () => void;
}

export const useServingsStore = create<ServingsState>((set, get) => ({
  originalServings: 1,
  currentServings: 1,
  
  setOriginalServings: (servings: number) => {
    set({ originalServings: servings, currentServings: servings });
  },
  
  increaseServings: () => {
    set((state) => ({ currentServings: state.currentServings + 1 }));
  },
  
  decreaseServings: () => {
    set((state) => ({ 
      currentServings: Math.max(1, state.currentServings - 1) 
    }));
  },
  
  getScalingFactor: () => {
    const { originalServings, currentServings } = get();
    return originalServings > 0 ? currentServings / originalServings : 1;
  },
  
  reset: () => {
    set((state) => ({ currentServings: state.originalServings }));
  }
})); 