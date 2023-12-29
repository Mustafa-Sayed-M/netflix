/* eslint-disable no-unused-vars */
import { Col, Row } from "react-bootstrap";
import CardClip from "./CardClip";
import { useSelector } from "react-redux";

function SeriesComponent() {
    const series = useSelector(state => state.series);

    return (
        <div className="series_component py-4">
            <Row className="row-gap-4">
                {
                    series.map(clip => {
                        const { id, name, poster_path, first_air_date, vote_average, overview } = clip;
                        return (
                            <Col className="card_movie col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                                <CardClip
                                    id={id}
                                    title={name}
                                    poster_path={poster_path}
                                    date={first_air_date}
                                    rating={vote_average}
                                    overview={overview}
                                    clip={clip}
                                    type_clip='series'
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default SeriesComponent;