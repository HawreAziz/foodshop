import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import foods from '../../constants/foods';
import { Header, Footer, CartCard } from '../../compnents';


export const CartScreen: React.FC<BottomTabBarProps>  = ({ navigation }) => {
  const [ total, setTotal ] = useState(0);

  console.log(total);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Cart" goBack={navigation.goBack} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={foods}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <CartCard food={item} total={(totalAmount: number) => {
            setTotal(parseFloat(Math.fround(total + totalAmount).toFixed(2)))
          }
        }/>
        }}
      />
      <Footer total={total} />
    </SafeAreaView>
  );
}
