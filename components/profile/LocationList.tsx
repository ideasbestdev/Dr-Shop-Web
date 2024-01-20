import { useEffect, useState } from 'react';
import { UserService } from '@/services/index';
import { Instructionline } from "@/components/common";
import { AddressModel, AlertStateModel } from '@/models/index';
import { LocationIcon } from "@/components/icons";
import Link from "next/link";
import { AddressPop } from '@/components/popups/AddressPop';
import { useSelector, useDispatch } from 'react-redux';
import { getGlobalState, setSelectedAddress } from '@/statemangment/slice/globalSlice';
import { LinkButtonStyle, LocationSectionStyle, SectionTitleStyle } from '@/styledcomponents/index';
import { AddLocationSection } from './AddLocationSection';
import { generateRandomNumber } from '@/helpers/helpers';
import { INFO_ALERT_TYPE } from '@/utils/constants';
import { setAlert } from '@/statemangment/slice/alertSlice';
import { useRouter } from 'next/router';


export default function LocationList() {
    const [addressList, setAddressList] = useState<AddressModel[]>([]);
    const dispatch = useDispatch();
    const [selectedAddress, setSelectedAddress] = useState<AddressModel | undefined>(undefined);
    const userService = new UserService();
    const route = useRouter();
    useEffect(() => {
        async function getAddress() {
            const response = await userService.getUserAddress();
            if (response.success) {
                const addressList: AddressModel[] = response.data;
                setAddressList(addressList);
            }
        }
        getAddress();
    }, []);

    function addEditAddress(address: AddressModel) {
        setSelectedAddress(address);
    }
    async function setDefault(address: AddressModel) {
        var defaultAddress = addressList.find(x => x.is_default);
        address.is_default = 1;
        const response = await userService.EditAddress(address);
        if (response.success) {
            if (defaultAddress) {
                defaultAddress.is_default = 0;
            }
            setAddressList([...addressList]);
        }
    }
    async function deleteAddress(address: AddressModel) {
        const response = await userService.DeleteAddress(address);
        const generatedIdentifier = generateRandomNumber(4);
        const customAlert: AlertStateModel = {
            message: response.data,
            type: INFO_ALERT_TYPE,
            identifier: generatedIdentifier,
        }
        dispatch(setAlert(customAlert));
        setAddressList(addressList.filter(d => d.id != address.id));
    }
    return (
        <>
            {
                selectedAddress ?
                    <AddLocationSection setAddressList={setAddressList} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} />
                    :
                    <LocationSectionStyle className='v2'>
                        <SectionTitleStyle>
                            Shipping Address
                        </SectionTitleStyle>

                        <div className={`address_container ${route.pathname.endsWith("profile") ? " fromProfile" : ""}`}>
                            <ul className="address_list">
                                {
                                    addressList.map((item) =>
                                        <li key={item.id} className={`card address_card`} >
                                            <div className="content">
                                                <i>
                                                    <LocationIcon color='#000000' />
                                                </i>
                                                <h4>
                                                    {item.name}
                                                    <h3>
                                                        {item.country?.name}, {item.state?.name}, {item.city?.name}<br /> {item.street} <br /> Phone Number: {item.contact_phone}
                                                    </h3>
                                                </h4>

                                            </div>
                                            <div className={`bottom_container ${item.is_default ? 'default_container' : ""}`}>
                                                <div className='edit'>
                                                    <div className='edit_button' onClick={() => addEditAddress(item)}>
                                                        Edit
                                                    </div>
                                                    <div className='dash'>|</div>
                                                    <div className='remove_button' onClick={() => deleteAddress(item)}>
                                                        Remove
                                                    </div>
                                                </div>
                                                <div className='default'>Default</div>
                                                <div className='set_default' onClick={() => setDefault(item)}>Set as default</div>
                                            </div>
                                        </li>
                                    )
                                }
                                <li className='card address_card' onClick={() => addEditAddress({})}>
                                    <a className='plus'>+</a>
                                    <h4>Add an Address</h4>
                                </li>

                            </ul>
                        </div>
                    </LocationSectionStyle>
            }

        </>
    )
}