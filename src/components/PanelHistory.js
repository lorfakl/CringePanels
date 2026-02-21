import { Link } from 'react-router';
import React, { useState } from 'react';
import PanelCarousel from './PanelCarousel';

function PanelHistory(){

    const [sortOrder, setSortOrder] = useState('desc'); // 'asc' or 'desc'

    function displayCheckSvg()
    {
        return(<>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
        </>)
    }

    const carouselImages = [
        { src: '/images/myicon.png', label: 'Beautiful sunset' },
        { src: '/images/myicon.png', label: 'Mountain landscape' },
        { src: '/images/myicon.png', label: 'Ocean view' },
        { src: '/images/myicon.png', label: 'Forest trail' },
    ];

    const conventionHistory = [
        {
            startDate: new Date('2023-03-25'),
            name: 'Traidcon 2023',
            panels: [
                { title: 'What Releasing a Game is like...for NORMAL people' }
            ]
        },
        {
            startDate: new Date('2023-05-26'),
            name: 'Animazement 2023',
            panels: [
                { title: 'What Releasing a Game is like...for NORMAL people', description: "Had Yokai Chat's <a href=\"https://www.instagram.com/pen.saga/\" className=\"underline underline-offset-4\">Artistic director</a> on stage for this one" },
                { title: 'From the mud, like the rest of us(Retired)' }
            ]
        },
        {
            startDate: new Date('2024-01-05'),
            name: 'Ichibancon 2024',
            panels: [
                { title: 'What Releasing a Game is like...for NORMAL people' },
                { title: 'It is not Dubs that are cringe! But Anime itself!' }
            ]
        },
        {
            startDate: new Date('2024-02-16'),
            name: 'Bonzaicon 2024',
            panels: [
                { title: 'What Releasing a Game is like...for NORMAL people' },
                { title: 'It is not Dubs that are cringe! But Anime itself!' },
                { title: 'Cultured Manga Tag Tierlist (18+)' }
            ]
        },
        {
            startDate: new Date('2024-03-23'),
            name: 'Traidcon 2024',
            panels: [
                { title: 'It is not Dubs that are cringe! But Anime itself!' },
                { title: 'Cultured Manga Tag Tierlist (18+)' }
            ]
        },
        {
            startDate: new Date('2024-05-24'),
            name: 'Animazement 2024',
            panels: [
                { title: 'It Is Not Dubs That Are Cringe! But Anime Itself!' },
                { title: 'Cultured Manga Tag Tierlist (18+)' }
            ]
        },
        {
            startDate: new Date('2024-07-05'),
            name: 'Blerdcon 2024',
            panels: [
                { title: 'Anime Arena: Battle of the Fans!' }
            ]
        },
        {
            startDate: new Date('2025-01-03'),
            name: 'Ichibancon 2025',
            panels: [
                { title: 'Yelling About LitRPGs For An Hour' },
                { title: 'Cultured Manga Tag Tierlist (18+)' }
            ]
        },
        {
            startDate: new Date('2025-03-22'),
            name: 'Triadcon 2025',
            panels: [
                { title: 'Yelling About LitRPGs For An Hour' },
                { title: 'Cultured Manga Tag Tierlist (18+)' }
            ]
        },
        {
            startDate: new Date('2025-05-23'),
            name: 'Animazement 2025',
            panels: [
                { title: 'NEW! 2025 Anime Tierlist - Summer Edition' },
                { title: '4D Chess Tournament!!! - Smartest In Anime' },
                { title: 'STOP! Dont Tier 3 to that VTuber!! (Or do, Im not your mom, but she might be)' }
            ]
        },
        {
            startDate: new Date('2025-11-07'),
            name: 'Nekocon 2025',
            panels: [
                { title: 'NEW! 2025 Anime Tierlist - Winter Edition' },
                { title: 'The Meh-nificent Sixteen: A Tournament of Mid!' },
                { title: 'Dubs Are Objectively The Best Way To Watch Anime: Yes You\'re All Wrong' }
            ]
        },
        {
            startDate: new Date('2026-01-07'),
            name: 'Ichibancon 2026',
            panels: [
                { title: 'NEW! 2025 Anime Tierlist! All 128 Shows!?!? (No Shot!)' },
                { title: 'ULTRA Romantic Tournament Arc: Most Romantic Anime' }
            ]
        }
    ];

    const sortedHistory = [...conventionHistory].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.startDate - b.startDate;
        }
        return b.startDate - a.startDate;
    });

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return(<>
        {/** 
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Panel History and Gallery</h1>
            <PanelCarousel images={carouselImages} interval={4000} />
        </div>
        **/}

        <header className="bg-neutral p-4">
            <h1 className='text-center font-bold underline text-3xl lg:text-7xl'>Convention History</h1>
            <div className="text-center mt-4">
                <button onClick={toggleSortOrder} className="btn btn-primary">
                    Sort by Year ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                </button>
            </div>
        </header>
        
        <ul className="bg-neutral p-8 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {sortedHistory.map((event, index) => {
                const alignment = index % 2 === 0 ? 'start' : 'end';
                return (
                <li key={index}>
                    {index > 0 && <hr />}
                    <div className="timeline-middle">
                        {displayCheckSvg()}
                    </div>
                    <div className={`timeline-${alignment} mb-10 ${alignment === 'start' ? 'md:text-end' : ''}`}>
                        <time className="font-mono italic">{event.name}</time>
                        {event.panels.map((panel, panelIndex) => (
                            <div key={panelIndex}>
                                <div className="text-lg font-bold">{panel.title}</div>
                                {panel.description && <div dangerouslySetInnerHTML={{ __html: panel.description }} />}
                            </div>
                        ))}
                    </div>
                    {index < sortedHistory.length -1 && <hr/>}
                </li>
                );
            })}
        </ul>
    </>)
}

export default PanelHistory