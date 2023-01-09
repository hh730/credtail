import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../../common/Header';
import isEmpty from 'lodash.isempty';
import get from 'lodash.get';
import {
  currencySymbol,
  amountText,
  choosePaymentModes,
  confirm,
} from '../../common/constants';
import PaymentModes from './PaymentModes';
import PaymentConfirmButton from './PaymentConfirmButton';
import styles from './styles';

const CollectPaymentComp = props => {
  const {invoiceItem, navigation} = props;
  const id = get(invoiceItem, 'id', '');
  const invoiceNumber = get(invoiceItem, 'invoice_no', '');
  const retailerName = get(invoiceItem, 'retailer_name', '');
  const amountDue = get(invoiceItem, 'amount_due', 0);
  const paymentModes = get(invoiceItem, 'payment_modes', []);
  const [selected, setSelected] = useState(-1);
  const [amount, setAmount] = useState(currencySymbol + amountDue);

  const isButtonDisabled = () => {
    if (selected !== -1 && amount.length > 0) {
      return false;
    }
    return true;
  };

  const onConfirmButtonPress = () => {
    navigation.navigate('SuccessScreen', {
      invoiceNumber,
      retailerName,
      paymentMode: paymentModes[selected],
      amountPaid: amount.slice(1),
      id: id,
    });
  };

  const onBackArrowPress = () => {
    navigation.navigate('Invoices');
  };

  return (
    <View style={{flex: 1}}>
      <Header
        showBackArrow={true}
        title={invoiceNumber}
        subtitle={retailerName}
        onBackArrowPress={onBackArrowPress}
      />
      <View style={styles.topConatainer}>
        <Text style={styles.amountTextStyle}>{amountText}</Text>
        <TextInput
          style={styles.textInputStyle}
          value={amount}
          defaultValue={amount}
          keyboardType="numeric"
          onChangeText={text => {
            setAmount(text);
          }}
        />
      </View>
      <PaymentModes
        paymentModes={paymentModes}
        setSelected={setSelected}
        selected={selected}
      />
      <PaymentConfirmButton
        isButtonDisabled={isButtonDisabled}
        onConfirmButtonPress={onConfirmButtonPress}
      />
    </View>
  );
};

export default CollectPaymentComp;
