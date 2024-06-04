import React, {useEffect, useState} from 'react';
import MainContainer from '../../container/MainContainer/MainContainer';
import Input from '../../components/input/input';
import {View} from 'react-native';
import {styles} from './styles';
import {currentLanguage, languageData} from '../../i18n';
import {movie} from '../../models/services/movie';
import {movieApi} from '../../services/movieGate';
import GridList from '../../components/GridList/GridList';
import Movie from '../../components/movie/Movie';
import Loader from '../../components/loader/loader';
import {navigate} from '../../utils/navigation';
export default function Search() {
  const [movies, setmovies] = useState<movie[]>([]);
  const [page, setpage] = useState(1);
  const [query, setquery] = useState<string>();
  const [loading, setloading] = useState(false);
  const fetchMovies = async (page: number, query?: string) => {
    try {
      let response = await movieApi.getAllMovies('' + page, query);
      if (response.data) {
        console.log(response.data);
        page > 1
          ? response.data?.Response
            ? setmovies([...movies, ...response.data?.Search])
            : null
          : setmovies(response.data?.Search);
        setloading(false);
        query ? setpage(page) : null;
      }
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (!query || !(page == 1 && query)) fetchMovies(page);
  }, [page]);
  const onSelectMovie = (movie: movie) =>
    navigate('Details', {id: movie.imdbID});
  const renderItem = ({item}: {item: movie}) => {
    return <Movie onPress={() => onSelectMovie(item)} movie={item}></Movie>;
  };
  const handleSearch = (text: string) => {
    setloading(true);
    setquery(text);
    fetchMovies(1, text);
  };
  const onEndReached = () => {
    setpage(page + 1);
  };
  return (
    <MainContainer>
      <View style={styles.container}>
        <Input
          onChangeText={handleSearch}
          placeholderTextColor={'rgba(255,255,255,0.5)'}
          placeholder={languageData[currentLanguage].home.search}></Input>
        {loading ? (
          <View
            style={{
              paddingTop: 50,
            }}>
            <Loader></Loader>
          </View>
        ) : (
          <GridList
            onEndReached={onEndReached}
            title={languageData[currentLanguage].search.result}
            data={movies}
            renderItem={renderItem}></GridList>
        )}
      </View>
    </MainContainer>
  );
}
