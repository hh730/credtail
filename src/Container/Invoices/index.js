import React, {useEffect, useReducer, useState} from 'react';
import {Text, View} from 'react-native';
import InvoicesComp from '../../components/InvoicesComp';
import {fetchInvoice} from '../../service/fetchInvoice';
import invoiceReducer from '../../reducer/invoiceReducer';

const Invoices = ({route, navigation}) => {
  const [state, dispatch] = useReducer(invoiceReducer, {
    invoiceList: [],
    invoiceItem: {},
  });
  const [loading, setLoading] = useState(false);
  const fetchInvoiceList = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetchInvoice()
      .then(invoiceData => {
        dispatch({
          type: 'SET_INVOICE_LIST',
          payload: invoiceData?.data,
        });
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchInvoiceList();
  }, []);
  return (
    <View style={{backgroundColor: 'white'}}>
      <InvoicesComp
        loading={loading}
        invoicesList={state.invoiceList}
        navigation={navigation}
        dispatch={dispatch}
      />
    </View>
  );
};

export default Invoices;
