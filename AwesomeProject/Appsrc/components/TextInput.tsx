import React from 'react';
import {Text, View, TextInput} from 'react-native';
import styles from './style';

const TextInputComponent = ({
    value,
    onChangeText,
    placeholder,
    keyboardType='default',
    secureTextEntry

}:{
    value:string
    onChangeText:any
    placeholder:String
    keyboardType?:any
    secureTextEntry:boolean
}) => {
  return (
    <View style={styles.txtInputComponent}>
      <TextInput style={styles.txtInput} placeholder={placeholder} 
      onChangeText={onChangeText}
      value={value}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      
      />
    </View>
  );
};
export default TextInputComponent;
