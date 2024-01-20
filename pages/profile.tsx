import { AddLocationSection, EditProfileSection, ProfileListSection } from '@/components/profile'
import OrderList from '@/components/profile/OrderList';
import { useRouter } from 'next/router';
import React from 'react'
import { useState, useEffect } from 'react';
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

    function removeLocationHash() {
        var noHashURL = window.location.href.replace(/#.*$/, '');
        window.history.replaceState('', document.title, noHashURL)
    }

    const router = useRouter();
    const selectedSection = router.asPath.split('#')[1];


    const [render, setRender] = useState({
        component: selectedSection == "order" ? OrderList : EditProfileSection
    });
    const [selected, setSelected] = useState(selectedSection == "order" ? 2 : 1);

    function renderChange(component: any, selectedNumber: number): void {
        render.component = component;
        const newRender = Object.assign({}, render);
        setRender(newRender);
        setSelected(selectedNumber);
    }

    useEffect(function () {
        removeLocationHash();
    }, [])

    useEffect(function () {
        const selectedSection = router.asPath.split('#')[1];
        setRender({
            component: selectedSection == "order" ? OrderList : EditProfileSection
        });
        setSelected(selectedSection == "order" ? 2 : 1);
        removeLocationHash();
    }, [router])

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
