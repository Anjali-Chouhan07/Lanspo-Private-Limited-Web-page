import { useEffect, useState } from 'react'

const slides = [
    {
        image: 'images/sean-pollock-PhYq704ffdA-unsplash.jpg',
        title: 'Real Estate',
        text: 'Smart property marketplace for buyers, sellers, and vendors.',
    },
    {
        image: 'images/josh-beech-tXJhAFVOHVk-unsplash.jpg',
        title: 'GolaEV',
        text: 'Next-generation electric two-wheelers for the future of mobility.',
    },
    {
        image: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&w=1920&q=80',
        title: 'MG Nidhi Bank',
        text: 'Financial solutions for MSMEs and small businesses.',
    },
    {
        image: 'images/richard-t-yovhXPl8V1M-unsplash.jpg',
        title: 'Agriculture',
        text: 'Exporting dehydrated and powdered agri-products worldwide.',
    },
]

const Hero = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 3000) 
        return () => clearInterval(interval)
    }, [])

    const renderTitle = (title) => {
        if (title === 'Real Estate') {
            return (
                <>
                    <span className="text-white">LANSPO | </span>
                    <span className="text-blue-gradient">R</span>eal{' '}
                    <span className="text-blue-gradient">E</span>state
                </>
            )
        } else if (title === 'GolaEV') {
            return (
                <>
                    <span className="text-white">LANSPO | </span>
                    <span className="text-blue-gradient">G</span>ola
                    <span className="text-blue-gradient">E</span>V
                </>
            )
        } else if (title === 'MG Nidhi Bank') {
            return (
                <>
                    <span className="text-white">LANSPO | </span>
                    <span className="text-blue-gradient">M</span>G{' '}
                    <span className="text-blue-gradient">N</span>idhi{' '}
                    <span className="text-blue-gradient">B</span>ank
                </>
            )
        } else if (title === 'Agriculture') {
            return (
                <>
                    <span className="text-white">LANSPO | </span>
                    <span className="text-blue-gradient">A</span>griculture
                </>
            )
        }
        return title
    }

    return (
        <section id="home" className="relative h-screen overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                        index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                ></div>
            ))}

            {/* Text Overlay */}
            <div className="relative z-10 flex h-full items-center justify-center text-center text-white bg-black/40">
                <div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        {renderTitle(slides[current].title)}
                    </h1>
                    
                    <p className="text-base md:text-xl text-gray-200 font-medium tracking-wide leading-relaxed tracking-wide">
                        {slides[current].text}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero