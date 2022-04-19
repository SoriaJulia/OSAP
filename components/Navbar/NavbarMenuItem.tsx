interface NavbarMenuItem {
  text: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NavbarMenuItem: React.FC<NavbarMenuItem> = ({
  children,
  text,
  icon,
  onClick,
}) => {
  return (
    <div className="flex" onClick={onClick}>
      {text}
      {icon}
    </div>
  );
};

export default NavbarMenuItem;
