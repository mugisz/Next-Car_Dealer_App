import Link from 'next/link'

interface IProps {
  selectedMake: string
  selectedYear: string
  title: string
}
export const CustomButton = ({ selectedMake, title, selectedYear }: IProps) => {
  return (
    <Link
      href={`/result/${selectedMake}/${selectedYear}`}
      className={`p-3 flex justify-center text-white rounded transition-colors duration-300 ${
        selectedMake && selectedYear
          ? 'bg-blue-500 hover:bg-blue-600'
          : 'bg-gray-300 cursor-not-allowed'
      }`}
    >
      {title}
    </Link>
  )
}
