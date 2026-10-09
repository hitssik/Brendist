import type { ComponentPropsWithRef } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

// Усі нативні пропси <button> (onClick, type, aria-*, ref…) + наші власні.
export type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
}

// Спільна база: форма, типографіка, фокус і disabled-стан.
// focus-visible: — кільце фокусу лише при навігації з клавіатури, не при кліку мишею.
const baseClasses =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold transition ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ' +
  'disabled:cursor-not-allowed disabled:opacity-50'

// enabled:hover: — hover-ефект не спрацьовує, коли кнопка disabled.
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-500 text-white shadow-lg shadow-brand-500/30 enabled:hover:bg-brand-600',
  secondary:
    'border border-slate-300 text-slate-900 enabled:hover:border-slate-900 ' +
    'dark:border-slate-700 dark:text-slate-100 dark:enabled:hover:border-white',
  ghost:
    'text-slate-700 enabled:hover:bg-slate-100 ' +
    'dark:text-slate-300 dark:enabled:hover:bg-slate-800',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], sizeClasses[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      // За замовчуванням "button", щоб кнопка всередині <form> випадково не відправляла форму.
      type={type}
      // Під час loading кнопка недоступна, щоб уникнути повторних кліків.
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
      {...props}
    >
      {loading && (
        // aria-hidden: спінер — декорація; стан озвучує aria-busy.
        <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
          <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )}
      {children}
    </button>
  )
}
