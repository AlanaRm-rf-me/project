import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { format } from 'date-fns';
import type { InvoiceData } from '../types/invoice';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  info: {
    fontSize: 12,
    marginBottom: 5,
  },
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
    minHeight: 30,
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
  },
  description: {
    width: '70%',
    paddingLeft: 10,
  },
  price: {
    width: '30%',
    paddingRight: 10,
    textAlign: 'right',
  },
  total: {
    marginTop: 20,
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

interface Props {
  data: InvoiceData;
}

export default function InvoicePDF({ data }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>INVOICE</Text>
          <Text style={styles.info}>Invoice #: {data.invoiceNumber}</Text>
          <Text style={styles.info}>Date: {format(data.date, 'MMMM dd, yyyy')}</Text>
        </View>

        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.price}>Price</Text>
          </View>
          
          {data.items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.total}>
          Total: ${data.total.toFixed(2)}
        </Text>
      </Page>
    </Document>
  );
}