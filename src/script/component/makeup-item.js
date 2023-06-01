class MakeupItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
    set club(club) {
        this._club = club;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');

        /* 
        ========================
        Variables
        ========================
        */
        
        :root {
            font-size: 15px;
            /* Primary */
            --var-soft-blue: hsl(215, 51%, 70%);
            --var-cyan: hsl(178, 100%, 50%);
            /* Neutral */
            --var-main-darkest: hsl(217, 54%, 11%);
            --var-card-dark: hsl(216, 50%, 16%);
            --var-line-dark: hsl(215, 32%, 27%);
            --var-lightest: white;
            /* Fonts */
            --var-heading: normal normal 600 1.5em/1.6em 'Outfit', sans-serif;
            --var-small-heading: normal normal 400 1em/1em 'Outfit', sans-serif;
            --var-para: normal normal 300 1em/1.55em 'Outfit', sans-serif;
        }
        
        
        /* 
        =======================
        Setup
        =======================
        */
        
        html {
            box-sizing: border-box;
        }
        
        *,
        *::before,
        *::after {
            box-sizing: inherit;
            margin: 0;
        }
        
        body {
            background-color: var(--var-main-darkest);
        }
        
        img {
            width: 100%;
            border-radius: 15px;
            display: block;
        }
        
        a {
            color: inherit;
        }
        
        
        /* 
        
        Eye view
        
        https://i.postimg.cc/9MtT4GZY/view.png' border='0' alt='view */
        
        
        /*
        =========================
        Font Styling
        =========================
        */
        
        h1 {
            font: var(--var-heading);
            color: var(--var-lightest);
            padding: 1.2em 0;
        }
        
        h2 {
            font: var(--var-small-heading);
            color: var(--var-lightest);
            /* padding on .coin-base */
        }
        
        p {
            font: var(--var-para);
            color: var(--var-soft-blue);
        }
        
        span {
            color: white;
        }
        
        
        /* 
        =====================
        Classes
        =====================
        */
        
        
        /* LAYOUT */
        
        .card-container {
            width: 100%;
            max-width: 300px;
            margin: 2em auto;
            background-color: var(--var-card-dark);
            border-radius: 15px;
            margin-bottom: 1rem;
            padding: 2rem;
            background-color: white;
        }
        
        div.flex-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        div.coin-base,
        .time-left,
        .card-attribute {
            display: flex;
            align-items: center;
            padding: 1em 0;
        }
        
        .card-attribute {
            padding-bottom: 1.5em;
            border-top: 2px solid var(--var-line-dark);
        }
        
        a.hero-image-container {
            position: relative;
            display: block;
        }
        
        
        /* Details */
        
        img.eye {
            position: absolute;
            width: 100%;
            max-width: 2em;
            top: 44%;
            left: 43%;
        }
        
        @media (min-width:400px) {
            img.eye {
                max-width: 3em;
            }
        }
        
        .hero-image-container::after {
            content: '';
            background-image: url("https://i.postimg.cc/9MtT4GZY/view.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 5rem;
            background-color: hsla(178, 100%, 50%, 0.3);
            width: 8o0%;
            height: 800%;
            border-radius: 1rem;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            z-index: 2;
            opacity: 0;
            transition: opacity 0.3s ease-out;
        }
        
        .hero-image-container:hover::after {
            opacity: 1;
        }
        
        .small-image {
            width: 1.2em;
            margin-right: .5em;
        }
        
        .small-avatar {
            width: 2em;
            border-radius: 200px;
            outline: 2px solid white;
            margin-right: 1.4em;
        }
        
        div.attribution {
            margin: 0 auto;
            width: 100%;
            font: var(--var-para);
            text-align: center;
            padding: 1.5em 0 4em 0;
            color: var(--var-line-dark);
        }
        
        .attribution a {
            color: var(--var-soft-blue);
        }
        
        @media (min-width:600px) {
            body {
                font-size: 18px;
            }
        }
        </style>
        
        <div class="card-container">
        <a href="/" class="hero-image-container">
            <img class="hero-image" src="${this._club.api_featured_image}" alt="Spinning glass cube" />
        </a>
        <main class="main-content">
            <h1><a href="#">${this._club.name}</a></h1>
            <p>${this._club.description}</p>
            <div class="flex-row">
                <div class="coin-base">
                    <h2>${this._club.tag_list}</h2>
                </div>
                <div class="time-left">
                    
                    <p>${this._club.price_sign}${this._club.price}</p>
                </div>
            </div>
        </main>
    </div>
    </div>
      `;
    }
}

customElements.define("makeup-item", MakeupItem);