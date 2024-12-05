import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { getCurrentUser } from '../services/userService';
import { User } from '../types';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const { setUser: setStoreUser } = useStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const userData = await getCurrentUser(firebaseUser);
          if (userData) {
            setUser(userData);
            setStoreUser(userData);
          } else {
            setUser(null);
            setStoreUser(null);
            toast.error('Erreur de chargement du profil utilisateur');
          }
        } else {
          setUser(null);
          setStoreUser(null);
        }
      } catch (error) {
        console.error('Auth state change error:', error);
        setUser(null);
        setStoreUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [setStoreUser]);

  return { loading, user };
};