import React, { useState } from 'react';
import { Plus, Download } from 'lucide-react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePDF from './InvoicePDF';
import ServiceItemForm from './ServiceItemForm';
import type { ServiceItem } from '../types/service';

export default function InvoiceForm() {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [items, setItems] = useState<ServiceItem[]>([{ 
    type: 'product',
    description: '', 
    price: 0 
  }]);

  const addItem = () => {
    setItems([...items, { type: 'product', description: '', price: 0 }]);
  };

  const updateItem = (index: number, updatedItem: ServiceItem) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    setItems(newItems);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const invoiceData = {
    invoiceNumber,
    items,
    total,
    date: new Date(),
  };

  return (
    <div className="min-h-screen bg-[#1a1f2c] text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#4a9eff]">Invoice Generator</h1>
        
        <div className="bg-[#232936] rounded-lg p-6 shadow-xl mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Invoice Number</label>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className="w-full bg-[#1a1f2c] border border-[#4a9eff]/20 rounded-md p-2 text-gray-100 focus:outline-none focus:border-[#4a9eff]"
              placeholder="INV-001"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Items</h2>
              <button
                onClick={addItem}
                className="flex items-center gap-2 bg-[#4a9eff] text-white px-4 py-2 rounded-md hover:bg-[#4a9eff]/90 transition-colors"
              >
                <Plus size={16} />
                Add Item
              </button>
            </div>

            {items.map((item, index) => (
              <ServiceItemForm
                key={index}
                item={item}
                onChange={(updatedItem) => updateItem(index, updatedItem)}
                onRemove={() => removeItem(index)}
              />
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-[#4a9eff]/20">
            <div className="flex justify-between items-center text-xl font-semibold">
              <span>Total:</span>
              <span className="text-[#4a9eff]">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <PDFDownloadLink
              document={<InvoicePDF data={invoiceData} />}
              fileName={`invoice-${invoiceNumber || 'draft'}.pdf`}
              className="flex items-center gap-2 bg-[#4a9eff] text-white px-6 py-3 rounded-md hover:bg-[#4a9eff]/90 transition-colors"
            >
              <Download size={20} />
              Download PDF
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </div>
  );
}