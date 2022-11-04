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
                            <li><a href="https://reactjs.org/">
                                <img src="/images/react-logo.png" alt=""/>
                                <h3 className="fs-third-heading__neutral">React</h3>
                                <p>Library for interfaces in JS</p>
                            </a></li>
                            <li><a href="https://sass-lang.com/">
                                <img src="/images/sass-logo.png" alt=""/>
                                <h3 className="fs-third-heading__neutral">Sass</h3>
                                <p>Framework for Css</p>
                            </a></li>
                        <li><a href="https://redux.js.org//">
                                <img src="/images/redux-logo.png" alt=""/>
                                <h3 className="fs-third-heading__neutral">Redux</h3>
                                <p>A Predictable State Container </p>
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