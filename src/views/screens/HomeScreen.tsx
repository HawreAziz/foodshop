import React from 'react';
import { View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageStyle,
  ViewStyle,
  TextInput,
  ScrollView,
  FlatList,
  } from 'react-native';
import COLORS from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CategoryView, Card } from '../../compnents';
import categories from '../../constants/categories';
import foods from '../../constants/foods';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

interface HomeScreenStyleProps {
  container: ViewStyle;
  imageStyle: ImageStyle;
  searchStyle: ViewStyle;
}




export const HomeScreen: React.FC<BottomTabBarProps> = ({ navigation }) => {
  const [ selectedCategory, setSelectedCategory ] = React.useState(0);

  const listCategories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 10 }}
    >
      {
        categories.map((category, index) => {
          return <CategoryView
          key={index}
          selected={selectedCategory === index}
          category={category}
          onPress={() => setSelectedCategory(index) }
          />
        })
      }
    </ScrollView>
  );
  }

  return (
    <SafeAreaView style={{ flex: 1}} >
    <View style={ styles.container }>
      <View>
        <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 5 }}>Hawre, Aziz</Text>
        <Text style={{ fontSize: 20, color: COLORS.grey }} >What do you want to do today</Text>
      </View>
      <View>
        <Image source={require('../../assets/person.png')} style={ styles.imageStyle } />
      </View>
    </View>
    <View style={styles.searchStyle}>
      <View style={
        {
          height: 45,
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          backgroundColor: COLORS.light,
          borderRadius: 10,
          width: '80%',
          marginHorizontal: 10
        }
      }>
        <Icon name='search'  size={25} color={COLORS.grey} />
        <TextInput placeholder='Search for food' style={{ fontSize: 18, marginLeft: 5 }} />
      </View>
      <View style={
        {
          height: 45,
          width: 45,
          backgroundColor: COLORS.primary,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }
      }>
        <Icon name='tune' size={30} color={COLORS.white} />
      </View>
    </View>
    <View>
      { listCategories() }
    </View>
    <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={foods}
      renderItem={ ({ item }) => {
        return <Card food={item} navigate={ () => navigation.navigate('Detail', item) } />
      }}
    />
    </SafeAreaView>
  );
}




const styles = StyleSheet.create<HomeScreenStyleProps>({
  container: {
    flexDirection: 'row',
    marginVertical: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginTop: 5
  },
  searchStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
