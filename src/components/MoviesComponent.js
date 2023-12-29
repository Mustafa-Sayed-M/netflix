/* eslint-disable no-unused-vars */
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardClip from "./CardClip";

function MoviesComponent() {
    const movies = useSelector(state => state.movies);

    return (
        <div className="movies_component py-4">
            <Row className="row-gap-4">
                {
                    movies.map(clip => {
                        const { id, title, poster_path, release_date, vote_average, overview } = clip;
                        return (
                            <Col className="card_movie col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
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
        </div>
    )
}

export default MoviesComponent;