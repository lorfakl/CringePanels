import FeedbackFormEmbed from "./FeedbackFormEmbed";

function Feedback()
{
    return(
    <>
        <div className="w-full mx-auto p-16 gap-5 flex flex-col">
            <div className="mx-auto">
                <h1 className="text-5xl font-semibold underline decoration-4">Feedback Form</h1>
            </div>
            <div className="place-self-center" >
                <FeedbackFormEmbed/>
            </div>
            
        </div>
        
    </>
    );
}

export default Feedback