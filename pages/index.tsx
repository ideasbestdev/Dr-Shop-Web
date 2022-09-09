import { useSelector, useDispatch } from 'react-redux'
import { getUserState, setUser } from "@/statemangment/slice/userSlice";
import { auth, INFO_ALERT_TYPE, PageUrls } from "@/utils/index";
import { signOut } from "@firebase/auth";
import { useRouter } from "next/router";
import {
    currentAlertIdentifier,
    getAlertState,
    setAlert,
    setIdentifier
} from "@/statemangment/slice/alertSlice";
import { generateRandomNumber } from "@/helpers/index";
import { AlertStateModel } from '@/models/index';

export default function Home() {

    const { currentuser } = useSelector(getUserState);
    const router = useRouter();
    const { identifier, message, type } = useSelector(getAlertState);
    const dispatch = useDispatch();

    const logout = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
            router.push(PageUrls.LOGIN)
        });
    }

    function throwMessage() {
        const generatedIdentifier = generateRandomNumber(4);

        let customAlert: AlertStateModel = {
            message: "new Message",
            type: INFO_ALERT_TYPE,
            identifier: generatedIdentifier,
        }

        dispatch(setIdentifier(generatedIdentifier));

        if (customAlert.identifier == currentAlertIdentifier) {
            dispatch(setAlert(customAlert));
        }
    }


    return (
        <div>
            Email: {currentuser?.email}
            <br />
            <button onClick={() => logout()}>Logout</button>
            <br />
            <button onClick={(e) => { e.stopPropagation(); throwMessage(); }}>Throw Alert</button>
            <br />
        </div>
    )
}
