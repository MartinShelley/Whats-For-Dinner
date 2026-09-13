// import styles from './button.module.css';

function Button({ children, label, onClick, type = 'button', className }: { children?: React.ReactNode, label?: string; onClick: () => void; type?: 'button' | 'submit'; className?: string }) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {label}
      {children}
    </button>
  );
}

export { Button };