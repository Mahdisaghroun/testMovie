import React from 'react';
import {Text} from 'react-native';
import {currentLanguage, languageData} from '../../i18n';
import {styles} from './styles';

export default function EmptyText() {
  return (
    <Text style={styles.listTitle}>
      {languageData[currentLanguage].search.empty}
    </Text>
  );
}
