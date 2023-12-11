import { Link } from 'react-router-dom';

function WareHouse () {

    return (
        <>
        <div>warehouse route test</div>
        <Link to="/inventory/1">
        <button type="submit">
        Inventory
        </button>
        </Link>
        </>
    )
}

export default WareHouse