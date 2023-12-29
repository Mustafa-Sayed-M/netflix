import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Image } from "react-bootstrap";
import { constants } from '../api/constants';
import { Link } from "react-router-dom";
import { removeFromRecentlyAdded } from "../store/slices/recentlyAddedSlice";

function RecentlyAdded() {
    const recentlyAdded = useSelector(state => state.recentlyAdded);
    const dispatch = useDispatch();

    return (
        <div className="recently_added py-4">
            {
                recentlyAdded.length === 0 ?
                    <h5 className="text-center">No Clips Added Here Yet</h5>
                    :
                    <Row className="row-gap-4">
                        {
                            recentlyAdded.map(clip => {
                                // eslint-disable-next-line no-unused-vars
                                const { id, title, name, poster_path, vote_average, release_date, first_air_date, overview, type_clip } = clip;
                                const t = title || name;
                                const d = release_date || first_air_date;

                                return (
                                    <Col className="card_movie col-12 col-sm-6 col-md-4 col-lg-3" key={id}>
                                        <div className="card_clip">
                                            <div className="poster position-relative mb-3" style={{ height: '320px' }}>
                                                <Image
                                                    src={`${constants.BASE_IMAGE_URL}${poster_path}`}
                                                    alt={title}
                                                    width={'100%'}
                                                    height={'100%'}
                                                    className="mx-auto rounded-3"
                                                />
                                                <div className="show_details d-flex flex-column justify-content-between position-absolute top-0 start-0 w-100 h-100 rounded-3 p-3">
                                                    <div className="details">
                                                        <h6 className="d-flex align-items-center justify-content-between">
                                                            <span>{t.length > 22 ? t.slice(0, 22) : t}</span>
                                                            <span className="opacity-50" style={{ fontSize: '12px' }}>
                                                                {type_clip === 'movie' ? 'Movie' : type_clip === 'series' ? 'Series' : ''}
                                                            </span>
                                                        </h6>
                                                        <p className="mb-3 opacity-75" style={{ fontSize: '12px' }}>
                                                            {overview.length > 150 ? overview.slice(0, 150) + '...' : overview}
                                                        </p>
                                                        <Link to={`/watch/${id}`} className="watch_link p-2 px-4 d-block text-center rounded-pill">
                                                            <i className="fa-solid fa-play"></i>
                                                            <span className="ms-2">Watch</span>
                                                        </Link>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <button title={`Remove this ${type_clip.slice(0, 1).toUpperCase()}${type_clip.slice(1, type_clip.length)}`} onClick={() => { dispatch(removeFromRecentlyAdded(clip)) }} type="button" className="handel_recently_added">
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                        <i className="fa-regular fa-eye"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h6 className="mb-3">{t.length > 25 ? t.slice(0, 25) + '...' : t}</h6>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="year opacity-50">{d.slice(0, 4)}</p>
                                                    <button type="button" onClick={(e) => { e.currentTarget.classList.toggle('active') }} className="p-0 text-white d-block ms-auto me-2 fs-5 heart">
                                                        <i className="fa-solid fa-heart"></i>
                                                    </button>
                                                    <div className="rating">
                                                        <i className="fa-solid fa-star me-1"></i>
                                                        <span className="m-0">{vote_average}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
            }
        </div>
    )
}

export default RecentlyAdded;