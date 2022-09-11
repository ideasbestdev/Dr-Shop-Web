import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect } from 'react';
import { auth, PageUrls } from '@/utils/index';

function verifcate() {

    const router = useRouter();

    useEffect(() => {
        if (router.query.email != undefined) {
            router.replace("/")
        }
    }, [router.query])


    return (
        <div></div>
    )
}

export default verifcate