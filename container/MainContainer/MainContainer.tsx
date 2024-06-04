import React, {ReactNode} from 'react';
import {ImageBackground, ImageBackgroundProps} from 'react-native';
import {imgs} from '../../data/imgs';
import {styles} from './styles';
interface MainContainerProps {
  children: ReactNode;
}
const MainContainer: React.FC<MainContainerProps> = ({children}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={imgs.background as ImageBackgroundProps['source']}>
      {children}
    </ImageBackground>
  );
};
export default MainContainer;
