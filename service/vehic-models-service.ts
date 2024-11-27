import { URLs } from '@/constanst'
import { VehicleModel } from '../interface'

export async function fetchVehicleModels(
  makeId: string,
  year: string,
): Promise<VehicleModel[]> {
  try {
    const response = await fetch(
      URLs.MODELS_URL + `/${makeId}/modelyear/${year}?format=json`,
    )
    if (!response.ok) {
      throw new Error('Failed to fetch vehicle models')
    }
    const data = await response.json()
    return data.Results || []
  } catch (error) {
    console.error('Error fetching vehicle models:', error)
    throw error
  }
}
