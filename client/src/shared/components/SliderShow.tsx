import React, { useEffect } from "react";

const SliderShow = () => {
    useEffect(() => {
        let id = setTimeout(function () {
            let activeSlide = document.querySelector(".slide.translate-x-0");
            if (activeSlide) {
                activeSlide.classList.remove("translate-x-0");
                activeSlide.classList.add("-translate-x-full");
                let nextSlide = activeSlide.nextElementSibling;
                if (nextSlide) {
                    nextSlide.classList.remove("translate-x-full");
                    nextSlide.classList.add("translate-x-0");
                }
            }
        }, 3000);

        return () => {
            clearTimeout(id);
        };
    }, []);

    return (
        <div className="fixed w-screen h-screen">
            <div className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">
                Hello
            </div>
            <div className="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">
                There
            </div>
        </div>
    );
};

export default SliderShow;
