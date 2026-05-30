import { MenuIcon, SearchIcon } from 'lucide-react'

import { Button } from '../../primitives/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../../primitives/dropdown-menu'

import LogoSvg from '../../composites/logo-mark'
import { cn } from '../../lib/utils'
import { ModeToggle } from '../../composites/mode-toggle'

const Logo = ({ className }: { className?: string }) => (
  <div className={cn('flex items-center', className)}>
    <LogoSvg className='size-16 rounded-full' />
    <span className='text-xl -ml-2 font-semibold'>GMH Lab / Studio</span>
  </div>
)

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar2 = ({ navigationData }: { navigationData: NavigationItem }) => {
  return (
    <header className='sticky top-0 z-50 border-b border-dashed'>
      <div className='mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>

        <div className='flex items-center gap-6'>
          <ModeToggle />
        </div>

        <div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'>
          <a href='/dashboard' className='hover:text-primary max-md:hidden'>App</a>
          <a href='/site' className='hover:text-primary max-md:hidden'>Content</a>
          <a href=''><Logo className='text-foreground gap-3' /></a>
          <a href='/links' className='hover:text-primary max-md:hidden'>Social</a>
          <a href='/login' className='hover:text-primary max-md:hidden'>Login</a>
        </div>

        <div className='flex items-center gap-6'>
          <Button variant='ghost' size='icon'>
            <SearchIcon />
            <span className='sr-only'>Search</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export { Navbar2 }
