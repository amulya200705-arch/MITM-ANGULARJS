
/* GENERAL STYLING */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #121212;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

.app {
    display: flex;
    min-height: 100vh;
}


/* SIDEBAR */

.sidebar {
    width: 240px;
    background: #000000;
    padding: 25px 18px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
}

.logo {
    color: #1ed760;
    font-size: 22px;
    margin-bottom: 45px;
}

.menu-title {
    color: #b3b3b3;
    font-size: 11px;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.nav {
    background: transparent;
    border: none;
    color: #b3b3b3;
    text-align: left;
    padding: 14px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 5px;
}

.nav:hover {
    color: white;
    background: #181818;
}

.nav.active {
    color: #1ed760;
    background: #1f1f1f;
}

.sidebar-bottom {
    margin-top: auto;
    color: #b3b3b3;
    font-size: 11px;
    line-height: 2;
}


/* MAIN CONTENT */

.main {
    flex: 1;
    padding: 25px 35px;
    background: linear-gradient(#242424, #121212 65%);
    min-width: 0;
}

.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
}

.topbar h3 {
    font-size: 16px;
}

.status {
    color: #1ed760;
    font-size: 12px;
}


/* HOME SECTION */

.hero {
    max-width: 750px;
    padding: 30px 0;
}

.green-text {
    color: #1ed760;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 15px;
}

.hero h1 span {
    color: #1ed760;
}

.hero h2 {
    color: #b3b3b3;
    font-size: 20px;
    margin-bottom: 20px;
}

.description {
    color: #b3b3b3;
    line-height: 1.8;
    max-width: 550px;
    margin-bottom: 30px;
}


/* BUTTON */

.green-button {
    background: #1ed760;
    color: #000000;
    border: none;
    border-radius: 500px;
    padding: 14px 25px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    transition: 0.3s;
}

.green-button:hover {
    background: #ffffff;
    transform: scale(1.04);
}


/* CONTENT SECTIONS */

.content {
    min-height: 450px;
}

.content h1 {
    font-size: 35px;
    margin-bottom: 30px;
}

.card {
    background: #181818;
    padding: 25px;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: 0.3s;
}

.card:hover,
.skill-card:hover {
    background: #282828;
    transform: translateY(-4px);
}

.card h2 {
    margin-bottom: 15px;
    font-size: 19px;
}

.card p {
    color: #b3b3b3;
    line-height: 1.8;
    margin-bottom: 10px;
}


/* SKILLS AND PROJECTS */

.grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
}

.skill-card {
    background: #181818;
    padding: 25px;
    border-radius: 8px;
    transition: 0.3s;
}

.skill-card span {
    color: #1ed760;
    font-size: 25px;
}

.skill-card h3 {
    margin-top: 12px;
}

.project-number {
    color: #1ed760;
    font-size: 11px;
    letter-spacing: 2px;
}

.project-icon {
    color: #1ed760;
    font-size: 22px;
}


/* FOOTER */

footer {
    color: #b3b3b3;
    text-align: center;
    padding: 40px 0 10px;
    font-size: 12px;
}


/* MOBILE RESPONSIVENESS */

@media (max-width: 650px) {

    .app {
        flex-direction: column;
    }

    .sidebar {
        width: 100%;
        padding: 15px;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        gap: 5px;
    }

    .logo {
        width: 100%;
        margin-bottom: 15px;
    }

    .menu-title,
    .sidebar-bottom {
        display: none;
    }

    .nav {
        padding: 10px;
        font-size: 12px;
    }

    .main {
        padding: 20px;
    }

    .topbar {
        margin-bottom: 45px;
    }

    .hero h1 {
        font-size: 34px;
    }

    .grid {
        grid-template-columns: 1fr;
    }

}
