import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Home() {
    return <>
    
        <Link to="products">product</Link>
        <Outlet />
    </>
}
