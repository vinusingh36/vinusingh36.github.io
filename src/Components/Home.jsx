import resume from '../PDF/vineetsingh.pdf'
import vineet_img from '../Data/hero.json'
import Typed from "typed.js"
import { useEffect, useRef } from 'react'
import { MdDownload } from "react-icons/md";
import { IoEye } from "react-icons/io5";


const Home = () => {

    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                "Welcome to my Profile",
                "My name is Vineet Singh",
                "I'm a Fontend Web Developer(React)",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false
        }

        const typed = new Typed(typedRef.current, options)

        return () => {
            typed.destroy();
        }
    }, [])

    return (
        <div>
            <div className="container home" id="home">
                <div className="left"
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                >
                    <h1 ref={typedRef}> </h1>

                    <a href={resume} download="vineetsingh-resume.pdf" className="btn btn-outline-warning my-3 mx-4">
                        Download Resume <MdDownload />
                    </a>
                    <a href="https://drive.google.com/file/d/1m8f8TrGJTG9tyXazIZ_mudaSbxpkssrL/view" target="_blank" className="btn btn-outline-warning my-3">
                        View Resume <IoEye />
                    </a>
                </div>
                <div className="right">
                    <div className="img"
                        data-aos="fade-up-left"
                        data-aos-duration="1000"
                    >
                        <img src={`/Assets/${vineet_img.imgSrc}`} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;