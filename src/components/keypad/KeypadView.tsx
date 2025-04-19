
import React from 'react';
import { KeypadHeader } from "@/components/keypad/KeypadHeader";
import { KeypadButton } from "@/components/keypad/KeypadButton";
import { KeypadDivider } from "@/components/keypad/KeypadDivider";
import { KeypadComboButton } from "@/components/keypad/KeypadComboButton";
import { KeypadConfig, KeypadButton as KeypadButtonType } from "@/data/keypads";
import { useNavigate } from "react-router-dom";

interface KeypadViewProps {
  keypad: KeypadConfig;
}

export const KeypadView: React.FC<KeypadViewProps> = ({ keypad }) => {
  const navigate = useNavigate();
  
  // Split buttons into left and right aligned groups
  const leftButtons = keypad.buttons.filter(button => button.align === "left");
  const rightButtons = keypad.buttons.filter(button => button.align === "right");
  
  const handleNavigateAllKeypads = () => {
    navigate('/keypads');
  };

  // Render a button and its image if available
  const renderButton = (button: KeypadButtonType, index: number) => {
    return (
      <div key={`button-container-${index}`} className="mb-4">
        {button.type === "combo" ? (
          <KeypadComboButton
            title={button.label}
            description={button.description || ""}
            align={button.align}
          />
        ) : (
          <KeypadButton
            label={button.label}
            align={button.align}
          />
        )}
        
        {button.imagePath && (
          <img 
            src={button.imagePath} 
            alt={button.label}
            className="object-contain w-full mt-3"
          />
        )}
      </div>
    );
  };

  return (
    <div className="justify-center items-stretch bg-[#CCFFF2] flex max-w-[480px] w-full flex-col overflow-hidden mx-auto px-6">
      <KeypadHeader 
        title={keypad.title} 
        number={keypad.number} 
        subtitle={keypad.subtitle} 
      />

      <main className="justify-center items-stretch border-t-[color:var(--PALM-PRIMA,#1E09BB)] border-b-[color:var(--PALM-PRIMA,#1E09BB)] flex w-full flex-col mt-8 py-6 border-t border-solid border-b">
        {leftButtons.length > 0 && (
          <section className="flex w-full flex-col items-stretch justify-center">
            {leftButtons.map(renderButton)}
          </section>
        )}

        {leftButtons.length > 0 && rightButtons.length > 0 && <KeypadDivider />}

        {rightButtons.length > 0 && (
          <section className="w-full">
            {rightButtons.map(renderButton)}
          </section>
        )}
      </main>

      <footer 
        className="text-[#1E09BB] text-center text-lg font-medium leading-[1.1] tracking-[0.9px] uppercase mt-8 cursor-pointer hover:underline"
        onClick={handleNavigateAllKeypads}
      >
        ALL keypads
      </footer>
    </div>
  );
};
