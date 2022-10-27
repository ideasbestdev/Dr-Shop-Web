import Cookies from "js-cookie";
import { DEVICEID_KEY_NAME } from "@/utils/index";

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