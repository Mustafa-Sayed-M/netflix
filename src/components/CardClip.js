import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToRecentlyAdded } from "../store/slices/recentlyAddedSlice";
import { constants } from '../api/constants';
// Style:
import '../style/card-clip.css';

function CardClip(props) {
    const { id, title, date, poster_path, rating, overview, clip, type_clip } = props;

    const recentlyAdded = useSelector(state => state.recentlyAdded);
    const dispatch = useDispatch();

    return (
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
                            <span>{title.length > 22 ? title.slice(0, 22) : title}</span>
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
                        <button title={`Add this ${type_clip.slice(0, 1).toUpperCase()}${type_clip.slice(1, type_clip.length)}`} onClick={() => { dispatch(addToRecentlyAdded({...clip, type_clip}))}} type="button" className="handel_recently_added">
                            {
                                recentlyAdded.find(clip => clip.id === id) ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-plus"></i>
                            }
                        </button>
                        <i className="fa-regular fa-eye"></i>
                    </div>
                </div>
            </div>
            <div className="info">
                <h6 className="mb-3">{title.length > 25 ? title.slice(0, 25) + '...' : title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                    <p className="year opacity-50">{date.slice(0, 4)}</p>
                    <button type="button" onClick={(e) => { e.currentTarget.classList.toggle('active') }} className="p-0 text-white d-block ms-auto me-2 fs-5 heart">
                        <i className="fa-solid fa-heart"></i>
                    </button>
                    <div className="rating">
                        <i className="fa-solid fa-star me-1"></i>
                        <span className="m-0">{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardClip
