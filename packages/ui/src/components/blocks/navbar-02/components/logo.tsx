// SVG Imports
import LogoSvg from '../../../../assets/svg/logo-mark'

// Util Imports
import { cn } from '../../../../lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      <LogoSvg className='size-12 rounded-full' />
      <span className='text-xl font-semibold'>gmhlab/studio</span>
    </div>
  )
}

export default Logo
