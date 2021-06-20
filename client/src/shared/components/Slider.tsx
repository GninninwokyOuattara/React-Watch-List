import React, { useEffect } from "react";

const Slider = () => {
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
            slide.classList.remove("-translate-x-full");
            popInOut(slide);
            slide.classList.add("translate-x-full");
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

    useEffect(() => {
        // let id = setTimeout(function () {
        //     let activeSlide = document.querySelector(".slide.translate-x-0");
        //     if (activeSlide) {
        //         activeSlide.classList.remove("translate-x-0");
        //         activeSlide.classList.add("-translate-x-full");
        //         let nextSlide = activeSlide.nextElementSibling;
        //         if (nextSlide) {
        //             nextSlide.classList.remove("translate-x-full");
        //             nextSlide.classList.add("translate-x-0");
        //         }
        //     }
        // }, 3000);

        // return () => {
        //     clearTimeout(id);
        // };
        slide();
    }, []);

    return (
        <div className="fixed w-screen h-screen">
            <img
                src="https://wallpaperaccess.com/full/2776321.jpg"
                alt=""
                className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide"
            />
            <img
                src={
                    "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f3fe777f3136ce799619f30%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1393%26cropY1%3D45%26cropY2%3D829"
                }
                alt=""
                className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide"
            />
            <img
                src={
                    "https://movies.sterkinekor.co.za/CDN/media/entity/get/FilmTitleGraphic/HO00002159?referenceScheme=HeadOffice&allowPlaceHolder=true"
                }
                alt=""
                className="absolute inset-0 w-screen h-screen bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide"
            />
        </div>
    );
};

export default Slider;
