function createHeader() {
    const header = document.createElement('header');
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    return nav;
}

function createMain() {
    const main = document.createElement('main');
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    return footer;
}

function initializeApplication() {
    const body = document.getElementById('body');
    body.appendChild(createHeader());
    body.appendChild(createNav());
    body.appendChild(createMain());
    body.appendChild(createFooter());
}

export default initializeApplication;