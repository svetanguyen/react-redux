import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch(err => {
            console.log('error:', err)
        })
        console.log('response', response.data)
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log('products', products)
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing