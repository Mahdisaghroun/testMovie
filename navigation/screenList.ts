import Search from '../screens/Search/Search';
import MovieDetails from '../screens/details/MovieDetails';
import Home from '../screens/home/Home';
import Splash from '../screens/splash/Splash';
type Screen = {
  name: string;
  component: React.ComponentType<any>;
};
const screens: Screen[] = [
  {name: 'Splash', component: Splash},
  {name: 'Home', component: Home},
  {name: 'Search', component: Search},
  {name: 'Details', component: MovieDetails},
];

export default screens;
