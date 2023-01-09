import React from 'react';
import {Text, View} from 'react-native';
import SucessCheck from '../../common/icons/SuccessCheck';
import {
  paidBy,
  redirectToHomeScreen,
  currencySymbol,
} from '../../common/constants';
import styles from './styles';

const SuccessScreenComp = props => {
  const {invoiceNumber, retailerName, amountPaid, paymentMode} = props;
  const payment = paidBy + paymentMode.toUpperCase();
  return (
    <View style={styles.successScreenContainer}>
      <View style={styles.successIconConatiner}>
        <SucessCheck />
      </View>
      <View style={styles.successInformationConatiner}>
        <View style={styles.informationTopConatiner}>
          <Text style={styles.invoiceNumberStyle}>{invoiceNumber}</Text>
          <Text style={styles.amountPaidStyle}>
            {currencySymbol + amountPaid}
          </Text>
          <Text style={styles.retailerNameStyle}>{retailerName}</Text>
        </View>
        <View style={styles.paymentModeConatiner}>
          <Text style={styles.paymentStyle}>{payment}</Text>
        </View>
      </View>
      <View style={styles.redirectConatiner}>
        <Text style={styles.redirectTextStyle}>{redirectToHomeScreen}</Text>
      </View>
    </View>
  );
};

export default SuccessScreenComp;
