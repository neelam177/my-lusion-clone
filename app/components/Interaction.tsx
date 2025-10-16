"use client";

import React from "react";
import { motion } from "framer-motion";

const Interaction: React.FC<{ children: React.ReactNode; once?: boolean }> = ({ children, once = true }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ 
            opacity: 1, 
            y: 0,
            x: 190
        }}
        viewport={{ once }}
        transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.1,
            x: {
                delay: 0.6, // Start x animation after y animation completes
                duration: 0.5,
                ease: "easeInOut"
            }
        }}
        >
            {children}
        </motion.div>
    );
};

export default Interaction;