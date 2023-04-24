import "./About.css";

const About = ({ description }) => {
    return (
        <div className="aboutBack">
            <div className="aboutTextField">
                <p className="h3">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default About;