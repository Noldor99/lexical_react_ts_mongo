import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'placeholder/api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL
  }),
  refetchOnFocus: false,
  endpoints: build => ({
    getUsersRepos: build.query({
      query: () => ({
        url: 'users',
        method: 'GET'
      })
    }),
    getOneUsers: build.query({
      query: (id) => ({
        url: `users/${id}`,
        method: 'GET'
      })
    }),
  })
})

export const { useGetUsersReposQuery, useGetOneUsersQuery } = userApi