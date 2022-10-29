import { useEffect } from "react";
import { stringIsEmptyOrNull } from "@/helpers/index";
import { useDispatch, useSelector } from "react-redux";
import { getAlertState, setAlert } from "@/statemangment/slice/alertSlice";
import { ERROR_ALERT_TYPE, INFO_ALERT_TYPE } from "@/utils/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { AlertStyle } from '@/styledcomponents/index';
import { AlertStateModel } from "@/models/index";

export function Alert() {
    const { message, identifier, type } = useSelector(getAlertState);
    const dispatch = useDispatch();
    const initialState: AlertStateModel = {
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
        <AlertStyle show={!stringIsEmptyOrNull(message)} type={type}>
            <span className={"icon"}>{type == INFO_ALERT_TYPE ? <FontAwesomeIcon icon={faInfoCircle} /> : type == ERROR_ALERT_TYPE ? <FontAwesomeIcon icon={faExclamationTriangle} /> : <></>}</span>
            {message}
        </AlertStyle>
    )
}