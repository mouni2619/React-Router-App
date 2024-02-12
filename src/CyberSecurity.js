import React from 'react'
import Card from './Card'
// Functional component responsible for rendering cards related to CyberSecurity categories
const CyberSecurity = () => {
    // Data array containing information for each card
    const data = [
        // Data objects for each card
        {
            url:require('./images/cimg1.webp'),
            title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
            description: 'Many people ask how important is coding for cybersecurity',
            date: '2 February 2024 . No Comments'
        },
        {
            url:require('./images/cimg2.jpg'),
            title: 'Top 7 Cyber Security Attacks in Real Life',
            description: 'Cyber security attacks are the type of actions that are designed to destroy, steal, modify, or disable information through',
            date: '12 February 2024 . No Comments'
        },
        {
            url:require('./images/cimg3.webp'),
            title: 'The Ultimate Cybersecurity Roadmap for Beginners',
            description: 'Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore, the annual cybersecurity',
            date: '21 February 2024 . No Comments'
        },
        {
            url:require('./images/cimg4.webp'),
            title: '8 Different Types of Cybersecurity and Threats Involved',
            description: 'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
            date: '08 February 2024 . No Comments'
        },
        {
            url:require('./images/cimg5.webp'),
            title: 'What Is Hacking? Types of Hacking & More',
            description: 'Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary.',
            date: '17 February 2024 . No Comments'
        },
        {
            url:require('./images/cimg6.jpeg'), 
            title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
            description: 'Look around today, you will witness that we are more reliant on technology and devices',
            date: '19 February 2024 . No Comments'
        },
        {
            url:require('./images/cimg7.webp'), 
            title: 'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
            description: 'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills are a prerequisite for success.',
            date: '20 February 2024 . No Comments'
        },
        {
            url:require('./images/cimg8.webp'), 
            title: 'How Is Cyber Security Important To Our Lives?',
            description: 'Cybersecurity is an exact solution that is sought either by a billionaire with a massive business or an innovator',
            date: '14 February 2024 . No Comments'
        },
        {
            url:require('./images/cimg9.webp'),
            title: 'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
            description: 'There is something fascinating about a lone hacker in black hoodies using a single system and their skills to ',
            date: '12 February 2024 . No Comments'
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

export default CyberSecurity