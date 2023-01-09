import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {confirm} from '../../common/constants';
import styles from './styles';

const PaymentConfirmButton = ({isButtonDisabled, onConfirmButtonPress}) => {
  return (
    <View style={styles.buttonConatiner}>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: isButtonDisabled() ? '#EFEFEF' : '#2760B6',
          },
        ]}
        onPress={onConfirmButtonPress}
        disabled={isButtonDisabled()}>
        <Text
          style={[
            styles.buttonText,
            {
              color: isButtonDisabled() ? '#5F5F5F' : '#FFFFFF',
            },
          ]}>
          {confirm}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentConfirmButton;
