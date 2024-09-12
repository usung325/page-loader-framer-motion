import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface SplitTextProps {
    children: string,
    delayNum: number,
    textCol: string,
    textSize: string
}

export function SplitText({ children, delayNum, textCol, textSize }: SplitTextProps) {

    let words = children.split(' ')
    return words.map((word, i) => {
        return (
            <div className={`flex text-[${textSize}] text-${textCol}`}>
                <div
                    key={children + i}
                    style={{ display: 'inline-block', overflow: 'hidden' }}
                >
                    <motion.div
                        initial={{ y: '100%' }}
                        animate="visible"
                        variants={{
                            visible: i => ({
                                y: -5,
                                transition: {
                                    delay: 0.05 * i + delayNum,
                                    ease: [0.16, 1, 0.3, 1],
                                    duration: 1.5,
                                }
                            })
                        }}
                        style={{ display: 'inline-block', willChange: 'transform' }}
                        custom={i}
                    >
                        {word + (i !== words.length - 1 ? '\u00A0' : '')}
                    </motion.div>
                </div>
            </div>
        )
    })
}
