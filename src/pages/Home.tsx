import React from 'react'
import { motion } from 'framer-motion'


export default function Home() {

    const animateProps = {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.9
        }
    }

    return (
        <>
            <motion.div {...animateProps} className="flex">
                <div className="flex mx-auto text-5xl mt-10">
                    <p> Yo this is the Home Page </p>
                </div>
            </motion.div>
        </>
    )
}