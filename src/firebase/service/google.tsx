// src/services/auth.js
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../db';

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // result.user содержит все данные пользователя
    return result.user;
  } catch (error) {
    console.error('Ошибка при входе через Google:', error);
    throw error;
  }
};
