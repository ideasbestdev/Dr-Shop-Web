import { useEffect, useState } from "react";
import { generateRandomNumber } from "@/helpers/index";
import { AssetsImages, emailRegexPattern, ERROR_ALERT_TYPE, INFO_ALERT_TYPE, INVALID_EMAIL_MESSAGE, INVALID_PASSWORD_MESSAGE, PageUrls, passwordRegexPattern, REQUIRED_MESSAGE, TOKEN_EXPIRE, TOKEN_KEY_NAME } from "@/utils/index";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AlertStateModel, ServerResModel, UserModel } from "@/models/index";
import { ProductService, UserService } from '@/services/index';
import { CheckboxStyle, ErrorMessageStyle, InputStyle, LinkButtonStyle, LoginStyle, SectionTitleStyle } from "@/styledcomponents/index";
import Image from "next/image";
import Cookies from "js-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import { getGlobalState, setCartTotal, setUser, setVerificationPop } from "@/statemangment/slice/globalSlice";
import { setAlert } from "@/statemangment/slice/alertSlice";
import Link from "next/link";

export default function Login() {

    const { firstRequest } = useSelector(getGlobalState);

    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<UserModel>();

    const route = useRouter();
    async function getCartTotal() {
        const productService: ProductService = new ProductService();
        const response: ServerResModel = await productService.getCart();
        if (response.success) {
            dispatch(setCartTotal(response.data.cart_products.length));
        }
    }
    useEffect(function () {
        // if (firstRequest?.user) {
        //     route.push(PageUrls.HOME);
        // }
        //    const userServce = new UserService();
        //   userServce.verifcate();
    }, [])

    const onSubmit: SubmitHandler<UserModel> = async (data) => {
        const userServce = new UserService();
        const productService = new ProductService();
        var cartInfo = (await productService.getCart()).data;
        const response: ServerResModel = await userServce.Login(data);
        if (response.success) {
            const userResponse: UserModel = response.data;
            if (userResponse.api_token) {
                Cookies.set(TOKEN_KEY_NAME, userResponse.api_token, { expires: TOKEN_EXPIRE });
                productService.moveCart(cartInfo).then(function () {
                    getCartTotal()
                });
                dispatch(setUser(userResponse));
                if (!userResponse.account?.email_verified) {
                    const userServce = new UserService();
                    const emailRes = await userServce.sendEmailVerifcate();
                    const generatedIdentifier = generateRandomNumber(4);
                    if (emailRes.success) {
                        const customAlert: AlertStateModel = {
                            message: "An email with otp code has been send",
                            type: INFO_ALERT_TYPE,
                            identifier: generatedIdentifier,
                        }
                        dispatch(setAlert(customAlert));
                    }
                    dispatch(setVerificationPop(true));
                }


                route.push(PageUrls.HOME);
            }
        } else {
            const generatedIdentifier = generateRandomNumber(4);
            const customAlert: AlertStateModel = {
                message: response.error?.message ? response.error.message : "Something went Error",
                type: ERROR_ALERT_TYPE,
                identifier: generatedIdentifier,
            }
            dispatch(setAlert(customAlert));
        }


    };

    return (
        <>
            <LoginStyle>
                <section className="image_container">
                    <Image src={AssetsImages.loginImage} alt="login_image" />

                </section>
                <section className="container">
                    <SectionTitleStyle>Welcome Back!</SectionTitleStyle>
                    <form noValidate onSubmit={handleSubmit(onSubmit)}>
                        <SectionTitleStyle>Sign In</SectionTitleStyle>
                        <ul>
                            <li>
                                <InputStyle>
                                    <input type={"email"} placeholder="Email Address"  {...register("email", { required: REQUIRED_MESSAGE, pattern: { value: emailRegexPattern, message: INVALID_EMAIL_MESSAGE } })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.email?.message}</ErrorMessageStyle>
                            </li>
                            <li>
                                <InputStyle>
                                    <input type={"password"} placeholder="Password"  {...register("password", { required: REQUIRED_MESSAGE })} />
                                </InputStyle>
                                <ErrorMessageStyle>{errors.password?.message}</ErrorMessageStyle>
                            </li>
                        </ul>
                        <div className="forgot_password"><Link href={""}><a >Forget password?</a></Link></div>
                        <button type={"submit"}><LinkButtonStyle>Sign In</LinkButtonStyle></button>
                        <div className="dont_or_have_account">Do not have an account? <Link href={PageUrls.REGISTER}><a>Sign up</a></Link></div>
                    </form>
                </section>
            </LoginStyle>
        </>
    )
}

Login.componentName = "login";
Login.class = "noPaddingBottom";
{
    /*
            <div>
            <form noValidate onSubmit={(e) => { e.preventDefault(); login(); }}>
                <div>
                    Email
                </div>
                <input type={"email"} value={user.email} onChange={(e) => { editUser("email", e.currentTarget.value); }} />
                <div>{userError.emailError}</div>
                <div>Password</div>
                <input type={"password"} value={user.password} onChange={(e) => { editUser("password", e.currentTarget.value); }} />
                <div>{userError.passwordError}</div>
                <button onClick={(e) => e.stopPropagation()}>Login</button>
            </form>
        </div>
    */
}