import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import Home from '../screens/home/Home';
import {movieApi} from '../services/movieGate';
jest.mock('../utils/navigation.ts', () => ({
  navigate: jest.fn(),
}));
jest.mock('../services/movieGate', () => ({
  movieApi: {
    getAllMovies: jest.fn(),
  },
}));
jest.mock('../assets/svg/magnifyingglass.svg', () => 'SearchIcon');
describe('Home Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders the Home component correctly', () => {
    const {getByText} = render(<Home />);
    expect(getByText(/New Movies/i)).toBeTruthy();
  });

  it('fetches and displays movies on mount', async () => {
    const mockMovies = {
      data: {
        Search: [
          {imdbID: '1', Title: 'Movie 1', Year: '2021'},
          {imdbID: '2', Title: 'Movie 2', Year: '2022'},
        ],
      },
    };
    (movieApi.getAllMovies as jest.Mock).mockResolvedValueOnce(mockMovies);

    const {getAllByText} = render(<Home />);

    await waitFor(() => {
      expect(movieApi.getAllMovies).toHaveBeenCalledTimes(1);
    });

    // Use getAllByText to find all elements with the text "Movie 1"
    const movie1Elements = getAllByText(/Movie 1/i);

    // Assert that at least one element with the text "Movie 1" is found
    expect(movie1Elements.length).toBeGreaterThan(0);

    // Use getAllByText to find all elements with the text "Movie 2"
    const movie2Elements = getAllByText(/Movie 2/i);

    // Assert that at least one element with the text "Movie 2" is found
    expect(movie2Elements.length).toBeGreaterThan(0);
  });

  it('navigates to details screen on movie select', async () => {
    const mockMovies = {
      data: {
        Search: [
          {imdbID: '1', Title: 'Movie 1', Year: '2021'},
          {imdbID: '2', Title: 'Movie 2', Year: '2022'},
        ],
      },
    };
    (movieApi.getAllMovies as jest.Mock).mockResolvedValueOnce(mockMovies);

    const {getAllByText} = render(<Home />);

    await waitFor(() => expect(movieApi.getAllMovies).toHaveBeenCalledTimes(1));

    const movie1Elements = getAllByText(/Movie 1/i);
    fireEvent.press(movie1Elements[0]);

    const {navigate} = require('../utils/navigation');
    expect(navigate).toHaveBeenCalledWith('Details', {id: '1'});
  });
});
