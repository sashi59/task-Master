import React from 'react';
import { Link } from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
    return (

        <footer className="footer-distributed">

            <div className="footer-left">
                <Link to="/" style={{ textDecoration: 'none' }}>

                    <h3>Task Master</h3>
                </Link>

                <p className="footer-links">
                    <a href="" className="link-1">Home</a>

                    <a href="#">Task Assigner</a>

                    <a href="#">About</a>
                    <a href="#">Admin</a>

                </p>

                <p className="footer-company-name">Task Master © 2025</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>V.V Nagar, Anand</span> Near BVM College, 388120</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 9327934732</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">taskmaster@gmail.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>Dev Designers</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

                <div className="footer-icons">

                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                </div>

            </div>

        </footer>
    )
}

export default Footer;
