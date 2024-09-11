import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import Inner from '../layouts/Inner'


export default function Home() {

    const animateProps = {
        animate: {
            opacity: 1,
            scale: 1
        },

        exit: {
            scale: 0.9
        },

        transition: {
            delay: 1,
        }
    }

    const transitionProps = {
        initial: {
            top: '100vh'
        },
        enter: {
            top: '0'
        },
        aniamte: {
            top: '100vh'
        },
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    }

    return (
        <>
            <Inner>
                <div className="flex flex-col ">
                    <NavBar />
                    <div className="flex mx-auto text-5xl mt-10">
                        <p> Yo this is the Home Page </p>
                    </div>
                </div>
            </Inner>
        </>
    )
}