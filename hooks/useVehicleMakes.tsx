'use client'
import { useEffect, useState } from 'react'
import { VehicleMake } from '../interface'
import { URLs } from '@/constanst'

export const useVehicleMakes = () => {
  const [makes, setMakes] = useState<VehicleMake[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchMakes = async () => {
      if (!URLs.BASE_URL) {
        throw new Error('API URL is not defined')
      }
      try {
        setIsLoading(true)
        const response = await fetch(URLs.BASE_URL)

        if (!response.ok) {
          throw new Error('Failed to fetch vehicle makes')
        }

        const data = await response.json()
        setMakes(data.Results as VehicleMake[])
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('An unknown error occurred'),
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchMakes()
  }, [])

  return { makes, isLoading, error }
}
