import React, {ReactNode} from 'react';
import {View} from 'react-native';
import BtnBorder from '../../assets/svg/BtnBorder.svg';
import {styles} from './styles';

interface ButtonContainerProps {
  children: ReactNode;
}

export default function ButtonContainer({children}: ButtonContainerProps) {
  return (
    <View style={styles.button}>
      <BtnBorder style={styles.container} />
      <View style={styles.buttonContent}>{children}</View>
    </View>
  );
}
