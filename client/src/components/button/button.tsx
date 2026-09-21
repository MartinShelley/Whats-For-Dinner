import { type LucideIcon } from 'lucide-react';
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void; 
  children?: React.ReactNode, 
  className?: string; 
  icon?: LucideIcon;
  label?: string; 
  badge?: boolean;
  type?: 'button' | 'submit'; 
  variant?: 'primary' | 'secondary' | 'icon' | 'icon-rounded' | 'text' | 'rounded' ;
  iconVariant?: 'subtle' | 'accent';
  stroke?: number;
}

function Button({ 
  children, 
  label, 
  onClick, 
  type = 'button', 
  className = '', 
  variant = 'primary',
  iconVariant,
  icon,
  badge = false,
  stroke,
  ...props
}: ButtonProps) {
  const buttonClassName = [styles.button, className].filter(Boolean).join(' ');
  const Icon = icon;

  return (
    <button onClick={onClick} type={type} className={buttonClassName} data-variant={variant} data-icon-variant={iconVariant} {...props}>
      {label}
      {Icon && <Icon strokeWidth={stroke} />}
      {children}
      {badge && <span className={styles.badge} aria-hidden="true" />}
    </button>
  );
}

export { Button };