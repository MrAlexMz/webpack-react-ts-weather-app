import './styles.css'
import { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const api = {
  key: '31abf76e39ee93440a4a9df955bcdaf5',
  base: 'https://api.openweathermap.org/data/2.5/',
}

export const App = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (evt: { key: string }) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setQuery('')
          console.log(result)
        })
    }
  }

  const dateBuilder = (d: Date) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]

    const day = days[d.getDay()]
    const date = d.getDate()
    const month = months[d.getMonth()]
    const year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <Container className="body-wrapper">
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {weather.main ? (
        <Card style={{ 'background-color': 'transparent' }}>
          <Card.Text className="location">
            {weather.name}, {weather.sys.country}
          </Card.Text>
          <Card.Text className="date">{dateBuilder(new Date())}</Card.Text>
          <Card.Text className="temp">
            {Math.round(weather.main.temp)}°c
          </Card.Text>
          <Card.Text className="weather">{weather.weather[0].main}</Card.Text>
        </Card>
      ) : (
        ''
      )}
    </Container>
  )
}
