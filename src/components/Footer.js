import React from 'react';

function Footer(props) {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-wrapper flow" style={{"--flow-spacer": 1.5 + "rem"}}>
                        <h2 className="created-with | fs-third-heading__neutral">
                            Created with
                        </h2>
                        <ul role="list" className="footer-list">
                            <li><a href="#">
                                <img src="/images/Background.png" alt=""/>
                                <h3 className="fs-third-heading__neutral">React</h3>
                                <p>Library for interfaces in JS</p>
                            </a></li>
                            <li><a href="#">
                                <img src="/images/Background.png" alt=""/>
                                <h3 className="fs-third-heading__neutral">Sass</h3>
                                <p>Framework for Css</p>
                            </a></li>
                        </ul>
                        <div className="copyright fw-medium fs-500">
                            <p>Some copyright text</p>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;