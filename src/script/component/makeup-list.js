import './makeup-item.js';

class MakeupList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("makeup-item");
            clubItemElement.club = club;
            this.shadowDOM.appendChild(clubItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `<style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          </style>`;
        this.innerHTML += `
        <h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("makeup-list", MakeupList);