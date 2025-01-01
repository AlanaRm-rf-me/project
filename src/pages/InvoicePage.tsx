import React from 'react';
import InvoiceForm from '../components/InvoiceForm';

export default function InvoicePage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Create Invoice</h1>
        <p className="text-gray-400 mt-2">Generate a new invoice for your clients</p>
      </div>
      
      <InvoiceForm />
    </div>
  );
}