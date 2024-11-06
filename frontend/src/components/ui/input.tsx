import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'px-4 h-12 bg-white border border-tema:menor_medio rounded-lg placeholder-zinc-400 outline-none text-sm hover:border-zinc-800 focus-visible:border-roxo:medio focus-visible:ring-4 ring-pink-500/10',
        props.className
      )}
    />
  )
})

Input.displayName = 'Input'
