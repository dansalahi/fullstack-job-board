import React, { ReactElement, useEffect, useRef } from 'react'
import classes from './smoothScrool.module.css'
import useWindowSize from '../../../hooks/useWindowSize'

type SmoothScrollProps = {
    children: ReactElement
}

export default function SmoothScroll({ children }: SmoothScrollProps) {


    const windowSize = useWindowSize()
    const scrollingContainerRef = useRef<any>()
    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
    };

    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height]);

    const setBodyHeight = () => {
        document.body.style.height = `${scrollingContainerRef.current.getBoundingClientRect().height
            }px`;
    };


    useEffect(() => {
        requestAnimationFrame(() => smoothScrollingHandler());
    }, []);


    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current - data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;

        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;

        // Recursive call
        requestAnimationFrame(() => smoothScrollingHandler());
    };



    return (
        <div className={classes.parent}>
            <div ref={scrollingContainerRef}>
                {children}
            </div>
        </div>
    )
}
