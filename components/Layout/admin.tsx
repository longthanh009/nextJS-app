import React from 'react'
import { LayoutProps } from '../../models/layout'

const AdminLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <h1>Layout Admin</h1>
            <main>
                {children}
            </main>
        </div>
    )
}

export default AdminLayout