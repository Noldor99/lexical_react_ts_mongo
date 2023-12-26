import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL_SERVER } from "../../constants/url"
import { IText, ICreateText } from "../../model/textModel"

export const textsApi = createApi({
  reducerPath: "textsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL_SERVER}`,
  }),
  tagTypes: ["Texts"],
  endpoints: (builder) => ({
    createText: builder.mutation<IText, ICreateText>({
      query: (dto) => ({
        url: "/text",
        method: "POST",
        body: dto,
      }),
      invalidatesTags: ["Texts"],
    }),
    getTextById: builder.query<IText, string>({
      query: (id) => ({ url: `/text/${id}`, method: "GET" }),
    }),
    deleteText: builder.mutation<IText, string>({
      query: (id) => ({ url: `/text/${id}`, method: "DELETE" }),
      invalidatesTags: ["Texts"],
    }),
    getTextAll: builder.query<IText[], void>({
      query: () => ({ url: "/text", method: "GET" }),
    }),
  }),
})

export const {
  useCreateTextMutation,
  useGetTextByIdQuery,
  useDeleteTextMutation,
  useGetTextAllQuery,
} = textsApi
