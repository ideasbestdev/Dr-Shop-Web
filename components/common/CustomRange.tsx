import React from 'react'
import { Range, getTrackBackground } from 'react-range';
import { useState } from 'react';

const STEP = 1;
const MIN = 0;
const MAX = 5000;
const rtl = false;

interface Props {
    values: number[],
    setValues: any,
    STEP: number,
    MIN: number,
    MAX: number,
    rtl?: boolean,
    priceChanged?: Function,
}

export function CustomRange({ values, setValues, MAX, MIN, STEP, rtl = false, priceChanged }: Props) {
    return (
        <div>
            <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                rtl={rtl}
                onChange={(values) => setValues(values)}
                onFinalChange={() => priceChanged ? priceChanged() : null}
                renderTrack={({ props, children }) => (
                    <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart}>
                        <div ref={props.ref}
                            style={{
                                height: '5px',
                                width: '100%',
                                borderRadius: "6px",
                                background: getTrackBackground({
                                    values,
                                    colors: ['#E1E1E1 ', '#2262BC', '#E1E1E1'],
                                    min: MIN,
                                    max: MAX,
                                    rtl
                                }),
                            }}
                            className="rangeLine"
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ index, props, isDragged }) => (
                    <div
                        {...props}
                        className={`range_thumb_${index}`}
                        style={{
                            ...props.style,
                            height: '16px',
                            width: '16px',
                            outline: 'none',
                            borderRadius: '50%',
                            backgroundColor: '#2262BC',
                            //       boxShadow: '0px 0px 8px #34283E3D',
                        }}
                    >
                    </div>
                )}
            />
        </div>
    );
}