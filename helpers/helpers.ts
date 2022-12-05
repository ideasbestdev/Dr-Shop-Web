import Cookies from "js-cookie";
import { DEVICEID_KEY_NAME, TOKEN_KEY_NAME } from "@/utils/index";
import { UserModel, FilterProductModel } from '@/models/index';
import { isArray } from "util";

export function stringIsEmptyOrNull(value?: string) {
    if (value == null || value == undefined || value.trim().length == 0) {
        return true;
    }
    return false;
}

export function generateRandomNumber(length: number): string {
    let randomNumer = "";
    for (let i = 0; i < length; i++) {
        const rand = Math.floor(Math.random() * 10);
        randomNumer += rand;
    }
    return randomNumer;
}


export function initObject(initialState: any): any {
    Object.keys(initialState).map((key) => {
        if (typeof initialState[key] == "string") {
            initialState[key] = "";
        }
        if (typeof initialState[key] == "boolean") {
            initialState[key] = false;
        }
    });

    return initialState;
}


export function uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function getDeviceId(): string {
    if (Cookies.get(DEVICEID_KEY_NAME) == undefined) {
        Cookies.set(DEVICEID_KEY_NAME, uuidv4());
    }
    const device_id: string = "" + Cookies.get("device_id");
    return device_id;
}


function editUser(key: string, value: string, user: UserModel): UserModel {
    switch (key) {
        case "firstName":
            user.first_name = value;
            break;

        case "lastName":
            user.last_name = value;
            break;

        case "email":
            user.email = value;
            break;

        case "password":
            user.password = value;
            break;

        case "confirmPassword":
            user.confirmPassword = value;
            break;

        case "taxId":
            user.tax_id = value;
            break;

        case "companyName":
            user.companyName = value;
            break;

        case "industry":
            user.industry = value;
            break;

        case "state":
            user.state = value;
            break;

        case "street":
            user.street = value;
            break;

        case "city":
            user.city = value;
            break;

        case "zipCode":
            user.zipCode = value;
            break;

        case "numberOfPhysicians":
            user.numberOfPhysicians = value;
            break;

        case "termsOfCondition":
            user.termsOfCondition = value == "true";
            break;

        default:
            break;
    }

    const newUser = Object.assign({}, user);

    return newUser
}


export function isAuthenticated(): boolean {
    return Cookies.get(TOKEN_KEY_NAME) ? true : false;
}

export function convertObjectToQueryString(inputObject: any) {
    var str = '';
    for (var key in inputObject) {
        if (key.indexOf('exc_') == -1) {
            if (!inputObject.hasOwnProperty(key) || typeof inputObject[key] === 'function' || inputObject[key] == null || inputObject[key] == undefined) {
                continue;
            }
            if (typeof inputObject[key] === 'object') { // an object and an array are objects
                str += (str == '' ? '' : '&') + key + '=' + encodeURIComponent(inputObject[key].join());
            } else {
                str += (str == '' ? '' : '&') + key + '=' + encodeURIComponent(inputObject[key]);
            }
        }
    }
    str = str.replace(/(&?\w+=((?=$)|(?=&)))/g, '');
    if (str.indexOf("&") == 0) {
        str = str.substring(1, str.length);
    }
    return str;
}




export function toggleRadio(event: React.MouseEvent) {
    var element = document.getElementById(event.currentTarget.id) as HTMLInputElement;
    if (element == null) return;
    if (element.getAttribute("data-wasChecked") == "true") {
        element.checked = false;
        element.setAttribute('data-waschecked', "false");
    } else {
        element.setAttribute('data-waschecked', "true");
    }
    element.parentElement?.nextElementSibling?.firstElementChild?.setAttribute('data-waschecked', "false");
    element.parentElement?.previousElementSibling?.firstElementChild?.setAttribute('data-waschecked', "false");
}



