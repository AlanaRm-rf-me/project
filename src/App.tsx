import React from 'react';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import EffectsPage from './pages/EffectsPage';

export default function App() {
  // For demo purposes, showing Effects page
  return (
    <Layout>
      <EffectsPage />
    </Layout>
  );
}