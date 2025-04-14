
import { KeypadHeader } from "@/components/keypad/KeypadHeader";
import { KeypadButton } from "@/components/keypad/KeypadButton";
import { KeypadDivider } from "@/components/keypad/KeypadDivider";
import { KeypadComboButton } from "@/components/keypad/KeypadComboButton";

const Index = () => {
  return (
    <div className="justify-center items-stretch bg-[#CCFFF2] flex max-w-[480px] w-full flex-col overflow-hidden mx-auto px-6">
      <KeypadHeader title="Keypad" number="8" subtitle="perto do Mudroom" />

      <main className="justify-center items-stretch border-t-[color:var(--PALM-PRIMA,#1E09BB)] border-b-[color:var(--PALM-PRIMA,#1E09BB)] flex w-full flex-col mt-8 py-6 border-t border-solid border-b">
        <section className="flex w-full flex-col items-stretch justify-center">
          <KeypadButton label="Spot Entrada" align="left" />
          <img src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true" className="object-contain w-full mt-3" />

          <KeypadButton label="Spot Sofá" align="left" />
          <img src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/45ca1fe83a76683fda5fb7142f84d30623446069?placeholderIfAbsent=true" className="object-contain w-full mt-3" />

          <KeypadButton label="Pendente Jantar" align="left" />
          <img src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/60f12d74e2856cfc3114cb693d1a3ff8673ecdf0?placeholderIfAbsent=true" className="object-contain w-full mt-3" />

          <KeypadButton label="Mudroom" align="left" />
          <img src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/5578c3ff9419c0eaf194b8ca847ac66cf426d949?placeholderIfAbsent=true" className="object-contain w-full mt-3" />

          <KeypadButton label="Piscina" align="left" />
          <img src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/1c6c906150767ab68967dcbbbd3c68885a24257e?placeholderIfAbsent=true" className="object-contain w-full mt-3" />

          <KeypadButton label="Música Jantar / Playlist" align="left" />
        </section>

        <KeypadDivider />

        <section className="w-full">
          <KeypadComboButton
            title="combo Jantar"
            description="Spot Entrada + Spot Sofá + Pendente Jantar + Cortinas"
            align="right"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/c8f8f208cb7f3775546ab32ae39e8089e0aaab06?placeholderIfAbsent=true"
            className="aspect-[333.33] object-contain w-full stroke-[0.5px] stroke-[#1E09BB] z-10 mt-3"
          />

          <KeypadButton label="Jardim Frente" align="right" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/2ca21d8d4b817150c1e89208809f3e4f0b19822c?placeholderIfAbsent=true"
            className="aspect-[333.33] object-contain w-full stroke-[0.5px] stroke-[#1E09BB] z-10 mt-3"
          />

          <KeypadButton label="Jardim Fundos" align="right" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true"
            className="aspect-[333.33] object-contain w-full stroke-[0.5px] stroke-[#1E09BB] z-10 mt-3"
          />

          <KeypadButton label="Pendente Jantar + CortinAS" align="right" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true"
            className="aspect-[333.33] object-contain w-full stroke-[0.5px] stroke-[#1E09BB] z-10 mt-3"
          />

          <KeypadButton label="Ar Condicionado 21º" align="right" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true"
            className="aspect-[333.33] object-contain w-full stroke-[0.5px] stroke-[#1E09BB] z-10 mt-3"
          />

          <KeypadComboButton
            title="desligar tudo"
            description="jantar + música + AC"
            align="right"
          />
        </section>
      </main>

      <footer className="text-[#1E09BB] text-center text-lg font-medium leading-[1.1] tracking-[0.9px] uppercase mt-8">
        ALL keypads
      </footer>
    </div>
  );
};

export default Index;
