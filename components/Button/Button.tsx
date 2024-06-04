import React from 'react';
import {Text, Pressable, ViewStyle, TextStyle} from 'react-native';
import ButtonContainer from './ButtonContainer';
import {styles} from './styles';
interface ButtonProps {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  onPress?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  title,
  style,
  textStyle,
  disabled,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}>
      <ButtonContainer>
        <Text style={[styles.textBtn, textStyle]}>{title}</Text>
      </ButtonContainer>
    </Pressable>
  );
};
export default Button;
