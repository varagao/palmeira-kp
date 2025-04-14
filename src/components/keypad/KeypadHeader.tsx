interface KeypadHeaderProps {
  title: string;
  number: string;
  subtitle: string;
}

export const KeypadHeader = ({
  title,
  number,
  subtitle,
}: KeypadHeaderProps) => {
  return (
    <header className="flex w-full flex-col text-[17px] text-[#1E09BB] font-[250] text-center uppercase tracking-[0.85px] leading-none py-4">
      <div>{title}</div>
      <div className="text-[81px] font-light tracking-[4.05px] mt-4">
        {number}
      </div>
      <div className="mt-4">{subtitle}</div>
    </header>
  );
};
