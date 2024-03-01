import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './products.css';

interface Products {
    id: number,
    title: string,
    description: string
}

const Products = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [productList, setProductsList] = useState([] as Products[]);
    const [pageIndexs, setPageIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(1);
    const navigate = useNavigate();

    const validateSession = () => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            getProducts(pageIndexs);
        } else {
            setIsAuthenticated(false)
        }
    };

    const getProducts = async (pageNum: number) => {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${pageNum}`);
        const data = await response.json();
        if (data.products && data.products.length) {
            setProductsList(data.products);
            setMaxIndex(data.total);
        }
    };

    const handleClick = (isNextPage: boolean) => {
        setPageIndex(isNextPage ? pageIndexs + 10 : pageIndexs - 10);
        getProducts(isNextPage ? pageIndexs + 10 : pageIndexs - 10)
    };


    useEffect(() => {
        validateSession();
    }, []);

    return <div className="products-container">
        {isAuthenticated ? <>
            <div>Welcome to products page</div>
            <div className='products-wrapper'>
                {
                    productList.map((item) => {
                        return <div className='product-wrapper' key={item.id}>
                            <div className='product-title'>Product: {item.title}</div>
                            <div className='product-desc'>Description: {item.description}</div>
                        </div>
                    })
                }
            </div>
            <div className='navigation-wrapper'>
                <button
                    className='navigation-button'
                    disabled={pageIndexs === 0}
                    onClick={() => handleClick(false)}>Previous</button>
                <button
                    className='navigation-button'
                    disabled={pageIndexs === maxIndex - 10}
                    onClick={() => handleClick(true)}>Next</button>
            </div>
        </>
            : <div className='error-wrapper'>
                You are not authenticated to view this page, Please login in our app to view products
                <button className='navigation-button' onClick={() => navigate('/')}>Go To Login Page</button>
            </div>}
    </div>
};

export default Products;