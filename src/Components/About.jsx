
import "./About.css"

function About() {

  return (
    <main className="about"> 
      <h1>About the Project</h1>
      <p>
        This is a Weather App built with React, which allows users to check the weather forecast for a specific location. It uses the useState hook to manage state, the react-router-dom library for routing, and the fetch method to get data from the wttr.in API. On its first render, the app will display the weather data for the user's location as you can omit the location name in the API call, and it will return the weather data based on the user's IP address.
      </p>
      <p>
        The main component of the app is the App function, which sets up the navigation and routing for the app, and defines the state for weather data. The Home component is the default page of the app and displays the weather forecast based on the user's input from a form for searching for weather data for a specific location. The component also includes a form for converting temperature from Fahrenheit to Celsius and vice versa. The component starts by using the useState hook to create four state variables - "searchHistory", "locationInput", "searchResults", and "weatherData". "searchHistory" and "searchResults" are used to store and display the search history and results, respectively. "locationInput" is used to capture user input for the location to search for, and "weatherData" is used to store the weather data returned by the API call.
      </p>
      <p>
        The component has a form that captures the user's location input and uses the handleSubmit function to submit the form. The handleSubmit function first prevents the default form submission behavior and then trims the location input to remove any leading or trailing white spaces. If the input is empty, the function simply returns without doing anything. If the input is not empty, the function calls the "onLocationSubmit" function that is passed as a prop from the parent component. The onLocationSubmit function is responsible for fetching the weather data from the API.
      </p>
      <p>
        Once the onLocationSubmit function returns the weather data, the handleSubmit function creates a new search result object containing the search query and the weather data. It then updates the "searchHistory" and "searchResults" state variables to include the new search result. The "slice" method is used to ensure that only the latest 10 search results are displayed.
      </p>
      <p>
        The component also has a "handleSearchHistoryClick" function that is used to handle clicks on the search history items. When a search history item is clicked, the function calls the "onLocationSubmit" function to fetch the weather data for the selected location.
      </p>
      <p>
        Finally, the component renders various child components that are responsible for displaying different parts of the weather information. The "TemperatureConverter" component displays a form for converting temperature units, the "CurrentWeather" component displays the current weather information for the selected location, the "WeatherImages" component displays weather images based on the current weather conditions, and the "WeatherForecast" component displays the weather forecast for the next few days. The "SearchHistory" component displays the search history items.
      </p>
      
            <h1>About me</h1>
            <p>I'm currently a Full Stack Web Development Fellow at Pursuit, a 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, Citi, Spotify, and Blackstone.
    
    I'm currently learning React, having already studied JavaScript, HTML & CSS and I am training to become a software engineer so that I can solve real-world problems.  When I'm not coding, I enjoy movies, watching Formula 1 racing, music, travel and playing with my German Shepherd.

    Being a Pursuit Fellow will give me the foundation to go on and learn new and exciting languages such as Python, C++, C# et al. that I would like to use both personally and professionally. My first personal project will be to design and implement a quantitative trading algorithm that I can run through an API to a trading platform.
    
    I would very much enjoy working for a start-up (as I have start-up experience) or even a large financial firm, as my experience up until Pursuit has been in the financial markets.
</p>
<br></br>

    <div className="social-container" style={{ marginRight: '20px' }}>
    <div className="github-container">
      <a href="https://github.com/MarkRobertson67" target="_blank" rel="noopener noreferrer">
      <img src={"./github-mark.png"} alt="GitHub Logo" width={40} height={40} />
      </a>
    </div>

    <div className="linkedin-container">
      <a href="https://www.linkedin.com/in/mark-robertson-ny-uk/" target="_blank" rel="noopener noreferrer">
      <img src={"./linkedin.png"} alt="Linkedin Logo" width={120} height={40} />
      </a>
    </div>

  </div>
</main>
)
}

export default About;