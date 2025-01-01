import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold chromatic-text">{title}</h1>
      {description && (
        <p className="text-gray-400 mt-2">{description}</p>
      )}
    </div>
  );
}