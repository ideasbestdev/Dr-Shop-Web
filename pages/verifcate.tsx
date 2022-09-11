import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { PageUrls, TOKEN_KEY_NAME } from '@/utils/index';

function verifcate() {

    const router = useRouter();

    useEffect(() => {
        if (router.query.email != undefined) {
            if (localStorage.getItem(TOKEN_KEY_NAME)) {
                alert(localStorage.getItem(TOKEN_KEY_NAME));
            }
            router.replace(PageUrls.HOME);

        }
    }, [router.query])


    return (
        <div></div>
    )
}

export default verifcate