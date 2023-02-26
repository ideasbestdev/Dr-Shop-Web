import { AddLocationSection, EditProfileSection, ProfileListSection } from '@/components/profile'
import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

export default function Profile() {
    const PageStyle = styled.div`
        padding: 100px;
        display: flex;
        .table_container{
            padding: 0;
        }
  `;

    const [render, setRender] = useState({
        component: EditProfileSection
    });

    function renderChange(component: any): void {
        render.component = component;
        const newRender = Object.assign({}, render);
        setRender(newRender);
    }

    return (
        <>
            <PageStyle >
                <ProfileListSection renderChange={renderChange} />
                <render.component />
            </PageStyle>
        </>
    )
}
