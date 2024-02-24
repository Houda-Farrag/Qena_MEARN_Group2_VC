import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
    return <>
        <div className='bg-slate-600 flex-col justify-between p-7 m-auto text-red-600 font-bold'>
            <Link to={"/details-prod"} className='bg-green m-4'>product details</Link>
            <Link to={"/sell"} className='bg-green m-4'>sell</Link>
            <Link to={"/detailsproperty"} className='bg-green m-4'>detils properties</Link>

        </div>
    </>
}