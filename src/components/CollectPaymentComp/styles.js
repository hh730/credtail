import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topConatainer: {
    flex: 0.3,
    backgroundColor: '#2A2D31',
    borderTopWidth: 1,
    borderTopColor: '#3A3A3A',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingLeft: 27,
    paddingTop: 18,
    paddingRight: 25,
  },
  amountTextStyle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 11,
    fontStyle: 'normal',
    color: '#C4C4C4',
  },
  textInputStyle: {
    color: 'white',
    borderWidth: 1,
    borderRadius: 6,
    height: 50,
    fontSize: 24,
    paddingLeft: 20,
    color: 'white',
    backgroundColor: '#24262A',
  },
  paymentmodesConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
    marginTop: 113,
  },
  choosePaymentModeText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#2F2F2F',
  },
  paymentCardConatiner: {marginTop: 51, marginLeft: 17, flex: 1},
  paymentCard: {
    flex: 0.5,
    width: 106,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  paymentCardModeText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#2F2F2F',
  },
  buttonConatiner: {justifyContent: 'flex-end', flex: 0.12},
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'normal',
  },
});

export default styles;
