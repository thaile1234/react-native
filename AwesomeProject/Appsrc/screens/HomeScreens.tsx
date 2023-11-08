import React from 'react';
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
  _ScrollView,
} from 'react-native';
import HeaderComponent from '../components/HeaderComponents';
import styles from './style';
import {IMAGES} from '../theme/images';
import {useNavigation} from '@react-navigation/native';
import SCREEN from '../navigators/Routekey';
import ItemViewDish from '../components/ItemViewDish';
import ItemSearch from '../components/ItemSearch';

const HomeScreen = () => {
  const Navigation = useNavigation();
  const listProduct = [
    {
      imageProduct: IMAGES.imgBunMangVit,
      title: 'Bún măng vịt',
      imageLike: IMAGES.icShoppingCart,
      monney:'20000 VND',
    },
    {
      imageProduct: IMAGES.imgCanhGheRauMuong,
      title: 'Canh ghẹ rau muống',
      imageLike: IMAGES.icShoppingCart,
       monney:'20000 VND',
    },

    {
      imageProduct: IMAGES.imgCanhNgaoChua,
      title: 'Canh ngao chua',
      imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
    {
      imageProduct: IMAGES.imgChaoCaHoi,
      title: 'Cháo cá hồi',
       imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
   
  ];

   const listProduct1 = [
    {
      imageProduct: IMAGES.imgPhoXao,
      title: 'Phở xào',
      imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
    {
      imageProduct: IMAGES.imgChaBo,
      title: 'Chả bò',
     imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },

    {
      imageProduct: IMAGES.imgSaLad,
      title: 'Sa lad',
      imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
    {
      imageProduct: IMAGES.imgSua,
      title: 'Sữa',
      imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
     {
      imageProduct: IMAGES.imgNuocEpOi,
      title: 'Nước ép ổi',
     imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },

     {
      imageProduct: IMAGES.imgNuocEpCaChua,
      title: 'Nước ép cà chua',
      imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
     {
      imageProduct: IMAGES.imgBunMangVit,
      title: 'Bún măng vịt',
      imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
     {
      imageProduct: IMAGES.imgCanhNgaoChua,
      title: 'Canh ngao chua',
          imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
     {
      imageProduct: IMAGES.imgCanhGheRauMuong,
      title: 'Canh ghẹ rau muống',
          imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
     {
      imageProduct: IMAGES.imgCaKeoLaGiang,
      title: 'Cá kèo',
         imageLike: IMAGES.icShoppingCart,
        monney:'20000 VND',
    },
  ];
 
  const render = ({item}) => {
    return (
      <ItemViewDish
        imageLike={item?.imageLike}
        title={item?.title}
        imageProduct={item?.imageProduct}
        monney={item?.monney}
      />
    );
  };

   const renderCol = ({item}) => {
    return (
      <ItemViewDish
        imageLike={item?.imageLike}
        title={item?.title}
        imageProduct={item?.imageProduct}
         monney={item?.monney}
      />
    );
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        title="Màn hình trang chủ"
        iconLeft={IMAGES.iconBack}
        onPress={() => Navigation.goBack()}
      />
      <ScrollView>
        <ItemSearch/>
<Text>Món đã xem</Text>
        <View style={{flexDirection: 'row'}}>
          
          <FlatList
            data={listProduct}
            renderItem={render}
            showsHorizontalScrollIndicator={false}
           horizontal={true}
          
           // numColumns={2}
          />
        </View>
        <Text>Món đề xuất</Text>
    <View style={{flexDirection: 'row'}}>
          <FlatList
            data={listProduct1}
            renderItem={renderCol}
            showsHorizontalScrollIndicator={false}
           //horizontal={true}
            numColumns={2}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default HomeScreen;
