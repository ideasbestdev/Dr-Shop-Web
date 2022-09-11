import { useSelector } from 'react-redux';
import { getUserState } from "@/statemangment/slice/userSlice";
import http from "@/utils/axios";
import { ProductModel } from "@/models/index";
import Product from "@/components/Product";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";


interface PageProps {
    products: ProductModel[],
    querySearch: string,
}

export async function getServerSideProps(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
    let products: ProductModel[] = [];
    let url = "";
    let querySearch;
    if (context != undefined && context.query != undefined && context.query["q"] != undefined) {
        url = 'https://dummyjson.com/products/search?q=' + context.query["q"];
        querySearch = context.query["q"];
    } else {
        url = "https://dummyjson.com/products";
        querySearch = "";
    }
    const res = await http.get(url).then((response) => {
        products = response.data.products;
    });
    return {
        props: {
            products,
            querySearch
        },
    }
}

export default function Products({ products, querySearch }: PageProps) {
    const { currentuser } = useSelector(getUserState);
    const [query, setQuery] = useState(querySearch);
    const [searchedProducts, setSearchedProducts] = useState(products);
    const [firstLoad, setFirstLoad] = useState(false);
    const router = useRouter();

    function Search() {
        setFirstLoad(true);

        if (router.query.q != query) {
            if (query == "") {
                router.push({
                    pathname: '/products',
                    query: {}
                },
                    undefined, { shallow: true }
                );
            } else {
                router.push({
                    pathname: '/products',
                    query: { q: query }
                },
                    undefined, { shallow: true }
                );
            }
        }

    }

    useEffect(() => {

        async function fetchProducts() {
            let url = "";
            if (router.query.q != undefined) {
                url = 'https://dummyjson.com/products/search?q=' + router.query.q;
            } else {
                url = "https://dummyjson.com/products";
            }
            const res = await http.get(url).then((response) => {
                setSearchedProducts(response.data.products);
            });
        }

        if (firstLoad) {
            fetchProducts()
        }

    }, [router]);

    return (
        <div>
            Products Page:
            <br />
            Email: {currentuser?.email}
            <br />
            <form noValidate={false} onSubmit={(e) => { e.preventDefault(); Search() }}>
                <input type={"text"} value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={(e) => { e.stopPropagation(); }}> Search </button>
            </form>
            <br />
            <br />

            <ul className={"product_container"}>
                {searchedProducts.map((entry: ProductModel, index) => <Product key={index} product={entry} />)}
            </ul>
        </div>
    )
}
