import React from 'react'
import Card from './Card'
// Functional component responsible for rendering cards related to Full Stack Development
const FullStackDevelopment = () => {
    // Data array containing information for each card
    const data = [
        {
            url: require('./images/fimg1.webp'),
            title: 'Top Skills To Become a Full-Stack Developer in 2024',
            description: 'Are you interested in becoming a great full-stack developer? If so, then you’re at the right place! to learn everything about Fullstack',
            date: '06 February 2024 . No Comments'
        },
        {
            url: require('./images/fimg2.webp'),
            title: 'Top 10 Tools Every Full-Stack Developer Should Master in 2024',
            description: 'As a full-stack developer, having the right set of tools is crucial for your success. In the ever-evolving www.',
            date: '22 January 2024 . No Comments'
        },
        {
            url: require('./images/fimg3.jpg'),
            title: 'Best Full-Stack Development Project Ideas in 2024',
            description: 'When you give your resume to any potential recruiter, the first thing that they check apart from your education.',
            date: '15 January 2024 . No Comments'
        },
        {
            url: require('./images/fimg4.webp'),
            title: 'The Ultimate Guide to Real-World Full-Stack Development Applications',
            description: 'Full-stack development has become increasingly popular in recent years, with companies seeking professionals',
            date: '15 January 2024 . No Comments'
        },
        {
            url: require('./images/fimg5.jpg'),
            title: 'Top 10 Full-Stack Developer Frameworks in 2024',
            description: 'In the ever-evolving world of technology, the demand for full stack developers is at an all-time high. As ',
            date: '10 January 2024 . No Comments'
        },
        {
            url: require('./images/fimg6.jpg'),
            title: 'Best Web Development Roadmap for Beginners 2024',
            description: 'Web Development is a booming, high-paying, and indeed promising career in the IT industry, into which',
            date: '18 January 2024 . No Comments'
        },
        {
            url: require('./images/fimg7.webp'),
            title: 'Unlocking the Future: Top 5 Web Development Programming Languages in 2024',
            description: 'Are you curious about the best programming languages for building websites in 2024? It’s like picking the perfect',
            date: '09 January 2024 . No Comments'
        },
        {
            url: require('./images/fimg8.jpg'),
            title: 'The Future & Scope of Full-Stack Developers in India',
            description: 'Have you ever wondered about the future of full stack developers in India? These talented tech wizards possess',
            date: '29 January 2024 . No Comments'
        },
        {
            url: require('./images/fimg9.jpg'),
            title: 'Top Full Stack Development Webinars and Workshops',
            description: 'Are you keen to elevate your web development skills and master the art of Full Stack Development? There are ',
            date: '19 January 2024 . No Comments'
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

export default FullStackDevelopment