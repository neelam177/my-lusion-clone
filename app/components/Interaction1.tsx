"use client";

import React from "react";
import { motion } from "framer-motion";

const Interaction: React.FC<{ children: React.ReactNode; once?: boolean }> = ({ children, once = true }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once }}
        transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.1,
        }}
        >
            {children}
        </motion.div>
    );
};

export default Interaction;


