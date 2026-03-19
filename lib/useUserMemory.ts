'use client';

import { type UserMemory, calculateZodiacSign } from '@/lib/common-constants';
import { useState, useEffect, useCallback } from 'react';

const USER_MEMORY_KEY = 'fortune-user-memory';
const STORAGE = typeof window !== 'undefined' ? localStorage : null;

const INITIAL_STATE: UserMemory = {
  name: null,
  birthDate: null,
  gender: null,
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
  isPersonalised: boolean;
}

//Hook for managing user memory in sessionStorage
//Stores gender, birthDate, zodiacSign, name, jobTitle

export function useUserMemory(): UseUserMemoryReturn {
  const [userMemory, setUserMemory] = useState<UserMemory>(INITIAL_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedMemory = STORAGE?.getItem(USER_MEMORY_KEY);
      if (storedMemory) {
        const parsed = JSON.parse(storedMemory) as UserMemory;
        setUserMemory(parsed);
      }
    } catch (error) {
      console.warn('Error loading user memory from localStorage', error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever userMemory changes
  useEffect(() => {
    if (isLoaded) {
      try {
        STORAGE?.setItem(USER_MEMORY_KEY, JSON.stringify(userMemory));
      } catch (error) {
        console.warn('Error saving user memory to localStorage', error);
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
      STORAGE?.removeItem(USER_MEMORY_KEY);
    } catch (error) {
      console.warn('Error clearing user memory from localStorage', error);
    }
  }, []);

  const isPersonalised = Boolean(userMemory.name && userMemory.birthDate);
  const isComplete = isPersonalised || Boolean(userMemory.onboardingSkipped);

  return {
    userMemory,
    isLoaded,
    updateUserMemory,
    clearUserMemory,
    isComplete,
    isPersonalised,
  };
}

// Helper hook to check if user needs onboarding
export function useNeedsOnboarding(): boolean {
  const { isLoaded, isComplete } = useUserMemory();
  if (!isLoaded) return false;
  return !isComplete;
}
