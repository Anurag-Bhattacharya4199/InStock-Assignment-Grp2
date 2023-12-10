import './Inventory.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import InventoryList from '../../components/InventoryList/InventoryList';
import SearchHeader from "../../components/SearchHeader/SearchHeader";

function Inventory() {
    const [hasLoaded, setHasLoaded] = useState(false);
    let { warehouse_id } = useParams();
    let headTitle = "Manhattan"

    // the initial state will need to be the warehouse_id from useParams
    // For now, it will be defaulted as 1
    const [selectedWarehouse, setSelectedWarehouse] = useState("1");

    useEffect(() => {
        document.title = headTitle;
        setHasLoaded(true)
    }, [headTitle]);


    if (!hasLoaded) {
        return null
    } else {
        return (
            <section>
                <SearchHeader title="Inventory" addNewItem= "Item" />
                <InventoryList selectedWarehouse={selectedWarehouse}/>
            </section>
        )
    }
}

export default Inventory