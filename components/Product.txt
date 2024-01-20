import { ProductModel } from "@/models/index";


interface PageProp {
    product: ProductModel,
}

export default function Product({ product }: PageProp) {
    return (
        <>
            <img src={product.images ? product.images[0] : ""} alt={product.images ? product.images[0] : ""} />
            <h1>{product.title}</h1>
            <div>{product.description}</div>
            <div>{product.price} $</div>
        </>
    );
}
