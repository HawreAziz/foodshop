import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import COLORS from '../constants/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

interface Styles {
  buttonStyle: ViewStyle;
}

export const PrimaryButton: React.FC<ButtonProps> = ({title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ backgroundColor: COLORS.primary, ...styles.buttonStyle}}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
}

export const SecondaryButton: React.FC<ButtonProps> = ({title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ backgroundColor: COLORS.white, ...styles.buttonStyle}}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.primary, fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create<Styles>({
  buttonStyle: {
    height: 60,
    padding: 20,
    marginBottom: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
