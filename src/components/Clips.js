import MoviesComponent from "./MoviesComponent";
import SeriesComponent from "./SeriesComponent";
import Categories from "../components/Categories";
import { Container } from "react-bootstrap";
import { useState } from "react";
import RecentlyAdded from "./RecentlyAdded";

function Clips() {
    const [activeCategory, setActiveCategory] = useState('Movies');
    return (
        <div className="clips py-5">
            <Container>
                <Categories setActiveCategory={setActiveCategory} />
                {activeCategory === 'Movies' ? <MoviesComponent /> : null }
                {activeCategory === 'Series' ? <SeriesComponent /> : null }
                {activeCategory === 'Recently Added' ? <RecentlyAdded /> : null }
            </Container>
        </div>
    )
}

export default Clips;