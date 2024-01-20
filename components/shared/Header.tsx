import React, { useEffect, useRef } from 'react';
import { HeaderStyle, InputIconStyle, NotificationStyle } from '@/styledcomponents/index';
import { ArrowDownIcon, BurgerIcon, CartIcon, CloseIcon, HeartIcon, Logo, NotificationIcon, SearchIcon, TrackIcon, UserIcon } from '../icons';
import Link from 'next/link';
import { CustomSelectGroup } from '../common/CustomSelectGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalState } from '@/statemangment/slice/globalSlice';
import { CategoryModel, FilterProductModel, GroupOptionModel, OptionModel, SubCategoryModel } from '@/models/index';
import { useState } from 'react';
import { PageUrls } from '@/utils/index';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { stringIsEmptyOrNull } from '@/helpers/index';
import { setSearchFilter } from '@/statemangment/slice/filterSlice';


export function Header() {
    const { firstRequest, cartTotal } = useSelector(getGlobalState);
    const headerRef = useRef<HTMLElement | null>(null);
    const [groupOptions, setGroupOptions] = useState<GroupOptionModel[]>([]);
    const [recommendedData, setrecommendedData] = useState<any>([]);
    const notificationRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const route = useRouter();
    const dispatch = useDispatch();
    let recommendedDataList = [
        "Chairs",
        "Error est",
        "Dorolumn",
        "Voluptas",
        "Dicta",
        "Beatea",
        "Ipsa"
    ]

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 150) {
                headerRef.current?.classList.add("header_scroll");
            }
            else if (window.scrollY <= 150) {
                headerRef.current?.classList.remove("header_scroll");
            }
        }
        window.addEventListener('scroll', handleScroll);

        const handleClick = () => {
            notificationRef.current?.classList.remove("show");
        }
        document.addEventListener('click', handleClick);
        const searchedObject: FilterProductModel = queryString.parse(location.search);
        if (searchRef.current && searchedObject.search) {
            searchRef.current.value = searchedObject.search;
        }
    }, [])

    useEffect(() => {
        if (firstRequest.categories) {
            const allOptionGroup: GroupOptionModel[] = [];

            firstRequest.categories.map((item: CategoryModel) => {
                const optionGroup: GroupOptionModel = {
                    label: "",
                }
                optionGroup.label = item.name;
                if (item.sub_categories && item.sub_categories?.length > 0) {
                    optionGroup.options = [];
                }

                item.sub_categories?.map((subItem: SubCategoryModel) => {
                    const optionValue: OptionModel = {
                        label: "",
                        value: "",
                    }
                    optionValue.label = subItem.name;
                    optionValue.value = subItem.id?.toString();
                    optionGroup.options?.push(optionValue);

                })
                allOptionGroup.push(optionGroup);
            });
            setGroupOptions(allOptionGroup);

        }
    }, [firstRequest])

    function Search() {
        const searchedObject: FilterProductModel = queryString.parse(location.search);
        searchedObject.search = searchRef.current?.value;
        dispatch(setSearchFilter(searchRef.current?.value));
        if (stringIsEmptyOrNull(searchRef.current?.value)) {
            delete searchedObject.search;
        }
        route.push({
            pathname: "/products",
            query: searchedObject as any,
        })
        // route.push('/products', {
        //     query: searchedObject as any,
        // });
    }

    function openCloseNotification(event: React.MouseEvent) {
        event.stopPropagation();
        if (notificationRef.current?.classList.contains("show")) {
            notificationRef.current?.classList.remove("show");
        } else {
            notificationRef.current?.classList.add("show");
        }
    }

    function onBlurSearch() {
        setrecommendedData([]);
    }

    function onFocusSearch() {
        setrecommendedData(recommendedDataList);
    }

    function onChangeSearch() {
        let searchValue = searchRef.current?.value;
        if (stringIsEmptyOrNull(searchValue)) {
            setrecommendedData(recommendedDataList)
        } else {
            setrecommendedData(recommendedDataList.filter(d => d.toLowerCase().indexOf(searchValue ? searchValue.toLowerCase() : "") > -1));
        }
    }

    return (
        <HeaderStyle ref={headerRef}>
            <section className='top_section'>
                <nav>
                    <ul>
                        <li>
                            <a>
                                <i>
                                    <TrackIcon />
                                </i>
                                Track Your Order
                            </a>
                        </li>
                        <li className='account_container'>
                            <i>
                                <UserIcon />
                            </i>
                            {firstRequest.user ?
                                <>
                                    <Link href={PageUrls.PROFILE}>
                                        <a>
                                            Hello, {firstRequest.user.account?.first_name}
                                        </a>
                                    </Link>
                                    <div className='account_info'>
                                        <h3>Account Info</h3>
                                        <ul>
                                            <li><Link href={PageUrls.PROFILE}><a>Account</a></Link></li>
                                            <li><Link href={PageUrls.PROFILE + "#order"}><a>Orders</a></Link></li>
                                            <li><Link href={PageUrls.FAVORITE}><a>Favorite</a></Link></li>
                                            <li><Link href={PageUrls.CART}><a>Cart</a></Link></li>
                                        </ul>
                                    </div>
                                </>
                                :
                                <div className='register_sigin'>
                                    <Link href={PageUrls.LOGIN}>
                                        <a>
                                            Sign in
                                        </a>
                                    </Link>
                                    <div className='register'>
                                        New Customer?
                                        <Link href={PageUrls.REGISTER}>
                                            <a>
                                                Sign up
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            }
                        </li>
                        {/* <li>
                            <Link href={firstRequest.user ? PageUrls.PROFILE : PageUrls.REGISTER}>
                                <a>
                                    <i>
                                        <UserIcon />
                                    </i>
                                    {firstRequest.user ? "Profile" : "Register or Sign in"}
                                </a>
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </section>
            <section className='bottom_section'>
                <nav>
                    <ul>
                        <li className='burger'>
                            <BurgerIcon />
                        </li>
                        <li className='logo'>
                            <Link href={"/"}>
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </li>
                        <li className='categories'>
                            {
                                groupOptions.length > 0 ? <CustomSelectGroup data={groupOptions} /> : null
                            }

                        </li>
                        <li className='search_input'>
                            <form onSubmit={(e) => { e.preventDefault(); Search() }}>
                                <InputIconStyle>
                                    <button><i><SearchIcon /></i></button>
                                    <input type={"text"} placeholder="Search for Products" ref={searchRef} onBlur={onBlurSearch} onFocus={onFocusSearch} onChange={onChangeSearch} />
                                </InputIconStyle>
                                <div className={`recomendation_container ${recommendedData.length > 0 ? "show" : ""}`}>
                                    <ul className='recomendation_list'>
                                        {
                                            recommendedData.map((value: string, index: number) =>
                                                <li key={index}><Link href={""}><a><i><SearchIcon /></i>{value}</a></Link></li>
                                            )
                                        }

                                    </ul>
                                </div>
                            </form>
                        </li>
                        <li className='icon_group'>
                            {
                                firstRequest.user ? <>
                                    <a className='notifcation_icon'>
                                        <i onClick={(e: React.MouseEvent) => openCloseNotification(e)}>
                                            <NotificationIcon />
                                        </i>
                                        <NotificationStyle onClick={(e) => e.stopPropagation()} ref={notificationRef}>
                                            <div className='top_notification'>
                                                <h2>Notifications</h2>
                                                <i onClick={(e: React.MouseEvent) => openCloseNotification(e)}><CloseIcon /></i>
                                            </div>
                                            <ul>
                                                <li>
                                                    <h3>50% off on stc pay 😍</h3>
                                                    <p>Pay through stc pay and enjoy 50% off. Use promo code STCPAY. Valid until 31 Dec.</p>
                                                    <div className='time'>12m ago</div>
                                                    <i><ArrowDownIcon /></i>
                                                </li>
                                                <li>
                                                    <h3>Throw out your punch cards 😎</h3>
                                                    <p>Use Cofeapp for REAL REWARDS</p>
                                                    <div className='time'>1 day ago</div>
                                                    <i><ArrowDownIcon /></i>
                                                </li>
                                            </ul>
                                        </NotificationStyle>
                                    </a>
                                    <Link href={PageUrls.FAVORITE}>
                                        <a>
                                            <i>
                                                <HeartIcon />
                                            </i>
                                        </a>
                                    </Link>
                                </> : null
                            }
                            <Link href={PageUrls.CART}>
                                <a>
                                    {
                                        cartTotal > 0 ? <div className='cart_number'>{cartTotal}</div> : null
                                    }
                                    <i>
                                        <CartIcon />
                                    </i>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </HeaderStyle>
    )
}