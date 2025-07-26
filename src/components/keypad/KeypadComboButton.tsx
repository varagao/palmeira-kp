import { Lightbulb, Music, Wind, RectangleHorizontal, Power } from "lucide-react";

const getIconForLabel = (label: string) => {
  const lowercaseLabel = label.toLowerCase();
  
  if (lowercaseLabel.includes('spot') || lowercaseLabel.includes('luz') || lowercaseLabel.includes('abajur') || lowercaseLabel.includes('led')) {
    return <Lightbulb size={16} className="text-[#1E09BB]" />;
  }
  if (lowercaseLabel.includes('música') || lowercaseLabel.includes('music') || lowercaseLabel.includes('som')) {
    return <Music size={16} className="text-[#1E09BB]" />;
  }
  if (lowercaseLabel.includes('ar condicionado') || lowercaseLabel.includes('ac')) {
    return <Wind size={16} className="text-[#1E09BB]" />;
  }
  if (lowercaseLabel.includes('janela') || lowercaseLabel.includes('window') || lowercaseLabel.includes('cortineiro')) {
    return <RectangleHorizontal size={16} className="text-[#1E09BB]" />;
  }
  if (lowercaseLabel.includes('desligar') || lowercaseLabel.includes('off') || lowercaseLabel.includes('shut')) {
    return <Power size={16} className="text-[#1E09BB]" />;
  }
  
  // Default icon for other categories
  return <Lightbulb size={16} className="text-[#1E09BB]" />;
};

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
  const iconElement = (
    <div className="flex flex-col items-stretch justify-center w-3">
      {getIconForLabel(title)}
    </div>
  );

  const textElement = (
    <div
      className="min-w-60 text-[#1E09BB] flex-1 shrink basis-[0%] my-auto"
      style={{ textAlign: align }}
    >
      <div className="text-lg font-ibm-plex leading-[1.1] tracking-[0.9px] uppercase">
        {title}
      </div>
      {description && (
        <div className="text-sm font-ibm-plex leading-[20px] tracking-[0.2px] mt-1">
          {description}
        </div>
      )}
    </div>
  );

  const buttonContent =
    align === "left" ? (
      <>
        {iconElement}
        {textElement}
      </>
    ) : (
      <>
        {textElement}
        {iconElement}
      </>
    );

  return (
    <button
      className={`flex w-full items-stretch gap-4 px-4 py-1 hover:bg-[#1E09BB]/5 transition-colors`}
      onClick={onClick}
      type="button"
    >
      {buttonContent}
    </button>
  );
};
