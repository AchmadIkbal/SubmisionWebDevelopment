class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        @media (min-width: 450px) {
          h1.heading {
              font-size: 3.55em;
          }
      }
      
      @media (min-width: 760px) {
          h1.heading {
              font-size: 3.05em;
          }
      }
      
      @media (min-width: 900px) {
          h1.heading {
              font-size: 3.25em;
              margin: 0 0 0.3em;
          }
      }
      
        h1.heading {
          color: #fff;
          font-size: 1.15em;
          font-weight: 900;
          margin: 0 0 0.5em;
          color: #505050;
      }
        body {
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          height: 100%;
          width: 100%;
          background: #FFF;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
      }
      .logo span {
        font-size: 50px;
        font-weight: 600;
        font-family: "Open Sans";
    }
        header.navbar-container {
          max-width: 1200px;
          width: 100%;
          margin-inline: auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding-block: 1rem;
          z-index: 999;
      }
      
      header.navbar-container .nav-list ul {
          padding-left: 0;
          display: flex;
          justify-content: center;
          gap: 2rem 1rem;
      }
      
      header.navbar-container .nav-list li {
          list-style-type: none;
      }
      
      header.navbar-container .nav-list li a {
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 500;
          color: black;
          padding: .9rem 2rem;
          border-radius: 999px;
          transition: all .2s ease-in-out;
          background-color: black;
          color: #FFB4B4;
      }
      
      header.navbar-container .nav-list li:hover a {
          background-color: #FFB4B4;
          color: black;
      }
      
      @media screen and (max-width: 768px) {
          header.navbar-container {
              flex-direction: column;
          }
          header.navbar-container .nav-list ul {
              flex-wrap: wrap;
              column-gap: .5rem;
          }
          /* main {
              padding: 1rem 3rem;
          }
          main .home {
              grid-template-columns: 1fr;
              text-align: center;
          }
          main .home1 {
              grid-template-columns: 1fr;
              text-align: center;
          }
          /* main .home1 .home1-img {
              width: 100px;
          } */
      }
      </style>
      <header class="navbar-container">
      <div class="logo">
      <span>Ball Make Up</span>
      </div>
      <div class="menu-icon" id="menu-icon"></div>
      <nav class="nav-list">
          <ul>
              <li><a href="#home">Dashboard</a></li>
              <li><a href="#menu">Makeup List</a></li>
              <li><a href="#service">Brand New</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#footer">Contact</a></li>
          </ul>
      </nav>
  </header>`;
    }
}

customElements.define("app-bar", AppBar);