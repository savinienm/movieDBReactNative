import axios from axios.axios;

const api_url = 'http://api.themoviedb.org/';
const api_key = '153bac550dbfc9bda1b2f5ef2f99a808';

export const getPopularMovies = async() => {
    const result = await axios.get(`${api_url}movie/popular?${api_key}`);
    return result.data.results;
}

export const getUpcomingMovies = async() => {
    const result = await axios.get(`${api_url}movie/upcoming?${api_key}`);
    return result.data.results;
}

export const getPopularTv = async() => {
    const result = await axios.get(`${api_url}tv/popular?${api_key}`);
    return result.data.results;
}