interface NavbarMenuItem {
  text: string;
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const NavbarMenuItem: React.FC<NavbarMenuItem> = ({ text, icon, onClick }) => {
  return (
    <button className="mb-1 flex gap-2" onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};

export default NavbarMenuItem;
