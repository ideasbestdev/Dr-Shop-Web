import React from 'react'
import { generateRandomNumber } from '@/helpers/index';

interface Props {
    color?: string;
}
export function EditIcon({ color }: Props) {
    let id: string = generateRandomNumber(4);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22.317" height="22.335" viewBox="0 0 22.317 22.335">
            <defs>
                <clipPath id={id}>
                    <rect id="Rectangle_565" data-name="Rectangle 565" width="22.317" height="22.335" fill="#777" />
                </clipPath>
            </defs>
            <g id="Group_1551" data-name="Group 1551" clip-path={`url(#${id})`}>
                <path id="Path_787" data-name="Path 787" d="M20.477,81.408a2.673,2.673,0,0,1-1.261,2.34,2.812,2.812,0,0,1-1.588.437q-3.5,0-7.01,0H10.24c-2.472,0-4.945,0-7.417,0A2.7,2.7,0,0,1,.438,82.92,2.789,2.789,0,0,1,0,81.347q0-2.858,0-5.716,0-4.552,0-9.1a2.7,2.7,0,0,1,1.3-2.408A2.786,2.786,0,0,1,2.835,63.7q3.381,0,6.763,0c.538,0,1.076-.006,1.614,0a.814.814,0,0,1,.8.5.974.974,0,0,1-.128,1.054.906.906,0,0,1-.756.3q-1.8,0-3.592,0H2.809a.888.888,0,0,0-.806.4,1.039,1.039,0,0,0-.14.585q0,2.465,0,4.931,0,4.909,0,9.817a1.408,1.408,0,0,0,.04.388.817.817,0,0,0,.7.613,1.893,1.893,0,0,0,.3.016q7.345,0,14.69,0a.884.884,0,0,0,.893-.447,1.315,1.315,0,0,0,.121-.558c.008-1.905,0-3.81.005-5.716q0-1.294,0-2.589a.848.848,0,0,1,.43-.8.989.989,0,0,1,1.014.009.862.862,0,0,1,.415.813q0,1.571,0,3.142c0,1.745.008,3.491,0,5.236" transform="translate(0 -61.849)" fill="#777" />
                <path id="Path_788" data-name="Path 788" d="M176.354,4.042A5.121,5.121,0,0,0,172.01.012a1.054,1.054,0,0,0-.935.321q-5.425,5.429-10.854,10.855a1.881,1.881,0,0,0-.554,1.036c-.231,1.247-.517,2.483-.782,3.723-.052.241-.105.483-.155.724-.107.519.509,1.057.994,1.015.086-.009.174-.012.259-.028,1.4-.265,2.8-.527,4.194-.8a2.157,2.157,0,0,0,1.124-.6q3.53-3.553,7.054-7.112,1.879-1.894,3.758-3.788a.881.881,0,0,0,.3-.594,3.2,3.2,0,0,0-.063-.717m-1.969.433q-4.639,4.634-9.275,9.272c-.374.374-.751.743-1.117,1.124a.585.585,0,0,1-.347.157L161,15.52a1.024,1.024,0,0,1-.1.008l.371-1.977c.054-.29.1-.582.166-.87a.445.445,0,0,1,.112-.209q5.209-5.216,10.421-10.429a.211.211,0,0,1,.242-.062,3.221,3.221,0,0,1,2.248,2.255.212.212,0,0,1-.075.239" transform="translate(-154.1 0)" fill="#777" />
            </g>
        </svg>

    )
}