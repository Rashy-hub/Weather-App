import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import utils from '../data/utils.json'

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: utils.geoapi.base }),
    endpoints: (builder) => ({
        getWeatherByCity: builder.mutation({
            query: (city) => ({
                url: 'direct',
                method: 'GET',
                params: { q: city, limit: 1, appid: utils.geoapi.key },
            }),
        }),
    }),
})

export const { useGetWeatherByCityMutation } = weatherApi
