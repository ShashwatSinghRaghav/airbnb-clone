import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
                    title="Outdoor getaways"
                    description="House near wild life"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                    title="Uniques Stays"
                    description="House on water"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
                    title="Entire House"
                    description="Full proper house"
                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
                    title="Outdoor getaways"
                    description="House near wild life"
                    price="$ 18.0"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                    title="Uniques Stays"
                    description="House on water"
                    price="$ 18.0"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
                    title="Entire House"
                    description="Full proper house"
                    price="$ 18.0"
                />
            </div>
           
        </div>
    )
}

export default Home
