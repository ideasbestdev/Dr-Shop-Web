
const baseUrl = "https://drshop-api.ideasadds-dev.com/api";

const headers: any = {
    "Content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
};



const TOKEN_KEY_NAME = "api_token";

const DEVICEID_KEY_NAME = "device_id";

const DoctorController = "/doctor/user/v1/";

const TOKEN_EXPIRE = 3; //3days

export { baseUrl, headers, TOKEN_KEY_NAME, DoctorController, DEVICEID_KEY_NAME, TOKEN_EXPIRE };