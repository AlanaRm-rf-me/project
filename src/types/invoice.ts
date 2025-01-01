export interface InvoiceItem {
  description: string;
  price: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  items: InvoiceItem[];
  total: number;
  date: Date;
}