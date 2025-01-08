'use client'

import { useState, useEffect } from 'react';
import PeriodicTable from '../components/PeriodicTable';
import ParticleBackground from '../components/ParticleBackground';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white relative">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="absolute inset-0 z-0">
            <ParticleBackground />
          </div>
          <div className="relative z-10 py-8">
            <PeriodicTable />
          </div>
        </>
      )}
    </main>
  );
}

