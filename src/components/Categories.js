// Style:
import { useState } from 'react';
import '../style/categories.css';

function Categories(props) {
    const [activeItem, setActiveItem] = useState('Movies');

    const categories = [
        { icon: <i className="fa-solid fa-clapperboard"></i>, label: 'Movies'},
        { icon: <i className="fa-solid fa-tv"></i>, label: 'Series'},
        { icon: <i className="fa-solid fa-plus"></i>, label: 'Recently Added'}
    ]

    return (
        <ul className="categories d-flex align-items-center justify-content-between mb-5">
            {
                categories.map(cate => {
                    return (
                        <li key={cate.label} onClick={() => {setActiveItem(cate.label); props.setActiveCategory(cate.label)}} className={`${activeItem === cate.label ? 'active' : ''} px-5 position-relative py-3 d-flex align-items-center column-gap-2`}>
                            {cate.icon}
                            <span className='d-none d-md-block'>{cate.label}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Categories;