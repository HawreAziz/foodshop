import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/HomeScreen';
import { CartScreen } from '../screens/CartScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../constants/colors';


const Tab = createBottomTabNavigator();

export const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 50,
          borderTopWidth: 0,
          elevation: 0
        },
        showLabel: false,
        activeTintColor: COLORS.primary
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={
          {
            tabBarIcon: ({color}) =>  <Icon name='home-filled' color={color} size={35} />
          }
        }
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={
          {
            tabBarIcon:  ({color}) => <Icon name='local-mall' color={color} size={35} />
          }
        }
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={
          {
            tabBarIcon: () => { return (
              <View
                style={
                  {
                    height: 60,
                    width: 60,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                    borderRadius: 30,
                    top: -20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                    backgroundColor: COLORS.white
                  }
                }
              >
                <Icon name='search' size={40} color={COLORS.primary} />
              </View>
            )}
          }
        }
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={
          {
            tabBarIcon: ({ color }) => <Icon name='favorite' size={35} color={color} />
          }
        }
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={
          {
            tabBarIcon: ({ color }) => <Icon name='shopping-cart' size={35} color={color} />
          }
        }
      />
    </Tab.Navigator>
  )
}
