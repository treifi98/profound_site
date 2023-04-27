import { useState, useEffect, useRef } from 'react';


export default function useComponentVisible(initialIsVisible:boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const componentRef = useRef(null);

    const handleClickOutside = (event) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
        else{

            setIsComponentVisible(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { componentRef, isComponentVisible, setIsComponentVisible };
}
