import React from 'react'

interface Props {
    color?: string;
}
export function PrivacyPolicyIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21.025" height="25.797" viewBox="0 0 21.025 25.797">
            <g id="Group_1485" data-name="Group 1485" transform="translate(0 0)">
                <path id="Path_255" data-name="Path 255" d="M267.357,165.273a.941.941,0,0,0-.867,0l-9.57,4.952a.944.944,0,0,0-.51.838v2.956a17.878,17.878,0,0,0,6.246,13.586l3.652,3.133a.944.944,0,0,0,1.229,0l3.652-3.133a17.879,17.879,0,0,0,6.246-13.586v-2.956a.944.944,0,0,0-.51-.838Zm8.191,8.745a15.993,15.993,0,0,1-5.587,12.154l-3.039,2.606-3.038-2.606a15.993,15.993,0,0,1-5.587-12.154v-2.382l8.626-4.464,8.625,4.464Z" transform="translate(-256.409 -165.167)" fill={color} />
                <path id="Path_256" data-name="Path 256" d="M311.4,255.244a.943.943,0,0,0-1.313,1.355l2.236,2.168a.943.943,0,0,0,1.319,0l4.256-4.188a.944.944,0,0,0-1.323-1.345l-3.6,3.542Z" transform="translate(-303.801 -243.098)" fill={color} />
            </g>
        </svg>


    )
}