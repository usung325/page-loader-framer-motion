import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import Inner from '../layouts/Inner'

export default function Profile() {

    const animateProps = {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
        }
    }
    return (
        <>
            {/* <motion.div {...animateProps} className="flex w-full">
                <div className="flex flex-col gap-10 mx-auto pt-10 text-2xl">
                    <div>
                        <Link to="/"> Home </Link>
                    </div>
                    <p>Hello this is the profile page</p>
                </div>
            </motion.div> */}
            <div className="bg-white">
                <Inner>
                    <div {...animateProps} className="flex flex-col">
                        <NavBar />
                        <div className="flex mx-auto text-5xl mt-10">
                            <p> Profile Page </p>
                        </div>
                    </div>
                </Inner>
            </div>
        </>
    )
}