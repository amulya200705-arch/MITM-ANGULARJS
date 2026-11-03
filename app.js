
const { useState } = React;

function App() {

    const [active, setActive] = useState("Home");

    const menu = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact"
    ];

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Java",
        "C Programming",
        "Git",
        "GitHub"
    ];

    const projects = [
        {
            title: "Student Registration Form",
            description: "A student registration form created using HTML, CSS and React."
        },
        {
            title: "Personal Portfolio",
            description: "A responsive portfolio website showcasing my skills and projects."
        },
        {
            title: "Web Development",
            description: "Exploring frontend development and modern technologies."
        }
    ];

    return (

        <div className="app">

            {/* SIDEBAR */}

            <aside className="sidebar">

                <h2 className="logo">✦ AMULYA'S SPACE</h2>

                <p className="menu-title">MENU</p>

                {menu.map((item) => (

                    <button
                        key={item}
                        className={active === item ? "nav active" : "nav"}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </button>

                ))}

                <div className="sidebar-bottom">

                    <p>CREATED WITH PASSION</p>

                    <span>© 2026 Amulya E.</span>

                </div>

            </aside>


            {/* MAIN CONTENT */}

            <main className="main">

                <header className="topbar">

                    <h3>My Portfolio</h3>

                    <span className="status">
                        ● Available to learn
                    </span>

                </header>


                {/* HOME SECTION */}

                {active === "Home" && (

                    <section className="hero">

                        <p className="green-text">
                            WELCOME TO MY WORLD
                        </p>

                        <h1>
                            Hello, I'm <span>Amulya E.</span>
                        </h1>

                        <h2>
                            Information Science Engineering Student
                        </h2>

                        <p className="description">
                            I am an enthusiastic engineering student
                            interested in programming, web development
                            and technology. I love learning new skills
                            and building creative projects.
                        </p>

                        <button
                            className="green-button"
                            onClick={() => setActive("Projects")}
                        >
                            EXPLORE MY PROJECTS ↗
                        </button>

                    </section>

                )}


                {/* ABOUT SECTION */}

                {active === "About" && (

                    <section className="content">

                        <p className="green-text">
                            GET TO KNOW ME
                        </p>

                        <h1>About Me</h1>

                        <div className="card">

                            <h2>Who am I?</h2>

                            <p>
                                I am Amulya E., an Information Science
                                and Engineering student passionate about
                                technology, creativity and continuous learning.
                            </p>

                            <p>
                                My goal is to develop my technical skills,
                                work on interesting projects and grow as
                                a software developer.
                            </p>

                        </div>

                    </section>

                )}


                {/* SKILLS SECTION */}

                {active === "Skills" && (

                    <section className="content">

                        <p className="green-text">
                            WHAT I KNOW
                        </p>

                        <h1>My Skills</h1>

                        <div className="grid">

                            {skills.map((skill) => (

                                <div className="skill-card" key={skill}>

                                    <span>✦</span>

                                    <h3>{skill}</h3>

                                </div>

                            ))}

                        </div>

                    </section>

                )}


                {/* PROJECTS SECTION */}

                {active === "Projects" && (

                    <section className="content">

                        <p className="green-text">
                            WHAT I'VE BUILT
                        </p>

                        <h1>My Projects</h1>

                        <div className="grid">

                            {projects.map((project, index) => (

                                <div className="card" key={index}>

                                    <span className="project-number">
                                        PROJECT 0{index + 1}
                                    </span>

                                    <h2>{project.title}</h2>

                                    <p>{project.description}</p>

                                    <span className="project-icon">
                                        ↗
                                    </span>

                                </div>

                            ))}

                        </div>

                    </section>

                )}


                {/* CONTACT SECTION */}

                {active === "Contact" && (

                    <section className="content">

                        <p className="green-text">
                            LET'S CONNECT
                        </p>

                        <h1>Contact Me</h1>

                        <div className="card">

                            <h2>Get in touch!</h2>

                            <p>
                                Name: Amulya E.
                            </p>

                            <p>
                                Email: YOUR_EMAIL@gmail.com
                            </p>

                            <p>
                                Location: Mysuru, Karnataka
                            </p>

                            <button
                                className="green-button"
                                onClick={() =>
                                    window.location.href =
                                    "mailto:YOUR_EMAIL@gmail.com"
                                }
                            >
                                SEND EMAIL ↗
                            </button>

                        </div>

                    </section>

                )}


                <footer>

                    Made with creativity and passion ✦

                </footer>

            </main>

        </div>

    );

}

ReactDOM.createRoot(
    document.getElementById("root")
).render(<App />);

