import React , {useEffect} from 'react';
import ProductsTable from "./ProductsTable";
import {useDispatch} from "react-redux";
import {getCisMaturityData} from "../../../../store/redux/index";

const CisMaturity = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCisMaturityData())
    },[])
    return (
        <React.Fragment>
                <ProductsTable />
        </React.Fragment>
    );
}

export default CisMaturity;