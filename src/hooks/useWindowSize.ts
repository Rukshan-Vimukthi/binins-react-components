import { useEffect, useState } from "react";

export function useWindowSize(){
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const updateDimension = () => {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", updateDimension);

        return () => window.removeEventListener("resize", updateDimension)
    }, []);

    return width;
}