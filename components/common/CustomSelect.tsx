import { CustomSelectStyle } from '@/styledcomponents/common/CustomSelectStyle'
import React from 'react'
import { SelectModel } from '@/models/index'
import { useState } from 'react';
import { useEffect } from 'react';
import { RightArrowIcon } from '@/components/icons';

interface Props {
    selectValue?: number | string,
    data: SelectModel[],
    setValue?: any,
    setInputValue?: Function,
}

export function CustomSelect({ selectValue, data, setValue, setInputValue }: Props) {
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
                <li key={''} value={''} onClick={() => { setInputValue ? setInputValue(undefined) : null; setValue ? setValue('') : null; }}>Select Clinc</li>
                {
                    data.map((entry: SelectModel, index) => <li key={index} value={entry.id} onClick={() => { setInputValue ? setInputValue(entry.id) : null; setValue ? setValue(entry.id) : null; }}>{entry.name}</li>)
                }
            </ul>
            <div>
                <select value={selectValue} onChange={(e) => { setInputValue ? setInputValue(e.target.value) : null; setValue ? setValue(e.target.value) : null; }}>
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
