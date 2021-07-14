import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ViewStyle,
  ImageStyle,
  Dimensions,
  Image,
  TouchableHighlight,
  ImageSourcePropType
 } from 'react-native';
 import COLORS from '../constants/colors';
 import Icon from 'react-native-vector-icons/MaterialIcons';


const { width } = Dimensions.get('screen')
const cardWidth = width / 2 - 20;

interface CardProps {
  food: {
    id: string;
    name: string;
    image: ImageSourcePropType;
    ingredients: string;
    price: string;
  },
  navigate: () => void;
}

interface StyleProps {
  cardView: ViewStyle;
  imgView: ImageStyle;
  priceView: ViewStyle;
  addBtnView: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ food, navigate }) => {
  return (
    <TouchableHighlight //  to avoid effects on shadowed card
      activeOpacity={0.9}
      underlayColor='none'
      onPress={() => navigate() }
    >
      <View style={styles.cardView}>
        <View style={styles.imgView }>
          <Image source={food.image} style={{ height: 120, width: 120 }} />
        </View>
        <View style={{ marginHorizontal: 20 }} >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{food.name}</Text>
          <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>{food.ingredients}</Text>
        </View>
        <View style={styles.priceView}>
          <Text style={{ fontWeight: 'bold' }}>${food.price}</Text>
          <View style={ styles.addBtnView } >
            <Icon name='add' size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create<StyleProps>({
  cardView: {
    flex: 1,
    height: 230,
    width: cardWidth,
    marginTop: 50,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  imgView: {
    alignItems: 'center',
    top: -40,
  },
  priceView: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  addBtnView: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
