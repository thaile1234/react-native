import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../theme/images';
import styles from './style';

// const Tab = createBottomTabNavigator();

const ItemSearch = (
       {
        imageSearch,
       
    }:{
         imageSearch:any,
      
    }
) => {
  return (
    <View style={styles.ItemSearch}>
        <TextInput style={styles.TxtSearch}/>
       <TouchableOpacity>
         <Image   source={IMAGES.icSearch} style={styles.imgSearch} resizeMode='contain'/>
       </TouchableOpacity>
    </View>

  )}

  export default ItemSearch;