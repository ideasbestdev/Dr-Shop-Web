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
                {data.find(d => d.key == selectValue) ? data.find(d => d.key == selectValue)?.value : "Select Clinc"}
                <i><ArrowDownIcon color='#000' /></i>
            </span>

            <ul>
                {
                    data.map((entry: SelectModel, index) => <li key={index} value={entry.key} onClick={() => { onChange(property, entry.key); }}>{entry.value}</li>)
                }
            </ul>
            <div>
                <select value={selectValue} onChange={(e) => { onChange(property, e.target.value); }}>
                    <option key={''} value={''}>Select Clinc</option>
                    {
                        data.map((entry: SelectModel, index) => <option key={index} value={entry.key} >{entry.value}</option>)
                    }
                </select>
                <i><ArrowDownIcon color='#000' /></i>

            </div>
        </AppCustomSelect >
    )
}

export default CustomSelect