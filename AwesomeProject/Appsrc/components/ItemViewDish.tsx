import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../theme/images';
import styles from './style';

ItemViewDish = (
    {
        imageProduct,
        title,
        imageLike,
        monney,
    }:{
         imageProduct:any,
        title:string,
        imageLike:any,
        monney:string,
    }
) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageProduct} style={styles.imgProduct} resizeMode='cover' />
      <Text style={styles.txtTitle}>{title}</Text>
     <View style={styles.txtCart} >
       <TouchableOpacity >
        <Image source={imageLike} style={styles.imgLike} resizeMode='contain'/>
      </TouchableOpacity>
      <Text style={styles.txtMonney}>{monney}</Text>
     </View>
    </TouchableOpacity>
  );
};
export default ItemViewDish;
