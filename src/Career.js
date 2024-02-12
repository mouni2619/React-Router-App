import React from 'react'
import Card from './Card'
// Functional component responsible for rendering cards related to Career categories
const Career = () => {
    // Data array containing information for each card
    const data = [
        // Data objects for each card
        {
            url:require('./images/caimg1.webp'),
            title: 'Top 5 Product-Based Companies That Don’t Require Coding',
            description: 'Every one of us wants to work in top product-based companies, Right? But, Not everyone..',
            date: '12 February 2024 . No Comments'
        },
        {
            url:require('./images/caimg2.webp'),
            title: 'Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional',
            description: 'What if I say that blockchain is going to be the next big thing? And popular one of among all',
            date: '26 February 2024 . No Comments'
        },
        {
            url:require('./images/caimg3.webp'),
            title: 'A Compelling Ethical Hacker Resume: 10 Tips and Tricks to Follow',
            description: 'With the growing concerns of digital security increasing day by day, organizations turn to ethical',
            date: '05 February 2024 . No Comments'
        },
        {
            url:require('./images/caimg4.jpg'),
            title: 'Software Developer vs Software Engineer: Who is More Important in 2024?',
            description: 'In the tech world, two roles play an important role in deciding our digital life, software developer and software engineer.',
            date: '20 February 2024 . No Comments'
        },
        {
            url:require('./images/caimg5.webp'),
            title: 'Professional Civil Engineer Resume: A Guide To Attract Employers in 2024',
            description: 'The world is moving towards modernization leading to an increase in the popularity of civil engineering',
            date: '22 February 2024 . No Comments'
        },
        {
            url:require('./images/caimg6.webp'),
            title: 'Top IT Jobs for Commerce Students: A Lucrative Career Path',
            description: 'With the rapid advancement of technology, the demand for IT professionals has soared in recent years. This trend has ',
            date: '09 February 2024 . No Comments'
        },
        {
            url:require('./images/caimg7.jpg'),
            title: '5 Career Opportunities for Full Stack Development',
            description: 'Are you someone who loves coding and designing, and dreams of creating cool digital stuff? Ever wondered',
            date: '02 February 2024 . No Comments'
        },
        {
            url:require('./images/caimg8.png'),
            title: 'Best Product-Based Companies for AI Engineers in 2024',
            description: 'There was a time when AI was the future. Well, it has now become our',
            date: '18 February 2024 . No Comments'
        },
        {
            url:require('./images/caimg9.webp'),
            title: 'Best Product-based Companies for Digital Marketing Freshers [2024]',
            description: 'The world is going digital and so are the companies. The companies that we refer to here are B2C product',
            date: '17 February 2024 . No Comments'
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
    );
}

export default Career