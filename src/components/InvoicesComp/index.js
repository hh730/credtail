import React from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import isEmpty from 'lodash.isempty';
import ErrorCard from '../../common/ErrorCard';
import InvoiceItem from './InvoiceItem';
import Header from '../../common/Header';
import {invoicesHeader} from '../../common/constants';
import styles from './styles';

const InvoicesComp = props => {
  const {invoicesList, loading, navigation, dispatch} = props;
  const renderItem = ({item}) => {
    return (
      <InvoiceItem
        invoiceItem={item}
        navigation={navigation}
        dispatch={dispatch}
      />
    );
  };
  return (
    <View>
      <Header showBackArrow={true} title={invoicesHeader} />
      {isEmpty(invoicesList) && loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : !isEmpty(invoicesList) ? (
        <View>
          <FlatList
            data={invoicesList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                tintColor="white"
                // onRefresh={refetchCoins}
              />
            }
          />
        </View>
      ) : (
        <View style={styles.errorCardStyle}>
          <ErrorCard handleRefresh={() => {}} />
        </View>
      )}
    </View>
  );
};

export default InvoicesComp;
