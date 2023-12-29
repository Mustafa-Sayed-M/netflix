import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchSeries } from '../store/slices/seriesSlice';
import { Container } from "react-bootstrap";


function Series() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSeries())
    }, [dispatch])

    return (
        <div className="series_page py-5">
            <Container>
                Soon...
            </Container>
        </div>
    )
}

export default Series
