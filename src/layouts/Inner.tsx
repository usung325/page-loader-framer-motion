import { motion } from 'framer-motion'

export default function Inner({ children }) {

    const scaleProps = {
        initial: {
            scale: 1,
        },

        animate: {
            scale: 1,
            opacity: 1,
        },

        exit: {
            scale: 0.9,
            opacity: 0.5,
            transition: {
                duration: 1
            }
        }
    }

    const opacityProps = {
        initial: {
            opacity: 0,
        },

        animate: {
            opacity: 1,
        },

        exit: {
            opacity: 0.9,
            transition: {
                duration: 1
            }
        }
    }

    const slideProps = {
        initial: {
            top: '100vh'
        },

        animate: {
            top: '100vh'
        },
        exit: {
            top: '0'
        },

        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    }

    return (
        <>
            <div className="innerPage bg-black">
                <motion.div {...slideProps} className="fixed top-0 left-0 w-[100vw] h-[100vh] z-10 bg-white" />
                <motion.div {...scaleProps} className="h-screen bg-white">
                    <motion.div {...opacityProps} className="">
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}