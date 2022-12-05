
const baseUrl = "https://drshop-api.ideasadds-dev.com/api";
const fontUrl = "http://localhost:3000/";

const headers: any = {
    "Content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
};



const TOKEN_KEY_NAME = "api_token";

const DEVICEID_KEY_NAME = "device_id";

const DoctorUserController = "/doctor/user/";
const DoctorComboController = "/doctor/combo/";
const DoctorProductController = "/doctor/product/";

const TOKEN_EXPIRE = 3; //3days

export { baseUrl, headers, TOKEN_KEY_NAME, DoctorUserController, DoctorProductController, DoctorComboController, DEVICEID_KEY_NAME, TOKEN_EXPIRE, fontUrl };