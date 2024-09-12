import React from 'react'
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar'
import Inner from '../layouts/Inner'
import { SplitText } from '../components/SplitText'


export default function Home() {

    return (
        <>
            <Inner>
                <div className="flex flex-col">
                    <NavBar />
                    <div className="flex flex-col mx-auto mt-10 h-auto">
                        <div className='flex  mx-auto '>
                            <SplitText
                                delayNum={0} textSize='10em' textCol='black'
                            >
                                Unlock Insights
                            </SplitText>
                        </div>
                        <div className='flex mx-auto '>
                            <SplitText
                                delayNum={1.5} textSize='10em' textCol='black'
                            >
                                Your Tools. Your Agency.
                            </SplitText>
                        </div>
                        <div className='flex mx-auto '>
                            <SplitText
                                delayNum={2.8} textSize='2em' textCol='slate-500'
                            >
                                The future is looking for new insights from already existing tools.
                            </SplitText>
                        </div>
                        <motion.div
                            className="flex gap-10 mx-auto text-3xl pt-10"
                            initial={{
                                y: '1em',
                                opacity: 0
                            }}
                            animate={{
                                y: '0',
                                opacity: 1
                            }}
                            transition={{
                                duration: 1,
                                delay: 3.8
                            }}
                        >
                            <div className="bg-blue-700 hover:bg-blue-400 text-white px-10 py-2 items-center text-center rounded-full">
                                <p>Try Free</p>
                            </div>
                            <div className="bg-black hover:bg-slate-600 text-white px-10 py-2 items-center text-center rounded-full">
                                <p>Join the Waitlist</p>
                            </div>

                        </motion.div>
                    </div>
                    <motion.img
                        src="/images/im1.png"
                        className="mt-60 z-10 w-[80vw] mx-auto rounded-2xl hover:-translate-y-6 transition-transform border border-gray-950"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.2, duration: 1 }}
                    />
                    <div className="bg-black w-[98vw] h-[70vh] mx-auto rounded-lg -mt-[10em] -z-10 text-white">
                        <div className="grid grid-cols-2 mt-[20em] mx-60">
                            <div className="text-[5em] w-[70%]">
                                <p> Turn Everything Into An Opportunity</p>
                            </div>

                            <div className="text-2xl text-gray-400 flex items-end w-[70%] ">
                                <p> The ultimate platform for seamless data integration and AI model creation. Effortlessly connect your data from any source and train custom AI models tailored to your needs. </p>
                            </div>

                        </div>

                    </div>
                </div>
            </Inner>
        </>
    )
}