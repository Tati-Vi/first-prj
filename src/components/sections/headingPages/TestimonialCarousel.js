import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
import profile1 from "../../../assets/profile/profile-(1).jpeg";
import profile2 from "../../../assets/profile/profile-(2).jpeg";
import profile3 from "../../../assets/profile/profile-(3).jpeg";
import profile4 from "../../../assets/profile/profile-(4).jpeg";
import profile5 from "../../../assets/profile/profile-(5).jpeg";
import profile6 from "../../../assets/profile/profile-(6).jpeg";
import profile7 from "../../../assets/profile/profile-(7).jpeg";
import profile8 from "../../../assets/profile/profile-(8).jpeg";
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false} showThumbs={false}>
            <TestimonialCard  profileImg={profile1} name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard  profileImg={profile2} name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard  profileImg={profile3} name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard  profileImg={profile4} name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard  profileImg={profile5} name="Jim Reynor" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
            <TestimonialCard  profileImg={profile6} name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
            <TestimonialCard  profileImg={profile7} name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
            <TestimonialCard  profileImg={profile8} name="Jack Hu" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
             </Carousel>
    )
}