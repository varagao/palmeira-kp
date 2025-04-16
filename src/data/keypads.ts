export interface KeypadButton {
  label: string;
  align: "left" | "right";
  type: "standard" | "combo";
  description?: string;
  imagePath?: string;
}

export interface KeypadConfig {
  id: string;
  title: string;
  number: string;
  subtitle: string;
  buttons: KeypadButton[];
}

// Sample data for all keypads
export const keypads: KeypadConfig[] = [
  {
    id: "keypad-1",
    title: "Keypad",
    number: "1",
    subtitle: "Mudroom Mudroom",
    buttons: [
      {
        label: "Spot Entrada",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Spot Sofá",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/45ca1fe83a76683fda5fb7142f84d30623446069?placeholderIfAbsent=true",
      },
      {
        label: "Pendente Jantar",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/60f12d74e2856cfc3114cb693d1a3ff8673ecdf0?placeholderIfAbsent=true",
      },
      {
        label: "Mudroom",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/5578c3ff9419c0eaf194b8ca847ac66cf426d949?placeholderIfAbsent=true",
      },
      {
        label: "Piscina",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/1c6c906150767ab68967dcbbbd3c68885a24257e?placeholderIfAbsent=true",
      },
      { label: "Música Jantar / Playlist", align: "left", type: "standard" },
      {
        label: "combo Jantar",
        align: "right",
        type: "combo",
        description: "Spot Entrada + Spot Sofá + Pendente Jantar + Cortinas",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/c8f8f208cb7f3775546ab32ae39e8089e0aaab06?placeholderIfAbsent=true",
      },
      {
        label: "Jardim Frente",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/2ca21d8d4b817150c1e89208809f3e4f0b19822c?placeholderIfAbsent=true",
      },
      {
        label: "Jardim Fundos",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Pendente Jantar + CortinAS",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Ar Condicionado 21º",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "desligar tudo",
        align: "right",
        type: "combo",
        description: "jantar + música + AC",
      },
    ],
  },
  // Example of a second keypad - create more as needed
  {
    id: "keypad-2",
    title: "Keypad",
    number: "2",
    subtitle: "Sala de Estar",
    buttons: [
      { label: "Luz Principal", align: "left", type: "standard" },
      { label: "Abajur", align: "left", type: "standard" },
      { label: "Cortinas", align: "left", type: "standard" },
      { label: "TV", align: "left", type: "standard" },
      { label: "Som Ambiente", align: "left", type: "standard" },
      { label: "Ar Condicionado", align: "right", type: "standard" },
      {
        label: "Modo Cinema",
        align: "right",
        type: "combo",
        description: "Luz Principal (50%) + Cortinas + TV",
      },
      {
        label: "Modo Leitura",
        align: "right",
        type: "combo",
        description: "Abajur + Cortinas (50%)",
      },
      {
        label: "Desligar Sala",
        align: "right",
        type: "combo",
        description: "Tudo desligado",
      },
    ],
  },
];

// Add 8 more empty keypad templates
for (let i = 3; i <= 10; i++) {
  keypads.push({
    id: `keypad-${i}`,
    title: "Keypad",
    number: `${i}`,
    subtitle: `Local ${i}`,
    buttons: [
      { label: "Botão 1", align: "left", type: "standard" },
      { label: "Botão 2", align: "left", type: "standard" },
      { label: "Botão 3", align: "right", type: "standard" },
    ],
  });
}
