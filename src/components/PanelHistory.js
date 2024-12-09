import { Link } from 'react-router';

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

    return(<>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                {displayCheckSvg()}
                </div>
                <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">Traidcon 2023</time>
                <div className="text-lg font-bold">What Releasing a Game is like...for NORMAL people</div>
                As a devloper by trade, my artist and I built a game together. A game that attempts to make learning Japanese more fun(Yokai Chat, Android only), so our first panel was going over the 
                process of game development, as non-famous or rich normal people. Spoiler Alert: Its HARD!
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
                The idea for this panel was to debunk the self-made shounen propaganda, in which nepo-baby characters like Naruto are put on trial. 
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
                Finally doing a panel at Ichibancon
                <div className="text-lg font-bold">It is not Dubs that are cringe! But Anime itself!</div>
                People don't hate dubs because they are "cringe", they hate dubs because anime is, and in english its right there in your face
                
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
                I was flying solo for this panel, had to deal with my first actual heckler
                <div className="text-lg font-bold">Cultured Manga Tag Tierlist (18+)</div>
                Went to the UPS store and vinyl printed a GIANT tierlist banner and then had people engage in vigorious debate regarding which tag belongs where. 
                Very humbling doing this panel to literally 4, we had a good time though
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
                This room was absolutely paaaacked, it was this panel that introduced the <Link to="Feedback" className="underline underline-offset-4">Feedback Survery</Link>
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
                
                <div className="text-lg font-bold">Cultured Manga Tags Tierlist</div>
                The Apple Watch is a line 
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
                This one did not go well, but this panel has been completely retooled and I'm ready to give it a second go 
                </div>
                
            </li>
        </ul>
    </>)
}

export default PanelHistory