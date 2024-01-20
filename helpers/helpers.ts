import Cookies from "js-cookie";
import { DEVICEID_KEY_NAME, TOKEN_KEY_NAME } from "@/utils/index";
import { UserModel, FilterProductModel } from '@/models/index';
import Payment from 'payment'

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

export function intersectionNumberArray(first_array: number[], second_array: number[]): number[] {
    return first_array.filter((element) => second_array.includes(element))
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
    const device_id: string = "" + Cookies.get(DEVICEID_KEY_NAME);
    return device_id;
}




export function isAuthenticatedHelper(): boolean {
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

export function getUrlObject(): any {
    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams);
    console.log(params);
    return params;
}


export function convertObjectToObjectQuery(obj: any): Object {
    var myObj: any = {};

    Object.keys(obj).map(function (key, index) {
        if (obj[key] == undefined || obj[key] == null || obj[key] !== obj[key] || typeof obj[key] == 'function') return;
        if (typeof obj[key] != "object") {
            myObj[key] = obj[key];
        } else {
            if (Array.isArray(obj[key])) {
                for (let index = 0; index < obj[key].length; index++) {
                    if (obj[key][index] != null && !(obj[key][index] !== obj[key][index]) && obj[key][index] != undefined) {
                        const element = obj[key][index];
                        myObj[key + "[" + index + "]"] = element;
                    }
                }
            }
        }
    });
    return myObj;
}


export function clean(obj: any): Object {
    for (var propName in obj) {
        if (obj[propName] == null || obj[propName] == undefined || obj[propName] !== obj[propName] || obj[propName] == "NaN") {
            delete obj[propName];
        }
    }
    return obj
}


function clearNumber(value = '') {
    return value.replace(/\D+/g, '')
}

export function formatCreditCardNumber(value: any) {
    if (!value) {
        return value
    }

    const issuer = Payment.fns.cardType(value)
    const clearValue = clearNumber(value)
    let nextValue
    switch (issuer) {
        case 'amex':
            nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                4,
                10
            )} ${clearValue.slice(10, 15)}`
            break
        case 'dinersclub':
            nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                4,
                10
            )} ${clearValue.slice(10, 14)}`
            break
        default:
            nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
                4,
                8
            )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`
            break
    }

    return nextValue.trim()
}

export function formatCVC(value: any, allValues: any = {}) {
    const clearValue = clearNumber(value)
    let maxLength = 3

    if (allValues.number) {
        const issuer = Payment.fns.cardType(allValues.number)
    }

    return clearValue.slice(0, maxLength)
}

export function formatExpirationDate(value: any) {
    const clearValue = clearNumber(value)

    if (clearValue.length >= 3) {
        return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
    }

    return clearValue
}


export function formatPhoneNumber(phoneNumberString: string) {
    var phone = phoneNumberString.replace(/\D/g, '');
    const match = phone.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/);
    console.log(phoneNumberString);
    if (match && (phoneNumberString.length > 4 || (phoneNumberString.length == 4 && phoneNumberString.at(-1) != ')' && phoneNumberString.at(0) != '('))) {
        phone = `(${match[1]})${match[2] ? ' ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`;
        return phone;
    }
    return phoneNumberString;
}