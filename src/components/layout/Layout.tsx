import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../../styles/effects.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen constellation-bg">
      <Navbar />
      <Sidebar />
      <main className="pl-64 pt-16">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}