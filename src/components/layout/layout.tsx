import React, { ReactNode } from 'react';

import Nav from "./nav";
import Footer from "./footer";

interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Nav />
                <main className="bg-black text-white">{children}</main>
            <Footer />
        </>
    )
}