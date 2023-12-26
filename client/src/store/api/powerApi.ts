import { baseApi } from "./baseApi"

export const powerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPower: builder.mutation<any, any>({
      query: (data) => ({
        url: "power",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Hero"],
    }),
    removePower: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `power/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Hero"],
    }),
  }),
})

export const { useAddPowerMutation, useRemovePowerMutation } = powerApi
