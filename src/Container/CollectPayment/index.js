import React, {useReducer} from 'react';
import {View} from 'react-native';
import CollectPaymentComp from '../../components/CollectPaymentComp';
import invoiceReducer from '../../reducer/invoiceReducer';
import get from 'lodash.get';

const CollectPayment = ({route, navigation}) => {
  const {invoiceItem} = route.params;
  const id = get(invoiceItem, 'id', '');
  const invoiceNumber = get(invoiceItem, 'invoice_no', '');
  const retailerName = get(invoiceItem, 'retailer_name', '');
  const amountDue = get(invoiceItem, 'amount_due', 0);
  const paymentModes = get(invoiceItem, 'payment_modes', []);
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <CollectPaymentComp
        // id={id}
        invoiceItem={invoiceItem}
        // invoiceNumber={invoiceNumber}
        // retailerName={retailerName}
        // amountDue={amountDue}
        // paymentModes={paymentModes}
        navigation={navigation}
      />
    </View>
  );
};

export default CollectPayment;

// {
//     id: 111,
//     invoice_no: 'MD22/110656',
//     retailer_name: 'PADMAMBA PRINTERS',
//     amount_due: 327,
//     payment_modes: ['Online', 'Cash', 'Cheque'],
//   },
