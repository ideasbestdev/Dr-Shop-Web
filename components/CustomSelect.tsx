import { AppCustomSelect } from '@/styledcomponents/AppCustomSelect'
import React from 'react'
import { SelectModel } from '@/models/index'
import { useState } from 'react';
import { useEffect } from 'react';
import { ArrowDownIcon } from './icons';

interface Props {
    selectValue: string,
    data: SelectModel[],
    onChange?: any,
    property: string,
}

function CustomSelect({ selectValue, data, onChange, property }: Props) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.addEventListener('click', () => setShow(false));
    }, []);

    return (
        <AppCustomSelect show={show}>
            <span onClick={(e) => { e.stopPropagation(); setShow(!show) }}>
                {data.find(d => d.key == selectValue)?.value}
                <i><ArrowDownIcon color='#000' /></i>
            </span>

            <ul>
                {
                    data.map((entry: SelectModel, index) => <li key={index} value={entry.key} onClick={() => { onChange(property, entry.key); }}>{entry.value}</li>)
                }
            </ul>
        </AppCustomSelect >
    )
}

export default CustomSelect