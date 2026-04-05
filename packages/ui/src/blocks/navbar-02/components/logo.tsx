// SVG Imports
import LogoSvg from '../../../assets/svg/logo-mark'

// Util Imports
import { cn } from '../../../lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <LogoSvg className='size-16 rounded-full' />
      <span className='text-xl -ml-2 font-semibold'>GMH Lab / Studio</span>
    </div>
  )
}

export default Logo
