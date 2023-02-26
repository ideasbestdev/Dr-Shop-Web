import { InstructionlineStyle } from '@/styledcomponents/index'
import React from 'react'

interface Props {
    index: number
}

export function Instructionline({ index }: Props) {
    return (
        <InstructionlineStyle index={index}>
            <ul>
                <li className={`${index > 0 ? "isActive " : ""}`}>
                    <span>
                        Cart
                    </span>
                </li>
                <li className={`${index > 1 ? "isActive " : ""}`}>
                    <span>
                        Verification
                        <br />
                        Method
                    </span>
                </li>
                <li className={`${index > 2 ? "isActive " : ""}`}>
                    <span>
                        Shipping Address

                    </span>
                </li>
                <li className={`${index > 3 ? "isActive " : ""}`}>
                    <span>
                        Confirm and <br />
                        Pay
                    </span>
                </li>
            </ul>
        </InstructionlineStyle>
    )
}

