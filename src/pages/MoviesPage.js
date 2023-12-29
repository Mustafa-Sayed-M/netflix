import { Button, ButtonGroup, ButtonToolbar, Col, Container, Row } from "react-bootstrap";
import CardClip from "../components/CardClip";
import { useDispatch, useSelector } from "react-redux";
import { constants } from '../api/constants';

// Style:
import '../style/movies-page.css';
import { useEffect, useState } from "react";
import { fetchMovies } from "../store/slices/moviesSlice";

function Movies() {
    const movies = useSelector(state => state.movies);
    const [numPage, setNumPage] = useState(1);

    const dispatch = useDispatch();
    const api_movies_url = `${constants.BASE_API_URL}/${constants.MOVIES_API_URL}?page=${numPage}&api_key=${constants.API_KEY}`

    useEffect(() => {
        dispatch(fetchMovies(api_movies_url));
    }, [api_movies_url, dispatch])

    const handelPageClick = (new_num_page) => {
        setNumPage(new_num_page);
    }
    const handelPrevPage = () => {
        if (numPage > 1) {
            setNumPage(numPage - 1);
        }
    }
    const handelNextPage = () => {
        if (numPage < listButtons.length) {
            setNumPage(numPage + 1);
        }
    }
    const listButtons = [
        'button',
        'button',
        'button',
        'button',
    ]

    return (
        <div className="movies_page py-5">
            <Container fluid>
                <h3 className="title_page position-relative ps-3 mb-5">Movies</h3>
                <Row className="row-gap-4 mb-5">
                    {
                        movies.map(clip => {
                            const { id, title, poster_path, release_date, vote_average, overview } = clip;
                            return (
                                <Col className="col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                                    <CardClip
                                        id={id}
                                        title={title}
                                        poster_path={poster_path}
                                        date={release_date}
                                        rating={vote_average}
                                        overview={overview}
                                        clip={clip}
                                        type_clip='movie'
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
                <ButtonToolbar aria-label="Toolbar with button groups" className="page_selector d-flex align-items-center justify-content-center column-gap-2">
                    <Button onClick={handelPrevPage}>
                        <i className="fa-solid fa-chevron-left d-sm-none"></i>
                        <span className="ms-1 d-none d-sm-block">Prev Page</span>
                    </Button>
                    <ButtonGroup aria-label="First group">
                        {
                            listButtons.map((button, idx) => {
                                return (
                                    <Button data-num_page={(idx + 1)} onClick={(e) => { handelPageClick(+e.currentTarget.dataset.num_page) }} className={numPage === (idx + 1) ? 'active' : ''} key={idx}>
                                        {idx + 1}
                                    </Button>
                                )
                            })
                        }
                    </ButtonGroup>
                    <Button onClick={handelNextPage}>
                        <span className="d-none d-sm-block">Next Page</span>
                        <i className="fa-solid fa-chevron-right d-sm-none"></i>
                    </Button>
                </ButtonToolbar>
            </Container>
        </div>
    )
}

export default Movies
