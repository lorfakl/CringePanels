import { useState } from "react";
function FeedbackFormEmbed()
{
    const [loading, setLoading] = useState(true)
    const formUrl = "https://forms.gle/pWJQsidGJaH6xAth8"

    function handleIframeLoad()
    {
        console.log("This is a hidden console log, did you find it?")
        setLoading(false)
    }

    return(
    <>
    {
        loading? 
        <>
            <span className="loading loading-spinner loading-lg scale-150 place-self-center"></span>
        </>
        :
        null
        
    }
    <iframe className="" src={formUrl} height="800" width="600" onLoad={handleIframeLoad}>
            This is text
    </iframe>
    
        
    </>
    )
}

export default FeedbackFormEmbed