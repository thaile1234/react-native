import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import styles from './style';

const HeaderComponent = ({
  title,
  iconLeft,
  onPress,
}: {
  title: string;
  iconLeft?: any;
  onPress?: any;
}) => {
  return (
    <View style={styles.HeaderComponent}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity onPress={onPress}>
        <Image source={iconLeft} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.txtHeader}>{title}</Text>
    </View>
  );
};
export default HeaderComponent;
