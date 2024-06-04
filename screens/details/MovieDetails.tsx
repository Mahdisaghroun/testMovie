import React, {useEffect, useState} from 'react';
import {Alert, Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import Back from '../../assets/svg/left-arrow (1).svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {goBack} from '../../utils/navigation';
import {movieApi} from '../../services/movieGate';
import {DetailsMovie} from '../../models/services/movie';
import Loader from '../../components/loader/loader';
import {NotificationToastProvider} from '../../utils/ErrorHandler';
interface RouteParams {
  id?: string;
}
export default function MovieDetails() {
  const route = useRoute();
  const {id}: RouteParams = route.params || {};
  const [loading, setloading] = useState(true);
  const [detailsMovie, setdetailsMovie] = useState<DetailsMovie>();
  const inset = useSafeAreaInsets();
  const onBackClick = () => {
    goBack();
  };
  const fetchMovieById = async (id: string) => {
    try {
      let resposne = await movieApi.getMovieById(id);
      if (resposne.data) {
        console.log(resposne.data);
        setdetailsMovie(resposne.data);
        setloading(false);
      }
    } catch (error) {
      NotificationToastProvider.error();
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      fetchMovieById('' + id);
    }
  }, [id]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: detailsMovie?.Poster,
            }}
          />
          <View>
            <Text style={styles.title}> {detailsMovie?.Title}</Text>
            <Text style={styles.subtitle}>{detailsMovie?.Plot}</Text>
          </View>
          <View style={[styles.header, {top: inset.top + 10}]}>
            <Pressable onPress={onBackClick}>
              <Back></Back>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}
