import React from 'react'
import { LayoutProps } from '../../models/layout'
import Footer from '../Footer'
import Hearder from '../Hearder'

const LayoutPageWeb = ({ children } : LayoutProps) => {
    return (
        <>
            <Hearder />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default LayoutPageWeb