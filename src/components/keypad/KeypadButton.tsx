import React from "react";
import {
  Lightbulb,
  Music,
  Wind,
  Power,
  ListChecks,
  CloudSun,
} from "lucide-react";

interface KeypadButtonProps {
  label: string;
  align?: "left" | "right";
  onClick?: () => void;
}

const getIconForLabel = (label: string) => {
  const lowercaseLabel = label.toLowerCase();
  if (
    lowercaseLabel.includes("+") ||
    lowercaseLabel.includes("combo") ||
    lowercaseLabel.includes("cena")
  ) {
    return <ListChecks size={16} className="text-[#1E09BB]" />;
  }

  if (
    lowercaseLabel.includes("spot") ||
    lowercaseLabel.includes("luz") ||
    lowercaseLabel.includes("abajur") ||
    lowercaseLabel.includes("led")
  ) {
    return <Lightbulb size={16} className="text-[#1E09BB]" />;
  }
  if (
    lowercaseLabel.includes("música") ||
    lowercaseLabel.includes("music") ||
    lowercaseLabel.includes("som")
  ) {
    return <Music size={16} className="text-[#1E09BB]" />;
  }
  if (lowercaseLabel.includes("ar condicionado")) {
    return <Wind size={16} className="text-[#1E09BB]" />;
  }
  if (
    lowercaseLabel.includes("janela") ||
    lowercaseLabel.includes("window") ||
    lowercaseLabel.includes("cortin")
  ) {
    return <CloudSun size={16} className="text-[#1E09BB]" />;
  }
  if (
    lowercaseLabel.includes("desligar") ||
    lowercaseLabel.includes("off") ||
    lowercaseLabel.includes("shut")
  ) {
    return <Power size={16} className="text-[#1E09BB]" />;
  }

  // Default icon for other categories
  return <Lightbulb size={16} className="text-[#1E09BB]" />;
};

export const KeypadButton = ({
  label,
  align = "left",
  onClick,
}: KeypadButtonProps) => {
  const iconElement = (
    <div className="flex flex-col items-stretch justify-center w-3">
      {getIconForLabel(label)}
    </div>
  );

  const textElement = (
    <div
      className={`min-w-60 text-lg text-[#1E09BB] font-ibm-plex uppercase tracking-[0.9px] leading-[1.1] flex-1 shrink basis-[0%] my-auto ${
        align === "right" ? "text-right" : "text-left"
      }`}
    >
      {label}
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
