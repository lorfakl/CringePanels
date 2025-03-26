import { Link } from 'react-router';
import PanelCarousel from './PanelCarousel';

function PanelHistory(){

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

    return(<>
        {/** 
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Panel History and Gallery</h1>
            <PanelCarousel images={carouselImages} interval={4000} />
        </div>
        **/}

        <header className="bg-neutral">
            <h1 className='text-center font-bold underline text-3xl lg:text-7xl'>Convention History</h1>
        </header>
        
        <ul className="bg-neutral p-8 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                    {displayCheckSvg()}
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">Traidcon 2023</time>
                    <div className="text-lg font-bold">What Releasing a Game is like...for NORMAL people</div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    {displayCheckSvg()}
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">Animazement 2023</time>
                    <div className="text-lg font-bold">What Releasing a Game is like...for NORMAL people</div>
                    Had Yokai Chat's <a href="https://www.instagram.com/pen.saga/" className="underline underline-offset-4">Artistic director</a> on stage for this one
                    <div className="text-lg font-bold">From the mud, like the rest of us(Retired)</div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    {displayCheckSvg()}
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">Ichibancon 2024</time>
                    <div className="text-lg font-bold">What Releasing a Game is like...for NORMAL people</div>
                    <div className="text-lg font-bold">It is not Dubs that are cringe! But Anime itself!</div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    {displayCheckSvg()}
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">Bonzaicon 2024</time>
                    <div className="text-lg font-bold">What Releasing a Game is like...for NORMAL people</div>
                    <div className="text-lg font-bold">It is not Dubs that are cringe! But Anime itself!</div>
                    <div className="text-lg font-bold">Cultured Manga Tag Tierlist (18+)</div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    {displayCheckSvg()}
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">Traidcon 2024</time>
                    <div className="text-lg font-bold">It is not Dubs that are cringe! But Anime itself!</div>
                    <div className="text-lg font-bold">Cultured Manga Tag Tierlist (18+)</div>
                </div>
                <hr/>
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    {displayCheckSvg()}
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">Animazement 2024</time>
                    <div className="text-lg font-bold">It Is Not Dubs That Are Cringe! But Anime Itself!</div>
                    <div className="text-lg font-bold">Cultured Manga Tag Tierlist (18+)</div>
                </div>
                <hr/>
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    {displayCheckSvg()}
                </div>
                <div className="timeline-start mb-10 md:text-end">
                    <time className="font-mono italic">Blerdcon 2024</time>
                    <div className="text-lg font-bold">Anime Arena: Battle of the Fans!</div>
                </div>
                <hr/>
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                    {displayCheckSvg()}
                </div>
                <div className="timeline-end mb-10">
                    <time className="font-mono italic">Ichibancon 2025</time>
                    <div className="text-lg font-bold">Yelling About LitRPGs For An Hour</div>
                    <div className="text-lg font-bold">Cultured Manga Tag Tierlist (18+)</div>
                </div>
            </li>
        </ul>
    </>)
}

export default PanelHistory