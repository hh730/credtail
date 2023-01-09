import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  successScreenContainer: {backgroundColor: '#188748', flex: 1},
  successIconConatiner: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 0.4,
    paddingBottom: 30,
  },
  successInformationConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.3,
  },
  informationTopConatiner: {
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 43,
  },
  invoiceNumberStyle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#EFEFEF',
  },
  amountPaidStyle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 40,
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
  retailerNameStyle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#EFEFEF',
    paddingTop: 30,
  },
  paymentModeConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 21,
  },
  paymentStyle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 24,
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
  redirectConatiner: {
    position: 'absolute',
    bottom: 20,
    left: '22%',
  },
  redirectTextStyle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#FFFFFF',
  },
});

export default styles;
