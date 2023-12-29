const api_key = process.env.REACT_APP_API_KEY;
const access_token = process.env.REACT_APP_TOKEN;

export const constants = {
    API_KEY: api_key,
    ACCESS_TOKEN: access_token,
    BASE_API_URL: 'https://api.themoviedb.org/3',
    BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/original',
    MOVIES_API_URL: 'discover/movie',
    SERIES_API_URL: 'discover/tv',
}