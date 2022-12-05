import { CustomSelectStyle } from '@/styledcomponents/common/CustomSelectStyle'
import React from 'react'
import { SelectModel } from '@/models/index'
import { useState } from 'react';
import { useEffect } from 'react';
import { RightArrowIcon } from '@/components/icons';

interface Props {
    selectValue?: number | string,
    data: SelectModel[],
    onChange?: any,
    property: string,
}

export function CustomSelect({ selectValue, data, onChange, property }: Props) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        document.addEventListener('click', () => setShow(false));
    }, []);

    return (
        <CustomSelectStyle show={show}>
            <span onClick={(e) => { e.stopPropagation(); setShow(!show) }}>
                {data.find(d => d.id == selectValue) ? data.find(d => d.id == selectValue)?.name : "Select Clinc"}
                <i><RightArrowIcon color='#486B92' /></i>
            </span>

            <ul>
                <li key={''} value={''} onClick={() => { onChange(property, ''); }}>Select Clinc</li>
                {
                    data.map((entry: SelectModel, index) => <li key={index} value={entry.id} onClick={() => { onChange(property, entry.id); }}>{entry.name}</li>)
                }
            </ul>
            <div>
                <select value={selectValue} onChange={(e) => { onChange(property, e.target.value); }}>
                    <option key={''} value={''}>Select Clinc</option>
                    {
                        data.map((entry: SelectModel, index) => <option key={index} value={entry.id} >{entry.name}</option>)
                    }
                </select>
                <i><RightArrowIcon color='#486B92' /></i>

            </div>
        </CustomSelectStyle >
    )
}
