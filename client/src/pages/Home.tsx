import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../shared/components/navigation/NavigationBar";
import Slider from "../shared/components/Slider";
import SliderShow from "../shared/components/SliderShow";

const Home = () => {
    return (
        <React.Fragment>
            {/* <SliderShow /> */}
            <Slider />

            <NavigationBar fixed />
        </React.Fragment>
    );
};

export default Home;
