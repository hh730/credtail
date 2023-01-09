import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import get from 'lodash.get';
import {currencySymbol} from '../../common/constants';
import styles from './styles';

const InvoiceItem = ({invoiceItem, navigation, dispatch}) => {
  const invoiceNumber = get(invoiceItem, 'invoice_no', '');
  const retailerName = get(invoiceItem, 'retailer_name', '');
  const amountDue = get(invoiceItem, 'amount_due', 0);
  const paymentModes = get(invoiceItem, 'payment_modes', []);
  const onInvoiceItemPress = () => {
    dispatch({
      type: 'SET_IVOICE_ITEM',
      payload: invoiceItem,
    });
    navigation.navigate('CollectPayment', {invoiceItem});
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.invoiceItemConatiner}
        onPress={onInvoiceItemPress}>
        <View>
          <Text style={styles.invoiceNumberText}>{invoiceNumber}</Text>
          <Text style={styles.retailerNameText}>{retailerName}</Text>
        </View>
        <View style={styles.amountDueConainer}>
          <Text style={styles.amountDueText}>{currencySymbol + amountDue}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InvoiceItem;
