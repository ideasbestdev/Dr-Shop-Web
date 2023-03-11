import { useEffect, useState } from 'react';
import { UserService } from '@/services/index';
import { Instructionline } from "@/components/common";
import { AddressModel } from '@/models/index';
import { LocationIcon } from "@/components/icons";
import { LocationSectionStyle, SectionTitleStyle } from "../styledcomponents";
import { LinkButtonStyle } from '../styledcomponents/common/LinkButtonStyle';
import Link from "next/link";
import { AddressPop } from '@/components/popups/AddressPop';
import { useSelector, useDispatch } from 'react-redux';
import { getGlobalState, setSelectedAddress } from '@/statemangment/slice/globalSlice';
import { useRouter } from 'next/router';


export default function Address() {
    const [addressList, setAddressList] = useState<AddressModel[]>([]);
    const [showPop, setShowPop] = useState(false);
    const [selectedAddressId, setSelectedAddressId] = useState<number>();
    const { selectedAddress, selectedProducts } = useSelector(getGlobalState);
    const dispatch = useDispatch();
    const route = useRouter();
    useEffect(() => {
        async function getAddress() {
            const userService = new UserService();
            const response = await userService.getUserAddress();
            if (response.success) {
                const addressList: AddressModel[] = response.data;
                setAddressList(addressList);
                const defaultAddress = addressList.find(d => d.is_default);
                if (defaultAddress) {
                    dispatch(setSelectedAddress(defaultAddress));
                }
            }
        }
        if (selectedProducts == undefined || selectedProducts?.length == 0) {
            route.replace("/");
        }
        getAddress();
    }, []);

    return (
        <>
            <LocationSectionStyle>
                <Instructionline index={3} />
                <SectionTitleStyle>
                    Shipping Address
                </SectionTitleStyle>
                <h3>
                    Select your Location
                </h3>
                <div className='address_container'>
                    <ul className="address_list">
                        {
                            addressList.map((item) =>
                                <li onClick={() => dispatch(setSelectedAddress(item))} key={item.id} className={`card ${selectedAddress?.id == item.id ? "is_Active" : ""}`}>
                                    <div className="content">
                                        <i>
                                            <LocationIcon color='#000000' />
                                        </i>
                                        <h4>
                                            {item.name}
                                        </h4>
                                    </div>
                                    <div className="circle">

                                    </div>
                                </li>
                            )
                        }
                        <li className='card' onClick={() => setShowPop(true)}>
                            <a className='plus'>+</a>
                            <h4>Add an Address</h4>
                        </li>

                    </ul>

                    <Link href={"/order"}>
                        <LinkButtonStyle>Next</LinkButtonStyle>
                    </Link>
                </div>
            </LocationSectionStyle>
            <AddressPop show={showPop} setShowPop={setShowPop} setAddressList={setAddressList} />
        </>
    )
}