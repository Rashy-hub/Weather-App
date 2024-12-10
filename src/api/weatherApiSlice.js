import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const weatherBaseUrl = import.meta.env.VITE_WEATHER_API_BASE;
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: weatherBaseUrl }),
  endpoints: (builder) => ({
    getWeatherByGeo: builder.mutation({
      query: ({ lat, lon }) => ({
        url: 'data/2.5/weather',
        method: 'GET',
        params: { lat, lon, appid: weatherApiKey }
      })
    })
  })
});

export const { useGetWeatherByGeoMutation } = weatherApi;
