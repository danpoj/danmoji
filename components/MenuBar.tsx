import { categories } from '@/data/categories'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ColorfulLogo from './ColorfulLogo'
import DarkModeToggle from './DarkModeToggle'
import SizeToggle from './SizeToggle'

export default function MenuBar() {
  const router = useRouter()

  const isCurrentPage = (path: string) => {
    if (router.pathname === '/' && path === 'animals-and-nature') {
      return true
    }

    return path === router.query.category
  }

  return (
    <div className='flex flex-col gap-8 md:h-[40rem] py-4'>
      <ColorfulLogo />

      <div className='flex md:flex-col gap-3 justify-between'>
        <SizeToggle />
        <DarkModeToggle />
      </div>

      {/* pc 메뉴 */}
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

      {/* mobile 메뉴 */}
      <div className='flex md:hidden gap-2'>
        {categories.map((category, i) => (
          <Link
            href={category.path}
            key={i}
            className={`text-2xl font-light px-2 py-1 text-end ${
              isCurrentPage(category.path) && 'ring-black ring-2 rounded-lg'
            }`}
          >
            {category.icon}
          </Link>
        ))}
      </div>
    </div>
  )
}
