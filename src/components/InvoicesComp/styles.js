import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  errorCardStyle: {justifyContent: 'center', alignItems: 'center'},
  invoiceItemConatiner: {
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#727272',
  },
  invoiceNumberText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 14,
    fontStyle: 'normal',
    color: '#646464',
  },
  retailerNameText: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    fontStyle: 'normal',
    color: '#727272',
  },
  amountDueConainer: {marginLeft: 'auto'},
  amountDueText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 16,
    fontStyle: 'normal',
    color: '#000000',
  },
});

export default styles;
