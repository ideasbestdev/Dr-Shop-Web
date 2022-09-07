import { useSelector } from 'react-redux'
import { getUserState } from "@/statemangment/slice/userSlice";


export default function Order() {
    const { currentuser } = useSelector(getUserState);
    return (
        <div>
            Order Page:
            <br />
            Email: {currentuser?.email}
            <br />
        </div>
    )
}
Order.auth = true;