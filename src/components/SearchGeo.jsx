import { useState } from 'react'

import { useGetWeatherByCityMutation } from '../api/weatherApiSlice'

const SearchGeo = () => {
    const [searched, setSearched] = useState('')

    const [getWeatherByCity, { data, isLoading, isError }] =
        useGetWeatherByCityMutation(searched)

    const onSearchHandler = (event) => {
        setSearched(event.target.value)
    }
    const onSearchSubmit = (event) => {
        event.preventDefault()
        getWeatherByCity(searched)

        console.log('submit to weather api')
        //  setSearched('')
    }

    let content = ''
    if (isLoading) content = <p>Loading...</p>
    else if (isError) content = <p>Error</p>
    else if (data && data.length != 0) content = <p>{JSON.stringify(data)}</p>
    else content = <p>{searched} does not exists</p>

    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={searched}
                    placeholder="city name"
                    onChange={onSearchHandler}
                    required
                />
                <input type="submit" value="Get the Meteo" />
            </form>
            <div>{content}</div>
        </>
    )
}

export default SearchGeo
