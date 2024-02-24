import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'


export default function Home() {
    return <>
        <Outlet />
    </>
}