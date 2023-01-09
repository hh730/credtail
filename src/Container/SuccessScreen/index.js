import React, {useEffect} from 'react';
import {View} from 'react-native';
import SuccessScreenComp from '../../components/SuccessScreenComp';

const SuccessScreen = ({route, navigation}) => {
  const {amountPaid, retailerName, invoiceNumber, paymentMode, id} =
    route.params;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Invoices', {id});
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <SuccessScreenComp
        invoiceNumber={invoiceNumber}
        retailerName={retailerName}
        amountPaid={amountPaid}
        paymentMode={paymentMode}
        navigation={navigation}
      />
    </View>
  );
};

export default SuccessScreen;
