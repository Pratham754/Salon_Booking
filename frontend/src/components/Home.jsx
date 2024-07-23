import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div>

            <section className="welcome">
                <h1 className="wc">Welcome Aboard !</h1>
                <p>Welcome To The Luxury Experience</p>
            </section>

            <div className="info">
                <div className="infolist">
                    <ul>
                        <li><FontAwesomeIcon icon={faMap} />123 Maple Street,Springfield, IL 62701</li>
                        <li><FontAwesomeIcon icon={faPhone} />+91 9876543210</li>
                        <li><FontAwesomeIcon icon={faInstagram} /><a href="https://www.instagram.com/" >Instagram</a></li>
                        <li><FontAwesomeIcon icon={faEnvelope} />Mail Us</li>
                    </ul>
                </div>
            </div>

            <div className="bot">
                <h6>
                ©2024 HairExpert Salon All rights reserved. by Pratham Choudhary
                </h6>
            </div>

        </div>
    );
}

export default Home;
