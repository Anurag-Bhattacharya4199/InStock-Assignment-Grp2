import './SearchHeader.scss'
import searchIcon from '../../assets/icons/search-24px.svg'
import { Link } from 'react-router-dom';

// This header can be used for the WareHouseList component and the WareHouseInventoryList component
function SearchHeader(props) {

    return (
        <header className="search">
            <h1 className="search--title">{props.title}</h1>


            <div className="search__content">
                <div className="search__content__input">
                    <input className="search__content__input--box"
                        type="text"
                        placeholder="Search" />
                    <img className="search__content__input--icon"
                        src={searchIcon}
                        alt="search icon" />
                </div>

                <div className="search__content__button--wrapper">
                    <Link to="/upload" className="search__content__button--link">
                        <button type="submit" className="search__content__button">
                            <div className="search__content__button--text">
                                + Add New {props.addNewItem}
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default SearchHeader