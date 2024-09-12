import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="w-[100vw] flex justify-between px-10 py-5 text-2xl items-center text-center">

            <div className="flex gap-10">
                <div className="text-black">
                    <NavLink to="/">
                        <p> InSider </p>
                    </NavLink>
                </div>
                <div className="text-slate-400">
                    <NavLink to="/">
                        <p> Pricing </p>
                    </NavLink>
                </div>
                <div className="text-slate-400">
                    <NavLink to="/profile">
                        <p> About </p>
                    </NavLink>
                </div>
                <div className="text-slate-400">
                    <NavLink to="/profile">
                        <p> Help Center </p>
                    </NavLink>
                </div>
            </div>

            <div className="flex bg-black text-white px-10 py-2 rounded-lg items-center text-center">
                <NavLink to="/profile" >
                    <p>Get Started</p>
                </NavLink>
            </div>

        </div>
    )
}