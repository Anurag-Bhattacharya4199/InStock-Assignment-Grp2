import './Inventory.scss'
import { useEffect, useState } from 'react';

import SearchHeader from "../../components/SearchHeader/SearchHeader";

function Inventory(props) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [headTitle, setHeadTitle] = useState(`InStock - ${props.warehouse_name}`);
    const [selectedWarehouse, setSelectedWarehouse] = useState(props);

    useEffect(() => {
        document.title = headTitle;
        setHasLoaded(true)
    }, [headTitle]);


    if (!hasLoaded) {
        return null
    } else {
        return (
            <section>
                <SearchHeader />
                <InventoryList selectedWarehouse={selectedWarehouse}/>
            </section>
        )
    }
}

export default Inventory