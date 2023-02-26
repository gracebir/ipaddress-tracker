import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

export type geoDataType = {
    ip: string
    location: {
        country: string,
        region: string,
        city: string,
        lat: number,
        lng: number,
        timezone: string
    },
    isp: string
}

export const geoDataResponse = async (ipaddress: string) => {
    const response = await axios(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${api_key}&ipAddress=${ipaddress}`)
    const data:geoDataType = await response.data
    return data
}