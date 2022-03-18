import axios, { AxiosInstance } from 'axios'

export const api = (baseURL: string): AxiosInstance => {
  const base = axios.create({
    baseURL
  })

  return base
}