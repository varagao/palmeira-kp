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
    //1
    id: "keypad-1",
    title: "Keypad",
    number: "1",
    subtitle: "Suíte Master Closet",
    buttons: [
      //esquerda
      {
        //1
        label: "Spot",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        //2
        label: "Cortineiro Suíte",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/45ca1fe83a76683fda5fb7142f84d30623446069?placeholderIfAbsent=true",
      },
      {
        //3
        label: "Abajur Guto",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/60f12d74e2856cfc3114cb693d1a3ff8673ecdf0?placeholderIfAbsent=true",
      },
      {
        //4
        label: "Abajur Ana",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/5578c3ff9419c0eaf194b8ca847ac66cf426d949?placeholderIfAbsent=true",
      },
      {
        //5
        label: "Balizador Closet",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/1c6c906150767ab68967dcbbbd3c68885a24257e?placeholderIfAbsent=true",
      },
      {
        //6
        label: "Música Suite Master",
        align: "left",
        type: "standard",
      },
      //direita
      {
        //1
        label: "Ligar Suite",
        align: "right",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/2ca21d8d4b817150c1e89208809f3e4f0b19822c?placeholderIfAbsent=true",
      },
      {
        //2
        label: "Cena Dormir",
        align: "right",
        type: "combo",
        description:
          "Desligar Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        //3
        label: "Abrir Cortinas 1 e 2",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        //4
        label: "Fechar Cortinas 1 e 2",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        //5
        label: "Ar Condicionado Suite (21º)",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        //6
        label: "desligar tudo",
        align: "right",
        type: "combo",
        description: "jantar + música + AC",
      },
    ],
  },
  // Example of a second keypad - create more as needed
  {
    //2
    id: "keypad-2",
    title: "Keypad",
    number: "2",
    subtitle: "Suite Master Esquadria (Guto)",
    buttons: [
      // Left side buttons
      { label: "Luz Principal", align: "left", type: "standard" }, //1
      { label: "Abajur", align: "left", type: "standard" }, //2
      { label: "Cortinas", align: "left", type: "standard" }, //3
      { label: "TV", align: "left", type: "standard" }, //4
      { label: "Som Ambiente", align: "left", type: "standard" }, //5
      { label: "Ar Condicionado", align: "right", type: "standard" }, //6
      // Right side buttons
      {
        label: "Ligar Suite",
        align: "right",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Cena Dormir",
        align: "right",
        type: "combo",
        description:
          "Desligar Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Abrir Cortinas 1 e 2",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Fechar Cortinas 1 e 2",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Ar Condicionado Suite / 21˚",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Desligar Tudo",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
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
