import type { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';

export default function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base = 'px-4 py-2 rounded-lg text-sm font-medium';
  const styles =
    variant === 'primary'
      ? 'bg-coral text-coral-light'
      : variant === 'outline'
        ? 'bg-transparent text-sand border border-muted'
        : 'bg-white text-ink border border-line';

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
