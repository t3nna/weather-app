import './sass/main.scss';


function App() {
  return (
    <>
      <header className="primary-header">
        <div className="container">
          <div className="nav-wrapper">

            <div className="navigation-top">
              <p className="logo | fs-600 fw-medium">Logo</p>
              <div className="fs-500">
                <p>About</p>
                <p>Source</p>
              </div>
            </div>
            <div className="navigation-bottom">
              <h2 className="btn"><a href="#" className="fw-medium fs-500">Earth</a></h2>
              <h2 className="btn btn__active"><a href="#" className="fw-medium fs-500">Mars</a></h2>
            </div>
          </div>
        </div>

      </header>

      <main className="flow">
        <section className="search">
          <div className="container flow">
            <h1 className="fs-primary-heading">Weather App</h1>
            <form className="search-bar">
              <input type="text"/>
              <button type="submit" className="btn">
                Search
              </button>
            </form>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="weather">
              <div className="weather__properties">
                <div className="weather__temperature">
                  <p className="fs-300">Average temperature</p>
                  <h1 className="fs-primary-heading">12.9</h1>
                </div>
                <div className="weather__icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em"
                       width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"></path>
                  </svg>

                </div>

                <div className="flow | weather__description" style={{"--flow-spacer": .25 + "rem"}}>
                  <p>Lorem ipsum dolor sit.dasdfasdf sadfsad hgfhgsfd </p>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div className="weather__location flow" style={{"--flow-spacer": .25 + "rem"}}>
                <h2 className="fs-secondary-heading fw-medium">Boryspil, Country code</h2>
                <p>Lorem ipsum dolor sit. Lorem ipsum </p>
                <p>Lorem ipsum dolor sit.</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="weather-chart">
          <div className="container">
            *chart here
          </div>
        </section>

        <section className="daily-forecast">
          <div className="container">

          </div>
        </section>
      </main>

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

export default App;
