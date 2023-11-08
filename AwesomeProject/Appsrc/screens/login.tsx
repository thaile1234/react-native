import React, { useState } from 'react';
import {ImageBackground, ScrollView, Text, TouchableOpacity, View,_ScrollView} from 'react-native';
import HeaderComponent from '../components/HeaderComponents';
import styles from './style';
import {IMAGES} from '../theme/images';
import { useNavigation } from '@react-navigation/native';
import SCREEN from '../navigators/Routekey';
import TextInputComponent from '../components/TextInput';
import useLogin from '../containers/login';

const LoginScreen = () => {
  const Navigation = useNavigation();
  const {userName,onChangeUserName,passwork,onChangePasswork,onSubmit}= useLogin();


  return (
    <View style={styles.LoginScreen}>
      <ImageBackground source={IMAGES.bg_images} style={styles.LoginScreen}>
        <HeaderComponent title="Màn hình đăng nhập" iconLeft={IMAGES.iconBack} />
     <ScrollView>
       <Text style={styles.txt}>{userName}</Text>
       <TextInputComponent 
       placeholder="User Name"
       value={userName}
       onChangeText={(text:string)=>{onChangeUserName(text)}}
       secureTextEntry={true}
       />
        <TextInputComponent 
       placeholder="Passwork"
       value={passwork}
       onChangeText={(text:string)=>{onChangePasswork(text)}}
       secureTextEntry={true}
       />
       <TouchableOpacity>
        <Text style={styles.txt1} onPress={onSubmit}>Sumbit</Text>
       </TouchableOpacity>
     </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
