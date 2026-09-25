import { useState } from "react";
import "./home.css";
import profilePic from "./images/profile.png";
import About from "./About";

function Home() {
    const [isClicked, setIsClicked] = useState(false);
    console.log(isClicked);

    return (
      <>
        <section>
          <div className="half-width">
            <h1>Welcome To</h1>
            <h1>
              <span className="highlight">Weather</span> App
            </h1>
            <h2>World-class professional web developer</h2>
            <p>
              You might saw me jumping, climbing buildings, and stopping trains.
              But nobody pays me a dime for that work. That's why I am learning
              and mastering web development. I will not stop until I become the
              Web Development Hero.
            </p>
            <a className="button" href="https://almamun-six.vercel.app/">
              Hire Me
            </a>
          </div>
          <div className="half-width">
            <img src={profilePic} alt="Profile Picture" />
          </div>
        </section>

        <section>
          <h1>
            NextLevel <span className="highlight">Weather</span>
          </h1>
          <button className="button" onClick={() => setIsClicked(true)}>Get Started</button>
        </section>

        {isClicked && <About onClose={() => setIsClicked(false)} />}
      </>
    );
}

export default Home;


