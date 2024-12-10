# Weather App with RTK Query

This is a simple React application that fetches weather data based on a city search using Redux Toolkit Query (RTK Query). The app demonstrates how to handle dynamic queries and manage state efficiently with RTK Query.

## Features

- Search for a city to get its geographic coordinates (latitude and longitude).
- Fetch weather data for the searched city using the coordinates.
- Display results in a table format.
- Handles loading and error states gracefully.

## Technologies Used

- React
- Redux Toolkit Query (RTK Query)
- TailwindCSS (for basic styling)

## How It Works

1. **City Search:**

   The user enters a city name in the search bar.  
   On submission, a request is sent to fetch the city's geographic coordinates.

2. **Fetch Weather Data:**

   Once the coordinates are retrieved, they are used to fetch the weather data for that location.

3. **Display Results:**

   The results (city name, longitude, latitude, and weather data) are displayed in a structured table.
