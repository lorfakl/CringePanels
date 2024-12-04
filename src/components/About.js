function About()
{
    return(
    <>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Meet the Host</h1>
                    <p className="py-6">
                        I am Kaleb Jahad, the main host of any Anti-Cringe Panel Production. I have a team of helpers that I would be utter ineffectual without but they dont want to be on this page.
                        Anyway, based out of Charlotte North Carolina, I started doing panels in 2022 with a random panel about video game development. Since then, I have been trying to do as many panels as possible in the Southeast region. 
                        Because ever since my first Ichibancon 2014 I've loved the panels, literally my favorite thing so Im just trying to put on productions in which people have a good time. 
                    </p>
                    <button className="btn btn-primary">Contact Me!</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default About