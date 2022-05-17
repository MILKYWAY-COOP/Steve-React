import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Card from './components/Card'
import Ngong from './components/images/ngong.jpg'

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
    return (
        <>
            <Navbar />
            <Card
                img = {Ngong}
                rating={5.0}
                viewCount={6}
                country="Kenya"
                title="Visit Ngong with Stephen Muchendu"
                price= {100}
            />
        </>
    )
}
