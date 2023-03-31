
import "./About.css"

function About() {

    return (
        <main className="about"> 
        <h1>About the Project</h1>
        <p>This is a Weather App built with React, which allows users to check the weather forecast for a specific location. It uses the useState hook to manage state, the react-router-dom library for routing, and the fetch method to get data from the wttr.in API.

The main component of the app is the App function, which sets up the navigation and routing for the app, and defines the state for weather data. When the user submits a location using the form in the Home component, the handleLocationSubmit function is called to fetch the weather data and update the state.

The Home component is the default page of the app and displays the weather forecast based on the users input from a form for searching for weather data for a specific location. The component also includes a form for converting temperature from Fahrenheit to Celsius and vice versa. The useEffect hook is used to update the search history when a new search is made, and to update the search results when new data is fetched.</p>
            <h1>About me</h1>
            <p>I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
    I'm currently learning React, having already studied JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.  When I'm not coding, I enjoy movies, watching Formula 1 racing, music, travel and playing with my German Shepherd.

    Being a Pursuit Fellow will give me the foundation to go on and learn new and exciting languages such as Python, C++, C# et al. that I would like to use both personally and professionally. My first personal project will be to design and implement a quantitative trading algorithm that I can run through an API to a trading platform.
    
    I would very much enjoy working for a start-up (as I have start-up experience) or even a large financial firm, as my experience up until Pursuit has been in the financial markets.
        </p><br></br><div className="github-container">
        <a
          href="https://github.com/MarkRobertson67"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <img src={"./github-mark.png"} alt="GitHub Logo" width={40} height={40} />
      </div>
        </main>
    )
}

export default About;