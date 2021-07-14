import React from 'react';
import { SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ViewStyle,
  ImageStyle,
 } from 'react-native';
import COLORS from '../../constants/colors'
import { PrimaryButton } from '../../compnents';
import { StackScreenProps } from '@react-navigation/stack';


export const OnBoardScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white }}
    >
      <View style={{ height: 400}}>
        <Image
          style={styles.imgView}
          source={require('../../assets/onboardImage.png')}
        />
      </View>
      <View style={styles.textStyle}>
        <Text style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          Delicious Food
        </Text>
        <Text
          style={{
            marginVertical: 20,
            fontSize: 18,
            color: COLORS.grey,
            textAlign: 'center',
          }}
        >
          We help you to find best and delicious food
        </Text>
        <View style={styles.indicatorView}>
          <View style={styles.currentIndicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
        <PrimaryButton  title="Get Started" onPress={() => navigation.navigate('Home')} />
      </View>
    </SafeAreaView>
  );
}

interface Styles {
  imgView: ImageStyle,
  textStyle: ViewStyle,
  indicatorView: ViewStyle,
  currentIndicator: ViewStyle,
  indicator: ViewStyle
}

const styles =  StyleSheet.create<Styles>({
  imgView: {
    width: '100%',
    resizeMode: 'contain',
    top: -150
  },
  textStyle: {
    flex: 1,
    paddingHorizontal: 50,
  },
  indicatorView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    marginHorizontal: 5
  },
  currentIndicator: {
    height: 10,
    width: 20,
    borderRadius: 6,
    backgroundColor: COLORS.primary
  }
});
