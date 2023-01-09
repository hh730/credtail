import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

const PaymentModeCard = ({setSelected, selected, mode, index}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(index);
      }}>
      <View
        style={[
          styles.paymentCard,
          {
            backgroundColor: selected === index ? '#DFE8F4' : '#EFEFEF',
            borderColor: selected === index ? '#2760B6' : '#DFE8F4',
            borderWidth: selected === index ? 1 : 0,
          },
        ]}>
        <Text style={styles.paymentCardModeText}>{mode}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentModeCard;
