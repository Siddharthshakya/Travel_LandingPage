import React from "react";
import Hero from './Hero';
import Icn from "./Icn";
import Destination from "./Destination";
import Category from "./Category";
import Booktrip from "./Booktrip";
import Subscribe from "./Subscribe";
import Testimonial from "./Testimonial";

function Homepage() {
    return (
        <>
            <Hero />
            <Category />
            <Destination />
            <Booktrip />
            <Testimonial />
            <Icn />
            <Subscribe />
        </>
    )
}

export default Homepage;