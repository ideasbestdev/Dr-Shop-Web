
//export const baseUrl = "https://drshop-api.ideasdevs.net/api/user/";
export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//const baseUrl = "https://drshop-api.ideasdev.net/api";
export const fontUrl = "http://localhost:3000/";

export const headers: any = {
    "Content-type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*"
};



export const TOKEN_KEY_NAME = "api_token";

export const DEVICEID_KEY_NAME = "device_id";

export const AccountController = "account/";
export const ComboController = "combo/";
export const ProductController = "product/";
export const CartController = "cart/";
export const OrderController = "order/";
export const AddressController = "address/account/";
export const CardController = "payment/method/";
export const DoctorConfigController = "/config/app/";

export const TOKEN_EXPIRE = 3656; //3656 days

export const emailRegexPattern = /\S+@\S+\.\S+/;

export const masterCardRegexPattern = /^(?:5[1-5][0-9]{14})$/;

export const visaRegexPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export const expiryRegexPattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

export const visaOrMasterRegexPattern = /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$|^4[0-9]{2,}$/;

export const passwordRegexPattern = /^(?=.*\d).{8,}$/;

export const priceRangeId = 3;

export const colorId = 1;

export const defaultPriceRangeMax = 5000;


export const apiversion = process.env.NEXT_PUBLIC_VERSION;



// <li>
// <ExpandedListStyle maxHeight={expand.price}>
//     <a onClick={() => editExpand("price")}><span>Price</span><RightArrowIcon color='#707070' /></a>
//     <ul>
//         <li>
//             <CustomRange values={values} setValues={setValues} MAX={priceRangeObject && priceRangeObject.data?.max ? priceRangeObject.data.max : defaultPriceRangeMax} MIN={priceRangeObject && priceRangeObject.data?.min ? priceRangeObject.data.min : MIN} STEP={STEP} />
//         </li>
//         <li>
//             <input type={"tel"} value={"$" + values[0]} onChange={(e) => { changeRange(e.target.value, 0) }} />
//             <input type={"tel"} value={"$" + values[1]} onChange={(e) => { changeRange(e.target.value, 1) }} />
//         </li>
//     </ul>
// </ExpandedListStyle>
// </li>