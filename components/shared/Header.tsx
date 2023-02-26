import React, { useEffect, useRef } from 'react';
import { HeaderStyle, InputIconStyle, NotificationStyle } from '@/styledcomponents/index';
import { ArrowDownIcon, CartIcon, CloseIcon, HeartIcon, Logo, NotificationIcon, SearchIcon, TrackIcon, UserIcon } from '../icons';
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
    const { firstRequest, currentPage } = useSelector(getGlobalState);
    const headerRef = useRef<HTMLElement | null>(null);
    const [groupOptions, setGroupOptions] = useState<GroupOptionModel[]>([]);
    const notificationRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const route = useRouter();
    const dispatch = useDispatch();


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
                        <li>
                            <Link href={firstRequest.user ? PageUrls.PROFILE : PageUrls.REGISTER}>
                                <a>
                                    <i>
                                        <UserIcon />
                                    </i>
                                    {firstRequest.user ? "Profile" : "Register or Sign in"}
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className='bottom_section'>
                <nav>
                    <ul>
                        <li>
                            <Link href={"/"}>
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </li>
                        <li>
                            {
                                groupOptions.length > 0 ? <CustomSelectGroup data={groupOptions} /> : null
                            }

                        </li>
                        <li className='search_input'>
                            <form onSubmit={(e) => { e.preventDefault(); Search() }}>
                                <InputIconStyle>
                                    <button><i><SearchIcon /></i></button>
                                    <input type={"text"} placeholder="Search for Products" ref={searchRef} />
                                </InputIconStyle>
                            </form>
                        </li>
                        <li className='icon_group'>
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
                            <Link href={PageUrls.CART}>
                                <a>
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