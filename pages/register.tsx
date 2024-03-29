import Image from "next/image";
import { AssetsImages, emailRegexPattern, REQUIRED_MESSAGE, INVALID_EMAIL_MESSAGE, passwordRegexPattern, INVALID_PASSWORD_MESSAGE, ERROR_ALERT_TYPE, TOKEN_EXPIRE, TOKEN_KEY_NAME, PageUrls, usPhoneRegexPattern } from '@/utils/index';
import { ButtonStyle, CheckboxStyle, ErrorMessageStyle, InputStyle, LoaderStyle, RegisterStyle, SectionTitleStyle, SelectStyle } from '@/styledcomponents/index';
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductService, UserService } from '@/services/index';
import { useRef } from 'react';
import { AlertStateModel, ServerResModel, UserModel } from '@/models/index';
import { generateRandomNumber, formatPhoneNumber } from '@/helpers/index';
import { ArrowDownIcon } from "@/components/icons";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "@/statemangment/slice/alertSlice";
import { getGlobalState, setCartTotal, setUser, setVerificationPop } from "@/statemangment/slice/globalSlice";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { INVALID_PHONE_MESSAGE } from './../utils/constants';



export default function Register() {
    const dispatch = useDispatch();
    const { firstRequest } = useSelector(getGlobalState);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const route = useRouter();
    async function getCartTotal() {
        const productService: ProductService = new ProductService();
        const response: ServerResModel = await productService.getCart();
        if (response.success) {
            dispatch(setCartTotal(response.data.cart_products.length));
        }
    }
    const onSubmit: SubmitHandler<UserModel> = async (data) => {
        buttonRef.current?.classList.add("loading");
        const userService = new UserService();
        const productService = new ProductService();
        var cartInfo = (await productService.getCart()).data;
        const response = await userService.Register(data);
        if (response.success) {
            const userResponse: UserModel = response.data;
            if (userResponse.api_token) {
                Cookies.set(TOKEN_KEY_NAME, userResponse.api_token, { expires: TOKEN_EXPIRE });
                productService.moveCart(cartInfo).then(function () {
                    getCartTotal();
                });
                dispatch(setUser(userResponse));
                userService.sendEmailVerifcate();
                dispatch(setVerificationPop(true));
                route.push(PageUrls.HOME);
            }
        } else {
            const generatedIdentifier = generateRandomNumber(4);
            const customAlert: AlertStateModel = {
                message: response.errors ? response.errors[0] : "Something went Error",
                type: ERROR_ALERT_TYPE,
                identifier: generatedIdentifier,
            }
            dispatch(setAlert(customAlert));
        }
        buttonRef.current?.classList.remove("loading");

    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm<UserModel>({
        defaultValues: {
            country_code: "+1"
        },
        mode: "onChange",
        reValidateMode: "onChange"
    });





    return (
        <RegisterStyle>
            <section className="image_container">
                <Image src={AssetsImages.registerImage} alt="login_image" />

            </section>
            <section className="container">
                <div className="title">
                    <SectionTitleStyle>Welcome to Dr. Supply Shop</SectionTitleStyle>
                    <h3>Fill out the form to get started.</h3>
                </div>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <SectionTitleStyle>Sign Up</SectionTitleStyle>
                    <section className="content">
                        <ul>
                            <li>
                                <InputStyle>
                                    {/* <input type={"number"} placeholder="First Name" /> */}
                                    <input type={"text"} placeholder="First Name" {...register("first_name", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.first_name?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"text"} placeholder="Last Name" {...register("last_name", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.last_name?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"email"} placeholder="Email Address"  {...register("email", { required: REQUIRED_MESSAGE, pattern: { value: emailRegexPattern, message: INVALID_EMAIL_MESSAGE } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.email?.message}</ErrorMessageStyle>
                            </li>

                            <li>
                                <InputStyle className="phone_input">
                                    <input type={"text"} disabled={true} className="country_code" {...register("country_code")} />

                                    {/* <SelectStyle>
                                        <select {...register("country_code")}>
                                            {
                                                firstRequest?.countries?.map(item => <option key={item.id} value={item.phone_code}>{item.phone_code}</option>)
                                            }
                                        </select>
                                        <i><ArrowDownIcon /></i>
                                    </SelectStyle> */}
                                    <input type={"text"} maxLength={14} placeholder="(xxx) xxx-xxxx" {...register("phone", { required: REQUIRED_MESSAGE, pattern: { value: usPhoneRegexPattern, message: INVALID_PHONE_MESSAGE }, onChange: (e) => { e.target.value = formatPhoneNumber(e.target.value) } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.phone?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"text"} placeholder="Company Name" {...register("companyName")} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.companyName?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <SelectStyle>
                                    <select {...register("industry_id", { required: REQUIRED_MESSAGE })}>
                                        <option value={""}>Industry</option>
                                        {
                                            firstRequest?.industries?.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
                                        }
                                    </select>
                                    <i><ArrowDownIcon /></i>
                                </SelectStyle>
                                <ErrorMessageStyle>{errors.industry_id?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"password"} placeholder="Password"  {...register("password", { required: REQUIRED_MESSAGE, pattern: { value: passwordRegexPattern, message: INVALID_PASSWORD_MESSAGE } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.password?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"password"} placeholder="Confirm Password"  {...register("repeat_passowrd", {
                                        validate: value =>
                                            value === watch("password") || "The passwords do not match"
                                    })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.repeat_passowrd?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"text"} placeholder="Group" {...register("group")} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.group?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"text"} placeholder="How did you hear about us ?" {...register("how_hear")} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.how_hear?.message}</ErrorMessageStyle>
                            </li>
                            <li className="checkbox fullWidth">
                                <div className="checkbox_container">
                                    <CheckboxStyle>
                                        <input type={"checkbox"} id={"terms"} {...register("accepted_terms", { required: REQUIRED_MESSAGE })} />
                                        <label htmlFor="terms">I have read and agree to the<Link href={""}><a>Terms and Conditions</a></Link></label>
                                    </CheckboxStyle>
                                    <ErrorMessageStyle>{errors.accepted_terms?.message}</ErrorMessageStyle>

                                </div>
                                <div className="checkbox_container">
                                    <CheckboxStyle>
                                        <input type={"checkbox"} id={"privacy"} {...register("accepted_privacy", { required: REQUIRED_MESSAGE })} />
                                        <label htmlFor="privacy">I have read and agree to the<Link href={""}><a>Privacy and Policy</a></Link></label>
                                    </CheckboxStyle>
                                    <ErrorMessageStyle>{errors.accepted_privacy?.message}</ErrorMessageStyle>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="bottom_section">
                        <ButtonStyle ref={buttonRef} type={"submit"}>
                            <span>Sign Up</span>
                            <LoaderStyle></LoaderStyle>
                        </ButtonStyle>
                        <div className="dont_or_have_account">Already have an account?  <Link href={PageUrls.LOGIN}><a>Sign In</a></Link></div>
                    </section>
                </form>
            </section>
        </RegisterStyle>
    )
}

Register.class = "noPaddingBottom";
