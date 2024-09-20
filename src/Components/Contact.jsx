import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Contact = () => {
    return (
        <>
            <div className="container contact" id="contact">
                <h1>
                    CONTACT ME
                </h1>
                <div className="contact-icon"
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                >
                    <div className="items">
                        <div>
                            <FaSquarePhone className="icons mx-2" />
                        </div>
                        <div>
                            9161822021
                        </div>
                    </div>
                    <div className="items">
                        <div>
                            <IoIosMailOpen className="icons" />
                        </div>
                        <div>
                            vineet.vinusingh36@gmail.com
                        </div>
                    </div>
                    <div className="items">
                        <div>
                            <FaSquareGithub className="icons" />
                        </div>
                        <div>
                            <a href="https://github.com/vinusingh36" target="_blank" >Github</a>
                        </div>
                    </div>
                    <div className="items">
                        <div>
                            <IoLogoLinkedin className="icons" />
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/vineet-singh-712220160/" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;