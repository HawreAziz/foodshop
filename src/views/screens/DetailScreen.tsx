import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ViewStyle,
  ScrollView,
  Image,
  ImageStyle,
 } from 'react-native';
import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackScreenProps } from '@react-navigation/stack';
import { SecondaryButton } from '../../compnents';
import { Header } from '../../compnents';


interface StyleProps {
  imgView: ImageStyle;
  imageViewStyle: ViewStyle;
  descriptionView: ImageStyle;
  heartView: ViewStyle;
}

export const DetailScreen: React.FC<StackScreenProps<any>> = ({ navigation, route}) => {
  const food = route.params;
  if(!food){
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }} >
      <Header goBack={navigation.goBack} title="Details" />
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={ styles.imageViewStyle } >
          <Image source={food.image} style={styles.imgView} />
        </View>
        <View style={styles.descriptionView}>
          <View style={
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 50,
              alignItems: 'center'
            }
          }>
            <Text style={
              {
                fontSize: 20,
                color: COLORS.white,
                fontWeight: 'bold'
              }
            }>{food.name}</Text>
            <View style={styles.heartView}
            >
              <Icon name='favorite-border' size={20} color={COLORS.grey} />
            </View>
          </View>
          <View>
            <Text style={
              {
                fontSize: 16,
                color: COLORS.white,
                lineHeight: 22,
                 marginTop: 20
              }
            }>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </Text>
          </View>
          <View style={{ marginTop: 40, marginBottom: 50 }}>
            <SecondaryButton
              title='Add To Card'
              onPress={() => console.log('Added to card')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create<StyleProps>({
  imgView: {
    resizeMode: 'contain',
    height: 220,
  },
  imageViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  descriptionView: {
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  heartView: {
    height: 45,
    width: 45,
    borderRadius: 40,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
