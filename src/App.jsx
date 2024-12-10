import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Section from './layouts/Section';
import SearchGeo from './components/SearchGeo';
import { useEffect, useState } from 'react';
import { useGetGeoByCityMutation } from './api/geoApiSlice';
import { useGetWeatherByGeoMutation } from './api/weatherApiSlice';
function App() {
  const [searched, setSearched] = useState('');
  const [cityLoc, setCityLoc] = useState({});
  const [getGeoByCity, { data, isLoading, isError }] = useGetGeoByCityMutation(searched, {
    skip: true
  });
  const [getWeatherByGeo, { data: meteo, isLoading: meteoLoading, isError: meteoError }] =
    useGetWeatherByGeoMutation(cityLoc, { skip: true });

  /*   useEffect(() => {
    if (data && data.length > 0) setCityLoc({ lat: data[0].lat, lon: data[0].lon });
  }, [data]);
 */
  useEffect(() => {
    if (data && data.length > 0) {
      const newCityLoc = { lat: data[0].lat, lon: data[0].lon };
      setCityLoc(newCityLoc);
      getWeatherByGeo(newCityLoc);
    }
  }, [data, getWeatherByGeo]);

  const onSearchSubmit = async (searchedCity) => {
    if (searchedCity.trim()) {
      console.log(searchedCity);
      setSearched(searchedCity);
      getGeoByCity(searchedCity);
    }
  };

  let content;
  if (isLoading || meteoLoading) {
    content = (
      <Section>
        <p>Loading ...</p>
      </Section>
    );
  } else if (isError || meteoError) {
    content = (
      <Section>
        <p>Error while fetching data</p>
      </Section>
    );
  } else if (data && data.length > 0 && meteo) {
    content = (
      <Section>
        <table className="w-[800px] bg-white border border-gray-300 text-neutral-900 mt-4">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Longitude</th>
              <th className="py-2 px-4 border">Latitude</th>
              <th className="py-2 px-4 border">Meteo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border">{data[0].name}</td>
              <td className="py-2 px-4 border">{data[0].lon}</td>
              <td className="py-2 px-4 border">{data[0].lat}</td>
              <td className="py-2 px-4 border">{JSON.stringify(meteo)}</td>
            </tr>
          </tbody>
        </table>
      </Section>
    );
  } else if (data && data.length === 0) {
    content = (
      <Section>
        <p>
          No city named <strong>{searched}</strong> was found{' '}
        </p>
      </Section>
    );
  } else {
    content = '';
  }

  return (
    <>
      <Header />
      <Main className="flex flex-col items-center justify-center w-4/5 mx-auto overflow-hidden">
        <SearchGeo onSearchSubmit={onSearchSubmit} />
        {content}
      </Main>
      <Footer />
    </>
  );
}

export default App;
