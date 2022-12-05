import React from 'react'

interface Props {
    color?: string;
}

export function CameraIcon({ color }: Props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="27.004" height="22.157" viewBox="0 0 27.004 22.157">
            <g id="Group_1494" data-name="Group 1494" transform="translate(-1003.472 -504.412)">
                <path id="Path_200" data-name="Path 200" d="M140.26,100.8l-1.385,3.462h-4.847a2.418,2.418,0,0,0-2.423,2.423v13.848a2.418,2.418,0,0,0,2.423,2.423h22.157a2.418,2.418,0,0,0,2.423-2.423V106.685a2.418,2.418,0,0,0-2.423-2.423h-4.847l-1.385-3.462Zm4.847,7.27a5.539,5.539,0,1,1-5.539,5.539A5.54,5.54,0,0,1,145.107,108.07Z" transform="translate(871.867 403.612)" />
                <circle id="Ellipse_199" data-name="Ellipse 199" cx="6" cy="6" r="6" transform="translate(1011 511)" fill="#ededed" />
            </g>
        </svg>


    )
}

