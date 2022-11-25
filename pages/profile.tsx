import { AddLocationSection, EditProfileSection, ProfileListSection } from '@/components/profile'
import React from 'react'
import { useState } from 'react';

export default function Profile() {
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
            <div style={{ padding: "100px", display: "flex" }}>
                <ProfileListSection renderChange={renderChange} />
                <render.component />
            </div>
        </>
    )
}
