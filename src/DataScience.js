import React from 'react'
import Card from './Card'
// Functional component responsible for rendering cards related to DataScience categories
const DataScience = () => {
    // Data array containing information for each card
    const data = [
        // Data objects for each card
        {
            url: require('./images/dimg1.png'),
            title: "Neural Network Skills to Succeed in Data Science",
            description: "If you’re here, then you already understand what a huge grasp data scientists have in the tech world now and ",
            date: '28 February 2024 . No Comments'
        },
        {
            url: require('./images/dimg2.webp'),
            title: "10 Best Data Science Frameworks in 2024",
            description: "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks is helpful in many ways.",
            date: '10 February 2024 . No Comments'
        },
        {
            url: require('./images/dimg3.webp'),
            title: "12 Real-World Data Science Examples: Power Of Data Science",
            description: "Have you ever wondered how some of the world’s most companies seem to know exactly what ",
            date: '09 February 2024 . No Comments'
        },
        {
            url: require('./images/dimg4.jpg'),
            title: "Best Way to Learn Data Science in 2024",
            description: "Have you ever wondered what it takes to become a data scientist? Is unraveling complex patterns and shaping",
            date: '28 February 2024 . No Comments'
        },
        {
            url: require('./images/dimg5.jpg'),
            title: "A Complete Data Scientist Roadmap for Beginners",
            description: "Do you want to pursue a career in Data Science? If so then you must’ve been confused by the abundance",
            date: '18 February 2024 . No Comments'
        },
        {
            url: require('./images/dimg6.jpg'),
            title: "6 Tips & Tricks to Crack Data Science Interviews",
            description: "Data science is one of the world’s top lucrative career choices. How hard it is to crack Data Science Interviews",
            date: '13 February 2024 . No Comments'
        },
        {
            url: require('./images/dimg7.png'),
            title: "VMware vs VirtualBox: Picking the Right Hypervisor for Virtualisation",
            description: "In today’s fast-paced world, where technology is evolving at an unprecedented rate, virtualization has",
            date: '08 February 2024 . No Comments'
        },
        {
            url: require('./images/dimg8.webp'),
            title: "A Profound Data Scientist’s Career Path 2024",
            description: "All kinds of organizations ranging from retail to government, to healthcare heavily depend on data scientists",
            date: '18 February 2024 . No Comments'
        },
        {
            url: require('./images/dimg9.webp'),
            title: "The Different Career Paths: Data Scientists Role",
            description: "Data science is an extensive field and beholds a range of different paths and career options. It is natural to be overwhelmed ",
            date: '08 February 2024 . No Comments'
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

export default DataScience