import React from 'react'
import Card from './Card'

// Functional component responsible for rendering cards related to All categories
const All = () => {
    // Data array containing information for each card
    const data = [
        // Data objects for each card
        {
            url: require('./images/img1.webp'),
            title: 'Human-Computer Interaction in UI/UX: A Guide on Effective Designing',
            description: "Believe it or not, approximately 52% of Indians have increased usage of digital devices",
            date: '29 January 2024 . No Comments'
        },
        {
            url: require('./images/img2.webp'), 
            title: 'Best Project Ideas for Robotic Applications – Including All 3 Levels [2024]',
            description: 'Real-world projects are one of the important things that you have to do to improve your skillset and resume. ',
            date: '26 October 2023 . No Comments'
        },
        {
            url:  require('./images/img3.webp'),
            title: 'Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions',
            description: "Augmented Reality (AR) is a tool that adds digital images and information to the real",
            date: '5 February 2024 . No Comments'
        },
        {
            url: require('./images/img4.webp'),
            title: 'Top Full Stack Development Trends for 2024: What to Expect',
            description: 'IIn the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full',
            date: '9 February 2024 . No Comments'
        },
        {
            url: require('./images/img5.webp'),
            title: 'Master JavaScript Frontend Roadmap: From Novice to Expert [2024]',
            description: 'Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?',
            date: '2 February 2024 . No Comments'
        },
        {
            url: require('./images/img6.webp'),
            title: 'A Complete Guide on Backend Development: Roles, Responsibilities, Skills, and Salary [2024]',
            description: 'Whether you’re penning your next bestseller, crafting an engaging blog post, or just jotting down',
            date: '8 February 2024 . No Comments'
        },
        {
            url:require('./images/img7.webp'),
            title: 'What does a Front End Developer do? A Complete Guide',
            description: 'A Front end developer is someone who makes websites look great and work well for',
            date: '8 February 2024 . No Comments'
        },
        {
            url:require('./images/img8.webp'),
            title: 'Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]',
            description: 'Does waking up to the news of mass layoffs every morning make you anxious about',
            date: '22 January 2024 . No Comments'
        },
        {
            url: require('./images/img9.webp'),
            title: 'A Comprehensive Guide to HTML and CSS Roadmap [2024]',
            description: 'One of the constant things that’s been trending since the rise of the internet is',
            date: '20 January 2024 . No Comments'
        },
        {
            url: require('./images/img10.webp'),
            title: 'What is Heuristic Evaluation? An Essential Guide [2024]',
            description: 'Have you ever wondered why some websites feel effortlessly intuitive, while others leave you lost',
            date: '22 January 2024 . No Comments'
        },
        {
            url: require('./images/img11.webp'),
            title: 'HA Complete Guide on Backend Development: Roles, Responsibilities, Skills [2024]',
            description: 'Websites are not only about colorful outlooks, fancy transitions, or eye-catching illustrations. These are the',
            date: '29 January 2024 . No Comments'
        },
        {
            url: require('./images/img12.webp'),
            title: 'Top 17 Best IoT Project Ideas in 2024',
            description: 'The Internet of Things, or IoT, is all about connecting everyday objects to the internet and skills',
            date: '30 January 2024. No Comments'
        }, {
            url: require('./images/img13.webp'),
            title: 'Top 1obs in Data Science in 2024',
            description: 'Are you someone who’s not interested in coding, but wants to get placed in tech to improve your skillset',
            date: '28 January 2024 . No Comments'
        },
        {
            url: require('./images/img14.webp'),
            title: 'Best Software Tools for Writing: Elevate Your Writing Skills',
            description: 'Whether you’re penning your next bestseller, crafting an engaging blog post, or just jotting down',
            date: '15 January 2024 . No Comments'
        },
        {
            url: require('./images/img15.webp'),
            title: 'Innovate or Stagnate: Comprehensive Generative AI Terms For Enthusiasts',
            description: 'Generative AI is essential in many fields today to help professionals survive in an era of swift technological advancements.',
            date: '10 January 2024 . No Comments'
        },
        {
            url: require('./images/img16.webp'),
            title: 'Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions',
            description: 'Augmented Reality (AR) is a tool that adds digital images and information to the real',
            date: '18 January 2024 . No Comments'
        },
        {
            url: require('./images/img17.webp'),
            title: 'Brand Storytelling in the Digital Age: Creating Compelling Content from Scratch',
            description: 'Having a personal brand is one thing, but learning to build and grow a sustainable. ',
            date: '8 January  2024 . No Comments'
        },

        {
            url: require('./images/img18.webp'),
            title: "Top 15 B2B Digital Marketing Strategies in 2024 [Updated]",
            description: "It was found that 89% of the B2B buyers research the products online while making the digital world",
            date: '3 February 2024 . No Comments'
        },

    ]
    return (

        <div className='allcardmapmargin'>
            <div className="allcardsmap">
                {/* Mapping through the data array to render cards */}
                {data.map((data, index) => (
                    <Card key={index} data={data} />
                ))}
            </div>
        </div>
    )
}

export default All