import './home.css'
function About() {
  return (
    <div className="about">
      <h2>Welcome to Weather App!</h2>
          <p>Now you can check the weather.</p>
          <form className='weather-form'>
              <input type="text" id="city" name="city" placeholder="Enter city name" />
              <div>OR</div>
              <input type="text" id="city" name="city" placeholder="Map Location" />
              <br />
            <button type="submit">Get Weather</button>
          </form>
    </div>
  );
}

export default About