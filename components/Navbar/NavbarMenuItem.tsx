interface NavbarMenuItem {
  text: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NavbarMenuItem: React.FC<NavbarMenuItem> = ({ text, icon, onClick }) => {
  return (
    <div className="mb-1 flex gap-2" onClick={onClick}>
      {text}
      {icon}
    </div>
  );
};

export default NavbarMenuItem;
