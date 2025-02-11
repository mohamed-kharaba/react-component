import { useEffect, useState } from "react";

export const ProductList = ({ category }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        console.log("Fetching products in", category);
        setProduct(["Coffee", "Tea"]);
    }, [category]);

    return <div>Products</div>;
};
