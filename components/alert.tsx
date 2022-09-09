import { useEffect } from "react";
import { generateRandomNumber, stringIsEmptyOrNull } from "@/helpers/index";
import { useDispatch, useSelector } from "react-redux";
import { currentAlertIdentifier, getAlertState, setAlert, setIdentifier } from "@/statemangment/slice/alertSlice";
import { AlertState } from "@/statemangment/modal";
import { ERROR_ALERT_TYPE, INFO_ALERT_TYPE } from "@/utils/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { AppAlert } from '@/styledcomponents/index';

interface PageComponent {
    message: string
}
function Alert() {
    const { message, identifier, type } = useSelector(getAlertState);
    const dispatch = useDispatch();
    const initialState: AlertState = {
        message: "",
        identifier: "",
        type: "",
    }
    const handleClick = () => {
        dispatch(setAlert(initialState));
    }

    useEffect(function () {
        document.addEventListener('click', handleClick);
    }, []);



    return (
        <AppAlert show={!stringIsEmptyOrNull(message)} type={type}>
            <span className={"icon"}>{type == INFO_ALERT_TYPE ? <FontAwesomeIcon icon={faInfoCircle} /> : type == ERROR_ALERT_TYPE ? <FontAwesomeIcon icon={faExclamationTriangle} /> : <></>}</span>
            {message}
        </AppAlert>
    )
}



export { Alert }