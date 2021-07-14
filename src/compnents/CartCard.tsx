import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ViewStyle,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface FoodProps {
  food: {
    id: string;
    name: string;
    ingredients: string;
    image: ImageSourcePropType;
    price: string;
  },
  total: (totalAmount: number) => void;
}


interface StyleProps {
  cardView: ViewStyle;
  addRemoveBtnView: ViewStyle;
}

export const CartCard: React.FC<FoodProps> = ({ food, total }) => {
  const [ order, setOrder ] = useState(0);
  return (
    <View style={styles.cardView}>
      <Image source={food.image} style={{ height: 90, width: 90}} />

      <View style={{ marginHorizontal: 15,  flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold'}}>{food.name}</Text>
        <Text style={{ fontSize: 14, color: COLORS.grey }}>{food.ingredients}</Text>
        <Text style={{ fontWeight: 'bold'}}>${food.price}</Text>
      </View>

      <View style={{ alignItems: 'center',  marginRight: 10 }} >
        <Text style={{ fontSize: 16, fontWeight: 'bold'}}>{order}</Text>
        <View style={styles.addRemoveBtnView}>
          <Icon
            name="remove" size={20}
            color={COLORS.white}
            onPress={() => {
              if(order - 1 < 0) return;
              setOrder(order - 1);
              total(parseFloat(food.price)*-1);
            }} />
          <Icon
            name="add"
            size={20}
            color={COLORS.white}
            onPress={() => {
              setOrder(order + 1);
              total(parseFloat(food.price));
              //totalAmount = parseFloat(Math.fround(totalAmount + parseFloat(food.price)).toFixed(2));
              // console.log(totalAmount)
            }}/>
        </View>
      </View>

    </View>
  );
  }

const styles = StyleSheet.create<StyleProps>({
  cardView: {
    height: 110,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 30,
    elevation: 13,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  addRemoveBtnView: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    marginTop: 5
  }
});
