import React from 'react'

interface Props {
    color?: string;
}
export function RightArrowIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="11.913" height="19.798" viewBox="0 0 11.913 19.798">
            <path id="Path_87" data-name="Path 87" d="M11.234,11.411Q7.351,15.3,3.451,19.194A2,2,0,1,1,.632,16.363q3.1-3.1,6.186-6.2a2.493,2.493,0,0,1,.306-.219c-.974-.98-1.868-1.879-2.767-2.779C3.1,5.917,1.848,4.672.591,3.415A1.993,1.993,0,1,1,3.4.59Q7.331,4.5,11.234,8.413a1.994,1.994,0,0,1,0,3" transform="translate(0 0)" fill={color} />
        </svg>

    )
}