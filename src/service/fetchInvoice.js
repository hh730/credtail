import invoiceData from './sampleData';

export const fetchInvoice = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(invoiceData);
    }, 2000);
  });
  return promise;
};
