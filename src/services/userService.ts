import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User as FirebaseUser 
} from 'firebase/auth';
import { auth } from '../config/firebase';
import { User } from '../types';
import { getFirebaseErrorMessage } from '../utils/errorHandling';
import toast from 'react-hot-toast';

export const createUser = async (
  email: string, 
  password: string, 
  userData: Omit<User, 'id'>
): Promise<User> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return {
      id: userCredential.user.uid,
      email: userCredential.user.email || email,
      ...userData
    };
  } catch (error) {
    console.error('Error creating user:', error);
    const errorMessage = getFirebaseErrorMessage(error);
    toast.error(errorMessage);
    throw error;
  }
};

export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return {
      id: userCredential.user.uid,
      email: userCredential.user.email || email,
      name: email.split('@')[0],
      goal: 'maintain',
      dailyCalorieTarget: 2000
    };
  } catch (error) {
    console.error('Error signing in:', error);
    const errorMessage = getFirebaseErrorMessage(error);
    toast.error(errorMessage);
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
    toast.success('Déconnexion réussie');
  } catch (error) {
    console.error('Error signing out:', error);
    const errorMessage = getFirebaseErrorMessage(error);
    toast.error(errorMessage);
    throw error;
  }
};

export const getCurrentUser = async (firebaseUser: FirebaseUser): Promise<User | null> => {
  try {
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      name: firebaseUser.email?.split('@')[0] || '',
      goal: 'maintain',
      dailyCalorieTarget: 2000
    };
  } catch (error) {
    console.error('Error getting current user:', error);
    const errorMessage = getFirebaseErrorMessage(error);
    toast.error(errorMessage);
    throw error;
  }
};