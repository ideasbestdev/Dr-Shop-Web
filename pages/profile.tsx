import { AddLocationSection, EditProfileSection, ProfileListSection } from '@/components/profile'
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

export default function Profile() {
    const PageStyle = styled.div`
        padding-top: 100px;
        padding-left: 4%;
        padding-right: 4%;
        display: flex;
        .table_container{
            padding: 0;
        }
        section{
            padding: 0;
        }
        .render_component{
            flex: 1;
            margin-left: 80px;
        }
  `;

    const [render, setRender] = useState({
        component: EditProfileSection
    });
    const [selected, setSelected] = useState(1);

    function renderChange(component: any, selectedNumber: number): void {
        render.component = component;
        const newRender = Object.assign({}, render);
        setRender(newRender);
        setSelected(selectedNumber);
    }

    return (
        <>
            <PageStyle >
                <ProfileListSection renderChange={renderChange} selected={selected} />
                <div className='render_component'>
                    <render.component />

                </div>
            </PageStyle>
        </>
    )
}
