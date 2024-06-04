import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {currentLanguage, languageData} from '../../i18n';
import MainContainer from '../../container/MainContainer/MainContainer';
import {styles} from './styles';
import Input from '../../components/input/input';
import {movieApi} from '../../services/movieGate';
import {movie} from '../../models/services/movie';
import HorizontalList from '../../components/HorizontalList/HorizontalList';
import Movie from '../../components/movie/Movie';
import {navigate} from '../../utils/navigation';
export default function Home() {
  const [movies, setmovies] = useState<movie[]>([]);
  const [page, setpage] = useState(1);
  const fetchMovies = async (page: number) => {
    try {
      let response = await movieApi.getAllMovies('' + page);
      if (response && response?.data) {
        page > 1
          ? setmovies([...movies, ...response.data?.Search])
          : setmovies(response.data?.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies(page);
  }, [page]);
  const onSelectMovie = (movie: movie) =>
    navigate('Details', {id: movie.imdbID});
  const renderItem = ({item}: {item: movie}) => {
    return (
      <View style={{marginRight: 15}}>
        <Movie onPress={() => onSelectMovie(item)} movie={item}></Movie>
      </View>
    );
  };
  const navigateToSearch = () => {
    navigate('Search');
  };
  const onEndReached = () => {
    setpage(page + 1);
  };
  return (
    <MainContainer>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            {languageData[currentLanguage].home.homeTitle}
          </Text>
          <Input
            onPress={navigateToSearch}
            placeholderTextColor={'rgba(255,255,255,0.5)'}
            placeholder={languageData[currentLanguage].home.search}></Input>
          <HorizontalList
            testID="horizontal-list"
            onEndReached={onEndReached}
            renderItem={renderItem}
            title={languageData[currentLanguage].home.newMovies}
            data={movies}></HorizontalList>
          <HorizontalList
            onEndReached={onEndReached}
            renderItem={renderItem}
            title={languageData[currentLanguage].home.Upcomingmovies}
            data={movies}></HorizontalList>
        </View>
      </ScrollView>
    </MainContainer>
  );
}
