import { useEffect } from "react";

export const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    const handleTouchStart = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            document.addEventListener("touchend", handleTouchEnd);
        }
    };

    const handleTouchEnd = () => {
        callback();
        document.removeEventListener("touchend", handleTouchEnd);
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        document.addEventListener("touchstart", handleTouchStart);

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    });
};



