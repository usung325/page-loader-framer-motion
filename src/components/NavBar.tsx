import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="w-[100vw] flex justify-between px-10 py-5 text-2xl">
            <div>
                <NavLink to="/">
                    <p> Logo </p>
                </NavLink>
            </div>
            <div className="flex gap-10">
                <div>
                    <NavLink to="/">
                        <p> Home </p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/profile">
                        <p> Profile </p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}