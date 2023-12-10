import './SearchHeader.scss'
import searchIcon from '../../assets/icons/search-24px.svg'

// This header can be used for the WareHouseList component and the WareHouseInventoryList component
function SearchHeader(props) {
    const [searchTitle, setSearchTitle] = useState('Inventory')
    let addNewItem = 'Item'

    if (props.title) {
        setSearchTitle(props.title)
    }
    if (searchTitle === 'Warehouses') {
        addNewItem = 'Warehouse'
    }


    return (
        <header className="search">
            <h1 className="search--title">{searchTitle}</h1>


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
                                + Add New {addNewItem}
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default SearchHeader