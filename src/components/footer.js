import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4 className="footer-linkedin"> <a href="https://www.linkedin.com/in/miguelmontenegro100/">LinkedIn</a></h4>
                            <ul className="list-unstyled">
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4 className="footer-github"> <a href="https://github.com/Darkunitx">Github</a></h4>
                            <ul className="list-unstyled">
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4 className="footer-facebook"><a href="https://www.facebook.com/AmazingGoku">Facebook</a></h4>
                            <ul className="list-unstyled">
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} MIGUEL MONTENEGRO PORTFOLIO
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--secondary-color);
        padding-top: 3rem;
        color: var(--primary-color);
    }
    
    .footer-bottom {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    .footer-facebook a{
        color: var(--primary-color);
    }

    .footer-facebook a:hover {
        color: var(--tertiary-color);
    }

    .footer-linkedin a{
        color: var(--primary-color);
    }

    .footer-linkedin a:hover {
        color: var(--seventh-color);
    }

    .footer-github a{
        color: var(--primary-color);
    }

    .footer-github a:hover {
        color: var(--sixth-color);
    }
        `;