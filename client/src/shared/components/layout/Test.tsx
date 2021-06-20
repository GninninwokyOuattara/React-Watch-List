import React, { useEffect } from "react";

const Test = () => {
    const popInOut = (slide: Element) => {
        slide.classList.add("hidden");
        setTimeout(() => {
            slide.classList.remove("hidden");
        }, 1000);
    };

    const turnNext = (slide: Element) => {
        slide.classList.remove("translate-x-full");
        slide.classList.add("translate-x-0");
    };

    const turnLast = (slide: Element) => {
        slide.classList.remove("translate-x-0");
        slide.classList.add("-translate-x-full");
        setTimeout(() => {
            // slide.classList.add("invisible");
            slide.classList.remove("-translate-x-full");
            popInOut(slide);
            slide.classList.add("translate-x-full");
            // slide.classList.remove("invisible");
            // setTimeout(() => {
            //     slide.classList.remove("invisible");
            // }, 1000);
        }, 1000);
    };

    const slide = () => {
        let id: any;
        let slides = document.querySelectorAll(".slide");
        let active = document.querySelector(".slide.translate-x-0");
        id = setInterval(() => {
            if (active?.nextElementSibling) {
                turnLast(active);
                turnNext(active.nextElementSibling);
                active = active.nextElementSibling;

                // active.classList.remove("translate-x-0");
                // active.nextElementSibling.classList.remove("translate-x-full");
                // active.classList.add("-translate-x-full");
                // active.nextElementSibling.classList.add("translate-x-0");
                // active = active.nextElementSibling;
            } else {
                // clearInterval(id);
                turnLast(slides[2]);
                turnNext(slides[0]);
                active = slides[0];

                // resetSlide();
            }
        }, 5000);
    };

    const resetSlide = () => {
        let slides = document.querySelectorAll(".slide");
        slides[0].classList.remove("-translate-x-full");
        slides[1].classList.remove("-translate-x-full");
        slides[1].classList.add("hidden", "translate-x-full");
        slides[0].classList.add("hidden", "translate-x-full");
        setTimeout(() => {
            slides[1].classList.remove("hidden");
            slides[0].classList.remove("hidden");
            // lastSlide();
        }, 500);
    };

    const lastSlide = () => {
        let slides = document.querySelectorAll(".slide");
        slides[2].classList.remove("translate-x-0");
        slides[0].classList.remove("translate-x-full");
        slides[2].classList.add("-translate-x-full");
        slides[0].classList.add("translate-x-0");
    };

    useEffect(() => {
        slide();

        //     let id : any

        //     let slides = document.querySelectorAll(".slide");
        //     let activeSlide = document.querySelector(".slide.translate-x-0");
        //     let prev: Element;
        //     id = setInterval(() => {
        //         if (activeSlide) {
        //             if (prev) {
        //                 // Place previous slide to the right

        //                 prev.classList.remove("-translate-x-full");
        //                 prev.classList.add("translate-x-full");
        //                 // setTimeout(() => {
        //                 //     prev.classList.remove("hidden");
        //                 // }, 2000);
        //             }
        //             activeSlide.classList.remove("translate-x-0");
        //             activeSlide.classList.add("-translate-x-full");
        //             prev = activeSlide;
        //             let nextSlide = activeSlide.nextElementSibling;
        //             if (nextSlide) {
        //                 nextSlide.classList.remove("translate-x-full");

        //                 nextSlide.classList.add("translate-x-0");
        //                 activeSlide = nextSlide;
        //             } else {
        //                 let newSlide = document.querySelector(
        //                     ".slide.translate-x-full"
        //                 );
        //                 newSlide?.classList.remove("translate-x-full");
        //                 newSlide?.classList.add("translate-x-0");
        //                 prev = activeSlide;
        //                 activeSlide = newSlide;
        //             }
        //         }
        //     }, 2000);

        //     return () => {
        //         clearInterval(id);
        //     };
        // }, []);

        // useEffect(() => {
        //     let id = setTimeout(function () {
        //         let activeSlide = document.querySelector(".slide.translate-x-0");
        //         if (activeSlide) {
        //             activeSlide.classList.remove("translate-x-0");
        //             activeSlide.classList.add("-translate-x-full");
        //             let nextSlide = activeSlide.nextElementSibling;
        //             if (nextSlide) {
        //                 nextSlide.classList.remove("translate-x-full");
        //                 nextSlide.classList.add("translate-x-0");
        //             }
        //         }
        //     }, 3000);

        // return () => {
        //     clearTimeout(id);
        // };
    }, []);

    return (
        <React.Fragment>
            <div className="container flex h-screen w-screen items-center justify-center ">
                <div className="box h-32 w-32 border-2 border-black relative ">
                    <div className="slide absolute w-full h-full bg-green-500 transition-all ease-in-out duration-1000 transform translate-x-0">
                        A
                    </div>
                    <div className="slide absolute w-full h-full bg-red-500 transition-all ease-in-out duration-1000 transform translate-x-full z-10">
                        B
                    </div>
                    <div className="slide absolute w-full h-full bg-blue-500 transition-all ease-in-out duration-1000 transform translate-x-full">
                        C
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Test;
