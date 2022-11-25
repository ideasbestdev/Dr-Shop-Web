import { priceRegex } from '@/helpers/Regex';
import { OptionModel } from '@/models/OptionModel';
import { ExpandedListStyle, ProductFilterSectionStyle } from '@/styledcomponents/index'
import React, { useEffect, useState } from 'react'
import { CustomColor, CustomRange, CustomSize } from '@/components/common';

interface Props {
    width?: string
}

export function ProductFilterSection({ width }: Props) {
    const STEP = 1;
    const MIN = 0;
    const MAX = 5000;

    const initialColor: OptionModel[] = [
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        },
        {
            value: "#CE3E3E",
            selected: false
        }
    ];

    const initialSize: OptionModel[] = [
        {
            value: "XXS",
            selected: false
        },
        {
            value: "XS",
            selected: false
        },
        {
            value: "S",
            selected: false
        },
        {
            value: "M",
            selected: false
        },
        {
            value: "L",
            selected: false
        },
        {
            value: "XL",
            selected: false
        }
    ];

    const [scrolled, setScrolled] = useState(false);

    const [colors, setColors] = useState(initialColor);

    const [sizes, setSizes] = useState(initialSize);

    const [values, setValues] = useState([MIN, MAX]);

    const [expand, setExpand] = useState({
        category: false,
        price: false,
        brand: false,
        color: false,
        size: false,
        sortBy: false,
    });

    function editExpand(key: string): void {
        switch (key) {

            case "category":
                expand.category = !expand.category;
                break;

            case "price":
                expand.price = !expand.price;
                break;

            case "brand":
                expand.brand = !expand.brand;
                break;

            case "color":
                expand.color = !expand.color;
                break;

            case "size":
                expand.size = !expand.size;
                break;

            case "sortBy":
                expand.sortBy = !expand.sortBy;
                break;

            default:
                break;
        }

        const newExpand = Object.assign({}, expand);

        setExpand(newExpand);
    }

    function changeRange(value: string, index: number) {
        if (Number(value.replace("$", "")) > MAX) return;
        if (value.length == 1) {
            if (index == 0) {
                const newValue: number[] = [Number(MIN), values[1]];
                setValues(newValue);
            }
            if (index == 1) {
                const newValue: number[] = [values[0], Number(MIN)];
                setValues(newValue);
            }
        }

        if (priceRegex(value)) {
            if (index == 0) {
                const newValue: number[] = [Number(value.replace("$", "")), values[1]];
                setValues(newValue);
            }
            if (index == 1) {
                const newValue: number[] = [values[0], Number(value.replace("$", ""))];
                setValues(newValue);
            }
        }
    }

    function handleScroll() {
        if (window.scrollY > 70 && !scrolled) {
            setScrolled(true);
        }
        else if (window.scrollY <= 70) {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])


    return (
        <>
            <ProductFilterSectionStyle scrolled={scrolled} width={width}>
                <ul>
                    <li>
                        <ExpandedListStyle maxHeight={expand.category}>
                            <a onClick={() => editExpand("category")}>Category</a>
                            <ul>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.price}>
                            <a onClick={() => editExpand("price")}>Price</a>
                            <ul>
                                <li>
                                    <CustomRange values={values} setValues={setValues} MAX={MAX} MIN={MIN} STEP={STEP} />
                                </li>
                                <li>
                                    <input type={"tel"} value={"$" + values[0]} onChange={(e) => { changeRange(e.target.value, 0) }} />
                                    <input type={"tel"} value={"$" + values[1]} onChange={(e) => { changeRange(e.target.value, 1) }} />
                                </li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.brand}>
                            <a onClick={() => editExpand("brand")}>Brand</a>
                            <ul>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.color}>
                            <a onClick={() => editExpand("color")}>Color</a>
                            <ul>
                                <li>
                                    <CustomColor colors={colors} setColors={setColors} />
                                </li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.size}>
                            <a onClick={() => editExpand("size")}>Sizes</a>
                            <ul>
                                <li><CustomSize setSizes={setSizes} sizes={sizes} /></li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <ExpandedListStyle maxHeight={expand.sortBy}>
                            <a onClick={() => editExpand("sortBy")}>Sort By</a>
                            <ul>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                                <li>Mask</li>
                            </ul>
                        </ExpandedListStyle>
                    </li>
                    <li>
                        <div>
                            <a>My Wishlist</a>
                            <ul>
                                <li>Empty</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </ProductFilterSectionStyle>
        </>
    )
}