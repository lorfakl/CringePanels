function FeedbackFormEmbed()
{
    const formUrl = "https://forms.gle/pWJQsidGJaH6xAth8"

    return(
    <>
        <iframe className="" src={formUrl} height="800" width="600">
            This is text
        </iframe>
    </>
    )
}

export default FeedbackFormEmbed