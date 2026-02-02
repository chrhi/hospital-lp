import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button = ({
  children,
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: Props) => {
  const base =
    'inline-flex items-center justify-center bg-primary px-7 py-3 min-h-12 shadow-lg rounded-xl text-white font-bold transition';
  const hover = disabled ? '' : 'hover:bg-[#158ace]';
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed' : '';

  if (href) {
    if (disabled) {
      return (
        <span className={`${base} ${disabledStyles} ${className}`}>
          {children}
        </span>
      );
    }
    return (
      <AnchorLink
        href={href}
        onClick={onClick}
        className={`${base} ${hover} ${className}`}
      >
        {children}
      </AnchorLink>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={`${base} ${hover} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
