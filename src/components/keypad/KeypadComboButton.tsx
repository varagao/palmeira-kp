interface KeypadComboButtonProps {
  title: string;
  description?: string;
  align?: "left" | "right";
  onClick?: () => void;
}

export const KeypadComboButton = ({
  title,
  description,
  align = "left",
  onClick,
}: KeypadComboButtonProps) => {
  const buttonContent = (
    <>
      <div
        className="min-w-60 text-[#1E09BB] flex-1 shrink basis-[0%] my-auto"
        style={{ textAlign: align }}
      >
        <div className="text-lg font-medium leading-[1.1] tracking-[0.9px] uppercase">
          {title}
        </div>
        {description && (
          <div className="text-sm font-normal leading-[18px] tracking-[0.42px] lowercase mt-2">
            {description}
          </div>
        )}
      </div>
      <div className="flex flex-col items-stretch justify-center w-3">
        <div className="rounded border border-[color:var(--PALM-PRIMA,#1E09BB)] flex min-h-[9px] w-3 border-solid" />
      </div>
    </>
  );

  return (
    <button
      className={`flex w-full items-stretch gap-4 px-4 py-2 hover:bg-[#1E09BB]/5 transition-colors`}
      onClick={onClick}
      type="button"
    >
      {buttonContent}
    </button>
  );
};
