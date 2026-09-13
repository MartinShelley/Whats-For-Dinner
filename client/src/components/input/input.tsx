import { type ComponentPropsWithoutRef } from 'react';

import styles from './input.module.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  id?: string;
  label?: string;
  className?: string,
  error?: string;
}

function Input({id, className, label, error, ...props }: InputProps) { 
  return (
    <div className={className}>
      {props.type === 'radio' || props.type === 'checkbox' ? (
        <>
          <input id={id} {...props} hidden/>
          <label htmlFor={id}>{ label }</label>
        </>
      ) : (
        <>
          {label && <label htmlFor={id}>{label}</label>}
          <input id={id} {...props} />
        </>
      )}
    </div>
  )
}

export { Input };