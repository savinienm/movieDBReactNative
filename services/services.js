import axios from "axios";
const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "api_key=4e2a93812004fddd622fb5e91194b8a9"
export const getPopularMovies = async () => {
 const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
 return resp.data.results;
};
// Get Upcoming Movies
export const getUpcomingMovies = async () => {
 const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
 return resp.data.results;
};
// Get Popular TV
export const getPopularTv = async () => {
 const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
 return resp.data.results;
};
// Get Family Movies
export const getFamilyMovies = async () => {
 const resp = await axios.get(
 `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
 );
 return resp.data.results;
};
// Get Documnetery Movies
export const getDocumentaryMovies = async () => {
 const resp = await axios.get(
 `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
 );
 return resp.data.results;
};