import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  Pressable,
  Text,
} from 'react-native';
import SearchIcon from '../../assets/svg/magnifyingglass.svg';
import {styles} from './style';
interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
const Input: React.FC<InputProps> = ({
  containerStyle,
  iconStyle,
  onPress,
  ...props
}) => (
  <Pressable style={[styles.container, containerStyle]} onPress={onPress}>
    <SearchIcon width={20} height={20} style={[styles.icon, iconStyle]} />
    {onPress ? (
      <Text
        style={{
          color: props.placeholderTextColor,
          fontSize: 16,
         
        }}>
        {props.placeholder}
      </Text>
    ) : (
      <TextInput
        accessible={false}
        focusable={!onPress}
        editable={!onPress}
        {...props}
        style={[styles.input]}
      />
    )}
  </Pressable>
);

export default Input;
