"use client"
import React, { useEffect } from 'react'

export default function CustomScroll({ children }) {
    const scrollFactor = 0.5;
    /**
     * 
     * @param {WheelEvent} event 
     */
    const scrollHandler = (event) => {
        event.preventDefault();
        const scrollTopS = window.scrollY || document.documentElement.scrollTop;
        const newScrolled = scrollTopS + event.deltaY * scrollFactor;

        window.scrollTo({
            top:newScrolled,
            behavior:"smooth"
        })
    }
    useEffect(() => {
        window.addEventListener("wheel",scrollHandler);
        return () => window.removeEventListener("wheel",scrollHandler);
    }, []);

    return (
        <div>{children}</div>
    )
}
