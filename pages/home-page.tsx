'use client'
import React, { useState, useEffect } from 'react'
import { useVehicleMakes, useVehicleYears } from '@/hooks'
import { CustomButton, Dropdown } from '@/components'

export function HomePage() {
  const { makes, isLoading, error } = useVehicleMakes()
  const years = useVehicleYears()
  const [selectedMake, setSelectedMake] = useState<string>('')
  const [selectedYear, setSelectedYear] = useState<string>('')
  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
        <p>Loading vehicle makes...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className='min-h-screen bg-gray-100 flex items-center justify-center text-red-500'>
        <p>Error: {error.message}</p>
      </div>
    )
  }

  const makeOptions = makes.map(make => ({
    value: make.MakeId,
    label: make.MakeName,
  }))

  const yearOptions = years.map(year => ({
    value: year.toString(),
    label: year.toString(),
  }))

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <h1 className='text-2xl font-bold mb-6'>Car Dealer App</h1>
      <div className='flex flex-col gap-4 w-full max-w-md'>
        <Dropdown
          value={selectedMake}
          onChange={setSelectedMake}
          options={makeOptions}
          placeholder='Select a Make'
        />

        <Dropdown
          value={selectedYear}
          onChange={setSelectedYear}
          options={yearOptions}
          placeholder='Select a Year'
        />

        <CustomButton
          selectedMake={selectedMake}
          selectedYear={selectedYear}
          title='Next'
        />
      </div>
    </div>
  )
}
