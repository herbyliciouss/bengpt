import { AUTH_ERRORS } from '../config/constants';
import { FirebaseError } from 'firebase/app';

export const getFirebaseErrorMessage = (error: unknown): string => {
  if (error instanceof FirebaseError) {
    return AUTH_ERRORS[error.code as keyof typeof AUTH_ERRORS] || 'An error occurred';
  }
  return 'An unexpected error occurred';
};