import { useSelector, useDispatch } from 'react-redux'
import { getUserState } from "@/statemangment/slice/userSlice";

interface Params {
    id: number,
}
interface UrlParams {
    params: Params,
}

export async function getStaticProps({ params }: UrlParams) {
    return {
        props: {
            params,
        },
    };
}

export async function getStaticPaths() {
    const paths = [{ params: { "id": "1" } }, { params: { "id": "2" } }, { params: { "id": "3" } }, { params: { "id": "4" } }];
    return {
        paths,
        fallback: false,
    };
}

export default function ProductItem({ params }: UrlParams) {

    const { currentuser } = useSelector(getUserState);
    const dipatch = useDispatch();

    return (
        <div>
            Products Page Id: {params.id}
            <br />
            Email: {currentuser?.email}
            <br />
        </div>
    )
}
