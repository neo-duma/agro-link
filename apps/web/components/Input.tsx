import type { InputHTMLAttributes } from 'react';

export default function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full bg-white border border-line rounded-lg px-3 py-2 text-sm text-ink placeholder:text-neutral-400 outline-none focus:border-coral ${className}`}
      {...props}
    />
  );
}
