interface KeypadButtonProps {
  label: string;
  align?: "left" | "right";
  onClick?: () => void;
}

export const KeypadButton = ({
  label,
  align = "left",
  onClick,
}: KeypadButtonProps) => {
  const buttonContent = (
    <>
      <div className="flex flex-col items-stretch justify-center w-3">
        <div className="rounded border border-[color:var(--PALM-PRIMA,#1E09BB)] flex min-h-[9px] w-3 border-solid" />
      </div>
      <div
        className={`min-w-60 text-lg text-[#1E09BB] font-medium uppercase tracking-[0.9px] leading-[1.1] flex-1 shrink basis-[0%] my-auto ${align === "right" ? "text-right" : ""}`}
      >
        {label}
      </div>
    </>
  );

  return (
    <button
      className={`flex w-full items-stretch gap-4 px-4 py-2 hover:bg-[#1E09BB]/5 transition-colors`}
      onClick={onClick}
      type="button"
    >
      {align === "right" ? buttonContent : buttonContent}
    </button>
  );
};
