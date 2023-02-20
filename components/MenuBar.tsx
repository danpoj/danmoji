import { categories } from '@/data/categories'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ColorfulLogo from './ColorfulLogo'

export default function MenuBar() {
  const router = useRouter()

  const isCurrentPage = (path: string) => {
    return path === router.query.category
  }

  return (
    <div className='flex flex-col gap-8 md:h-[40rem] py-4'>
      <ColorfulLogo />

      <div className='hidden md:flex flex-col gap-2'>
        {categories.map((category, i) => (
          <Link
            href={category.path}
            key={i}
            className={`text-sm font-light px-2 py-1 text-end ${
              isCurrentPage(category.path) &&
              'bg-slate-800 text-slate-100 rounded'
            }`}
          >
            {category.text}
          </Link>
        ))}
      </div>

      <div className='flex md:hidden gap-2'>
        {categories.map((category, i) => (
          <Link
            href={category.path}
            key={i}
            className={`text-2xl font-light px-2 py-1 text-end ${
              isCurrentPage(category.path) && 'bg-indigo-100 rounded-lg'
            }`}
          >
            {category.icon}
          </Link>
        ))}
      </div>
    </div>
  )
}
