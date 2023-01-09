import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LeftArrow from '../icons/LeftArrow';

const Header = props => {
  const {showBackArrow, title, subtitle, onBackArrowPress} = props;
  return (
    <View
      style={{
        backgroundColor: '#2A2D31',
        flexDirection: 'row',
        height: 56,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}>
      {showBackArrow ? (
        <TouchableOpacity onPress={onBackArrowPress}>
          <LeftArrow />
        </TouchableOpacity>
      ) : null}
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: 16,
            fontStyle: 'normal',
            color: '#ECECEC',
            paddingLeft: 24,
          }}>
          {title}
        </Text>
        {subtitle && (
          <Text
            style={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: 12,
              fontStyle: 'normal',
              color: '#D0D0D0',
              paddingLeft: 24,
            }}>
            {subtitle}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Header;
