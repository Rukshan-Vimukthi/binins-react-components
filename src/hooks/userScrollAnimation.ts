import { useEffect, useRef } from "react";

export function useScrollAnimation(){
    const elements = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((elements) => {
            elements.forEach((element) => {
                if (element.isIntersecting){
                    element.target.classList.add("show");
                    observer.unobserve(element.target);
                }
            });
        }, {threshold: 0.1});

        elements.current.forEach((element) => {
            observer.observe(element);
        });
        
    }, []);


    const addToRef = (element: HTMLElement) => {
        if (element && !elements.current.includes(element)){
            elements.current.push(element);
        }
    }

    return addToRef;
}