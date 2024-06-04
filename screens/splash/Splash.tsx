import React from 'react';
import MainContainer from '../../container/MainContainer/MainContainer';
import Avatar from '../../assets/svg/Avatar.svg';
import Button from '../../components/Button/Button';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {currentLanguage, languageData} from '../../i18n';
import {navigate} from '../../utils/navigation';
export default function Splash() {
  const navigateToHome = () => {
    navigate('Home');
  };
  return (
    <MainContainer>
      <View style={styles.container}>
        <View>
          <Avatar></Avatar>
        </View>
        <Text style={styles.title}>
          {languageData[currentLanguage].splash.title}
        </Text>
        <Text style={styles.subtitle}>
          {languageData[currentLanguage].splash.subtitle}
        </Text>
        <Button
          onPress={navigateToHome}
          title={languageData[currentLanguage].splash.btnStart}></Button>
      </View>
    </MainContainer>
  );
}
