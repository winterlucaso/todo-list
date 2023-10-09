function createHeader() {
    const header = document.createElement('header');
    header.innerText = "To-Do Tracker";
    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.innerText = "nav";

    const createTaskBtn = document.createElement('button');
    createTaskBtn.classList.add('add-task-btn');
    createTaskBtn.innerText = "+";
    nav.appendChild(createTaskBtn);
    nav.addEventListener("click", (e) => {
        // loadHome();
        console.log("hello");
    })

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.innerText = "main";
    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerText = "footer";
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