import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

const cn = (...inputs) => twMerge(clsx(inputs))

function Button({ children, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-lg px-4 py-2 font-medium transition-colors duration-200 cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className  // user classes WIN and override the defaults above
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button