import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const geoBaseUrl = import.meta.env.VITE_GEO_API_BASE;
const geoBaseKey = import.meta.env.VITE_GEO_API_KEY;

export const geoApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: geoBaseUrl }),
  endpoints: (builder) => ({
    getGeoByCity: builder.mutation({
      query: (city) => ({
        url: 'direct',
        method: 'GET',
        params: { q: city, limit: 1, appid: geoBaseKey }
      })
    })
  })
});

export const { useGetGeoByCityMutation } = geoApi;
