import {Text, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import PaymentModeCard from './PaymentModeCard';
import isEmpty from 'lodash.isempty';
import {choosePaymentModes} from '../../common/constants';
import styles from './styles';

const PaymentModes = ({paymentModes, setSelected, selected}) => {
  return (
    <View style={styles.paymentmodesConatiner}>
      <Text style={styles.choosePaymentModeText}>{choosePaymentModes}</Text>
      <View style={styles.paymentCardConatiner}>
        {!isEmpty(paymentModes) ? (
          <ScrollView horizontal={true}>
            {paymentModes.map((mode, index) => {
              return (
                <PaymentModeCard
                  setSelected={setSelected}
                  selected={selected}
                  mode={mode}
                  index={index}
                />
              );
            })}
          </ScrollView>
        ) : null}
      </View>
    </View>
  );
};

export default PaymentModes;
