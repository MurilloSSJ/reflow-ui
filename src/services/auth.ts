import axios from 'axios'
import { parseCookies } from 'nookies'

import { loginTypeSchema } from '@/schemas/login'

const { accesstoken } = parseCookies()

const login = async ({ username, password }: loginTypeSchema) => {
  console.log(process.env.NEXT_PUBLIC_AUTH_URL)
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_AUTH_URL}/auth/login`,
    {
      username,
      password,
    },
  )
  console.log(response.status)
  console.log(response)
  return { ...response?.data, statusCode: response?.status }
}

const getRole = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_AUTH_URL}/auth/role`, {
        headers: { accesstoken },
    })
    return response.data
    }

const userInfo = async (accesstoken: string): Promise<any> => {
  const response = await axios({
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_AUTH_URL}/auth/me`,
    headers: { accesstoken },
  })
  return response.data
}

export const authAPI = {
  login,
  userInfo,
  getRole
}
