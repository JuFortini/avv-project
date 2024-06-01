interface MenuButtonProps {
  title: string
  isSelected?: boolean
}

export function MenuButton({ title, isSelected = false }: MenuButtonProps): JSX.Element {
  return (
    <>
      <button className={`px-4 py-2 rounded-full ${isSelected && 'bg-slate-100'} transition duration-200 hover:bg-slate-100`}>
        {title}
      </button>
    </>
  );
}
