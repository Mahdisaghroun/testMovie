import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    height: width,
    width: width,
    opacity: 0.7,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  subtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    paddingHorizontal: 20,
  },
});
