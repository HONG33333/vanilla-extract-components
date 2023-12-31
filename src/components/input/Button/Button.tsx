import { ComponentPropsWithoutRef, forwardRef, Ref } from 'react';
import { clsx } from 'clsx';

import { ButtonVariants, button } from '@components/input/Button/button.css';

type Props = ComponentPropsWithoutRef<'button'> & ButtonVariants;

export const Button = forwardRef(
  (
    {
      size = 'm',
      color = 'primary',
      variant = 'contained',
      disabled = false,
      fullWidth = false,
      className,
      children,
      ...rest
    }: Props,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button
        type="button"
        ref={ref}
        className={clsx(
          button({ variant, size, disabled, color, fullWidth }),
          className,
        )}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
export type ButtonProps = Parameters<typeof Button>[0];
