import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
 } from 'react-native';
 import COLORS from '../constants/colors';
 import { PrimaryButton } from '../compnents/CustomButton'


interface StyleProps {
  container: ViewStyle;
  priceView: ViewStyle;
}


export const Footer: React.FC<{total: number}> = ({ total }) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceView}>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>Total Price</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold'}}>${total}</Text>
      </View>
      <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
        <PrimaryButton
          title="CHECKOUT"
          onPress={() => console.log("Payment system not implemented yet")} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create<StyleProps>({
  container: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
