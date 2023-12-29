// Components:
import { useDispatch } from 'react-redux';
import Clips from '../components/Clips';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { fetchMovies } from '../store/slices/moviesSlice';
import { fetchSeries } from '../store/slices/seriesSlice';
import { constants } from '../api/constants';

function Home() {
    const dispatch = useDispatch();

    const api_info = {
        api_movies_url: `${constants.BASE_API_URL}/${constants.MOVIES_API_URL}?page=1&api_key=${constants.API_KEY}`,
        api_series_url: `${constants.BASE_API_URL}/${constants.SERIES_API_URL}?page=1&api_key=${constants.API_KEY}`
    }

    useEffect(() => {
        dispatch(fetchMovies(api_info.api_movies_url));
        dispatch(fetchSeries(api_info.api_series_url));
    }, [api_info.api_movies_url, api_info.api_series_url, dispatch]);

    return (
        <div className='home_page'>
            <Clips />
            <Footer />
        </div>
    )
}

export default Home;