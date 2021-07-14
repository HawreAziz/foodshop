import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


interface StyleProps {
  header: ViewStyle;
}

interface HeaderProps {
  goBack: () => void;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title, goBack }) => {
  return (
    <View style={styles.header} >
          <Icon
            name='arrow-back-ios'
            size={28}
            onPress={goBack} />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      </View>
  )
}


const styles = StyleSheet.create<StyleProps>({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 20,
    paddingLeft: 10,
  },
})
