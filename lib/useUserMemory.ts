'use client';

import { type UserMemory, calculateZodiacSign } from '@/lib/common-constants';
import { useState, useEffect, useCallback } from 'react';

const USER_MEMORY_KEY = 'fortune-user-memory';

const INITIAL_STATE: UserMemory = {
  name: null,
  birthDate: null,
  occupation: null,
  zodiacSign: undefined,
  category: undefined,
  quizAnswers: undefined,
};

interface UseUserMemoryReturn {
  userMemory: UserMemory;
  isLoaded: boolean;
  updateUserMemory: (updates: Partial<UserMemory>) => void;
  clearUserMemory: () => void;
  isComplete: boolean;
}

//Hook for managing user memory in sessionStorage
//Stores gender, birthDate, zodiacSign, name, jobTitle

export function useUserMemory(): UseUserMemoryReturn {
  const [userMemory, setUserMemory] = useState<UserMemory>(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from sessionStorage on mount
  useEffect(() => {
    try {
      const storedMemory = sessionStorage.getItem(USER_MEMORY_KEY);
      if (storedMemory) {
        const parsed = JSON.parse(storedMemory) as UserMemory;
        setUserMemory(parsed);
      }
    } catch (error) {
      console.warn('Error loading user memory from sessionStorage', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to sessionStorage whenever userMemory changes
  useEffect(() => {
    if (isLoaded) {
      try {
        sessionStorage.setItem(USER_MEMORY_KEY, JSON.stringify(userMemory));
      } catch (error) {
        console.warn('Error saving user memory to sessionStorage', error);
      }
    }
  }, [userMemory, isLoaded]);

  const updateUserMemory = useCallback((updates: Partial<UserMemory>) => {
    setUserMemory((prev) => {
      const updated = { ...prev, ...updates };

      if (
        updates.birthDate &&
        updates.birthDate !== prev.birthDate &&
        updates.birthDate.trim() !== ''
      ) {
        try {
          updated.zodiacSign = calculateZodiacSign(updates.birthDate);
        } catch (error) {
          console.warn('Failed to calculate zodiac sign:', error);
          updated.zodiacSign = undefined;
        }
      }
      return updated;
    });
  }, []);

  const clearUserMemory = useCallback(() => {
    setUserMemory(INITIAL_STATE);
    try {
      sessionStorage.removeItem(USER_MEMORY_KEY);
    } catch (error) {
      console.warn('Error clearing user memory from sessionStorage', error);
    }
  }, []);

  // check if essential info is complete (gender, birthDate, name)
  const isComplete = Boolean(userMemory.name && userMemory.birthDate);

  return {
    userMemory,
    isLoaded,
    updateUserMemory,
    clearUserMemory,
    isComplete,
  };
}

// Helper hook to check if user needs onboarding
export function useNeedsOnboarding(): boolean {
  const { isLoaded, isComplete } = useUserMemory();
  if (!isLoaded) return false;
  return !isComplete;
}
