import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  Image,
 } from 'react-native';
 import COLORS from '../constants/colors';


interface CategoryViewProps {
  selected: boolean;
  category: {
    id: string,
    name: string,
    image: any // to be fixed later
  };
  onPress: () => void;
}


interface StyleProps {
  touchableStyle: ViewStyle;
  imgStyle: ImageStyle;
}

export const CategoryView: React.FC<CategoryViewProps> = ({ category, onPress, selected }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={
        {
          backgroundColor: selected ? COLORS.primary : COLORS.secondary,
          ...styles.touchableStyle
        }
    }>
      <View key={category.id} style={
        {
          flexDirection: 'row',
          alignItems: 'center',
        }
      } >
        <Image source={category.image} style={styles.imgStyle} />
        <Text style={
          {
            marginLeft: 10,
            color: selected ? COLORS.white : COLORS.primary
          }
        }>{category.name}</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create<StyleProps>({
  touchableStyle: {
    width: 120,
    padding: 5,
    borderRadius: 25,
    flex: 1,
    marginRight: 7,
  },
  imgStyle: {
    height: 35,
    width: 35,
    borderRadius: 30,
    backgroundColor: COLORS.white,
  }
})
