import "../styles/About.css";

const About = ({ description }) => {
    return (
        <div id="aboutBack">
            <div id="aboutTextField">
                <p className="h3">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default About;