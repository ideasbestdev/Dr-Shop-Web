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
                console.log(orderList)
            }
        }
        getOrders();
    }, []);

    function formatTime(timeString: string) {
        const [hourString, minute] = timeString.split(":");
        const hour = +hourString % 24;
        return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
    }

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



        return `${month}/${date}/${year} ${formatTime(hour + ":" + minutes)}`;
    }
    return (
        <OrderListStyle>
            <SectionTitleStyle>
                Your Orders
            </SectionTitleStyle>
            <ul className="tab">
                <li className="selected">Pending Orders</li>
                <li>Past Orders</li>
            </ul>
            <table className="orderList">
                <tr>
                    <td>Order Number</td>
                    <td className="center_text">Order Placed</td>
                    <td className="center_text">Order Total</td>
                    <td className="center_text">Order Summary</td>
                    <td className="center_text">Track Order</td>
                    <td className="center_text">Order Status</td>
                </tr>
                {
                    orderList.map((value) => <tr key={value.id}>
                        <td className="number">
                            #{value.id?.toString()
                                .padStart(2, '0')}
                        </td>
                        <td className="placed center_text">
                            {value.created_at ? format(new Date(value.created_at)) : null}
                        </td>
                        <td className="number1 center_text">
                            $ {value.total_amount?.toFixed(2)}
                        </td>
                        <td className="center_text">
                            <Link href={"/orders/" + value.id}>
                                <a>Order Summary</a>
                            </Link>
                        </td>
                        <td className="center_text">
                            <Link href={"/orders/" + value.id}>
                                <a>Track order</a>
                            </Link>
                        </td>
                        <td className="center_text">
                            <Link href={""}>
                                <a>{value.status != undefined && value.status != null ? orderStatus[value.status] : ""}</a>
                            </Link>
                        </td>
                    </tr>)
                }
            </table>
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