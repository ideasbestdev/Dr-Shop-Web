import { OrderListModel } from "@/models/UserModel";
import { OrderListStyle, SectionTitleStyle } from "@/styledcomponents/index";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { UserService } from '@/services/index';
import { orderStatus } from "@/utils/config";
import { useRouter } from 'next/router';

export default function OrderList() {


    const [orderList, setOrderList] = useState<OrderListModel[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function getOrders() {
            const userService = new UserService();
            const response = await userService.getUserOrders();
            if (response.success) {
                const orderList: OrderListModel[] = response.data;
                setOrderList(orderList);
            }
        }
        getOrders();
    }, []);
    function format(inputDate: Date) {
        let date, month, year, hour, minutes;

        date = inputDate.getDate();
        month = inputDate.getMonth() + 1;
        year = inputDate.getFullYear();

        hour = inputDate.getHours();
        minutes = inputDate.getMinutes();

        hour = hour.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');

        date = date
            .toString()
            .padStart(2, '0');

        month = month
            .toString()
            .padStart(2, '0');



        return `${date}/${month}/${year} ${hour}:${minutes}`;
    }
    return (
        <OrderListStyle>
            <SectionTitleStyle>
                Orders
            </SectionTitleStyle>
            <ul className="tab">
                <li className="selected">Pending orders</li>
                <li>Past orders</li>
            </ul>
            <ul className="orderList">
                {
                    orderList.map((value) => <li key={value.id} onClick={() => router.push("/orders/" + value.id)}>
                        <div className="number">
                            #{value.id?.toString()
                                .padStart(2, '0')}
                        </div>
                        <div className="placed">
                            Order placed: {value.created_at ? format(new Date(value.created_at)) : null}
                        </div>
                        <div className="number1">
                            Order number: {value.id?.toString()
                                .padStart(2, '0')}
                        </div>
                        <Link href={""}>
                            <a>Track order</a>
                        </Link>
                        <Link href={""}>
                            <a>{value.status != undefined && value.status != null ? orderStatus[value.status] : ""}</a>
                        </Link>
                    </li>)
                }
            </ul>
        </OrderListStyle>
    )
}

{/* <li>
                    <div className="number">
                        Order Number
                    </div>
                    <div className="placed">
                        Order placed: 2/3/21 12:00
                    </div>
                    <div className="number1">
                        Order number: 237462
                    </div>
                    <Link href={""}>
                        <a>Track order</a>
                    </Link>
                    <Link href={""}>
                        <a>Pending</a>
                    </Link>
                </li> */}