import {Alert} from 'react-native';

export const NotificationToastProvider = {
  error: () => {
    Alert.alert('Error', 'Error While Fetching data');
  },
  success: () => {
    Alert.alert('Waaw', "it's ok");
  },
};
