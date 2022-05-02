interface NavbarMenuItem {
  text: string;
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const NavbarMenuItem: React.FC<NavbarMenuItem> = ({ text, icon, onClick }) => {
  return (
    <button className="flex w-full gap-2 bg-white py-3 px-4 hover:bg-slate-50" onClick={onClick}>
      {text}
      {icon}
    </button>
  );
};

export default NavbarMenuItem;
