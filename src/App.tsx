import React from 'react';
import { Toaster } from 'react-hot-toast';
import { MainLayout } from './components/Layout/MainLayout';
import { MainContent } from './components/MainContent';
import { useStore } from './store/useStore';

function App() {
  const { user, setUser } = useStore();

  React.useEffect(() => {
    // Set a default user for development
    setUser({
      id: '1',
      name: 'User',
      goal: 'maintain',
      dailyCalorieTarget: 2000
    });
  }, [setUser]);

  return (
    <>
      <Toaster position="top-right" />
      <MainLayout>
        {user && <MainContent user={user} />}
      </MainLayout>
    </>
  );
}

export default App;