'use client';

import {
  type UserMemory,
  type PersonalInfo,
  calculateZodiacSign,
} from '@/lib/common-constants';
import { useState, useEffect, useCallback } from 'react';

const USER_MEMORY_KEY = 'fortune-user-memory';

interface UseUserMemoryReturn {
  userMemory: UserMemory | null;
  isLoaded: boolean;
  updateUserMemory: (updates: Partial<UserMemory>) => void;
  setPersonalInfo: (info: PersonalInfo) => void;
  clearUserMemory: () => void;
  isComplete: boolean;
}

//Hook for managing user memory in sessionStorage
//Stores gender, birthDate, zodiacSign, name, jobTitle

export function useUserMemory(): UseUserMemoryReturn {
  const [userMemory, setUserMemory] = useState<UserMemory | null>(null);
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
    if (isLoaded && userMemory) {
      try {
        sessionStorage.setItem(USER_MEMORY_KEY, JSON.stringify(userMemory));
      } catch (error) {
        console.warn('Error saving user memory to sessionStorage', error);
      }
    }
  }, [userMemory, isLoaded]);

  const updateUserMemory = useCallback((updates: Partial<UserMemory>) => {
    setUserMemory((prev) => {
      if (!prev) {
        // If no existing memory, create new with required fields
        const newMemory: UserMemory = {
          gender: updates.gender,
          birthDate: updates.birthDate || '',
          zodiacSign: updates.zodiacSign,
          name: updates.name || '',
          jobTitle: updates.jobTitle,
        };
        return newMemory;
      }
      // Update existing memory
      const updated = { ...prev, ...updates };

      // Recalculate zodiac sign if birthDate changes and is not empty
      if (
        updates.birthDate &&
        updates.birthDate !== prev.birthDate &&
        updates.birthDate.trim() !== ''
      ) {
        try {
          updated.zodiacSign = calculateZodiacSign(updates.birthDate);
        } catch (error) {
          console.warn('Failed to calculate zodiac sign:', error);
          // Keep the previous zodiac sign if calculation fails
        }
      }
      return updated;
    });
  }, []);

  const setPersonalInfo = useCallback((info: PersonalInfo) => {
    let zodiacSign = info.zodiacSign;

    // Only calculate zodiac sign if birthDate is provided and valid
    if (!zodiacSign && info.birthDate && info.birthDate.trim() !== '') {
      try {
        zodiacSign = calculateZodiacSign(info.birthDate);
      } catch (error) {
        console.warn('Failed to calculate zodiac sign:', error);
      }
    }

    const newMemory: UserMemory = {
      gender: info.gender,
      birthDate: info.birthDate,
      zodiacSign,
      name: info.name || '',
      jobTitle: info.jobTitle,
    };

    setUserMemory(newMemory);
  }, []);

  const clearUserMemory = useCallback(() => {
    setUserMemory(null);
    try {
      sessionStorage.removeItem(USER_MEMORY_KEY);
    } catch (error) {
      console.warn('Error clearing user memory from sessionStorage', error);
    }
  }, []);

  // check if essential info is complete (gender, birthDate, name)
  const isComplete = Boolean(
    userMemory?.gender &&
      userMemory?.birthDate &&
      userMemory?.name &&
      userMemory?.jobTitle &&
      userMemory?.zodiacSign,
  );

  return {
    userMemory,
    isLoaded,
    updateUserMemory,
    setPersonalInfo,
    clearUserMemory,
    isComplete,
  };
}

// Helper hook to check if user needs onboarding
export function useNeedsOnboarding(): boolean {
  const { userMemory, isLoaded, isComplete } = useUserMemory();

  if (!isLoaded) return false; // Dont redirect while loading

  return !userMemory || !isComplete;
}

// helper to convert UserMemory to PersonalInfo Format
export function userMemoryToPersonalInfo(memory: UserMemory): PersonalInfo {
  return {
    name: memory.name || '',
    gender: memory.gender,
    birthDate: memory.birthDate || '',
    jobTitle: memory.jobTitle,
    zodiacSign: memory.zodiacSign,
    calculatedSign: memory.zodiacSign,
  };
}
