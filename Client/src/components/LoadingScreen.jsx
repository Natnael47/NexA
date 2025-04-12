import { motion } from 'framer-motion';
import React from 'react';

const circleCount = 6;
const colors = ['#2A7EFC'];

const FancyLoader = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center">
            <div className="flex gap-3">
                {Array.from({ length: circleCount }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                        style={{ backgroundColor: colors[0] }}
                        animate={{
                            x: ['0%', '100%', '0%'],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 1.5,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            delay: index * 0.15,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default FancyLoader;
