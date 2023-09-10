import React, { ReactNode } from "react";

type SideButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

const SideButton: React.FC<SideButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-3 w-full rounded-md border-2 hover:bg-zinc-500 relative ${className}`}
    >
      {children}
    </button>
  );
};

export default SideButton;
