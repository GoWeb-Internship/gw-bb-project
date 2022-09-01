import React from 'react';

const MobileMenuButtons = ({
  onClick,
  IconComponent,
  disabled,
  style,
  className,
  label = '',
}) => {
  return (
    <button
      aria-label={label}
      type="button"
      className={`${className} flex justify-center items-center p-2 `}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <IconComponent
        size={20}
        className="transition-colors stroke-slate-50 hover:stroke-slate-200"
      />
    </button>
  );
};

export default MobileMenuButtons;
