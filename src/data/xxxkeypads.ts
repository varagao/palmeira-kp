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

export const keypads: KeypadConfig[] = [
  {
    // KP1
    id: "keypad-1",
    title: "Keypad",
    number: "1",
    subtitle: "Suíte Master Closet",
    buttons: [
      {
        //1E
        label: "Spot Cama Suíte",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        //2E
        label: "Cortineiro Suíte",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/45ca1fe83a76683fda5fb7142f84d30623446069?placeholderIfAbsent=true",
      },
      {
        //3E
        label: "Abajur Guto",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/60f12d74e2856cfc3114cb693d1a3ff8673ecdf0?placeholderIfAbsent=true",
      },
      {
        //4E
        label: "Abajur Ana",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/5578c3ff9419c0eaf194b8ca847ac66cf426d949?placeholderIfAbsent=true",
      },
      {
        //5E
        label: "Balizador Closet",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/1c6c906150767ab68967dcbbbd3c68885a24257e?placeholderIfAbsent=true",
      },
      {
        //6E
        label: "Música Suíte Master",
        align: "left",
        type: "standard",
      },
      {
        //1D
        label: "Ligar Suíte",
        align: "right",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/c8f8f208cb7f3775546ab32ae39e8089e0aaab06?placeholderIfAbsent=true",
      },
      {
        //2D
        label: "Cena Dormir",
        align: "right",
        type: "combo",
        description:
          "Desligar luz do quarto + Ligar Música Suíte + Balizador Closet + Luz Spot Divisória Banho Master",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/2ca21d8d4b817150c1e89208809f3e4f0b19822c?placeholderIfAbsent=true",
      },
      {
        //3D
        label: "Abrir Cortinas 1 e 2",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        //4D
        label: "Fechar Cortinas 1 e 2",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        //5D
        label: "Ar Condicionado Suíte 21˚",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        //6D
        label: "Desligar tudo",
        align: "right",
        type: "standard",
      },
    ],
  },
  // KP2
  {
    id: "keypad-2",
    title: "Keypad",
    number: "2",
    subtitle: "Suite Master Esquadria (Guto)",
    buttons: [
      {
        label: "Ligar Suíte",
        align: "left",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena dormir",
        align: "left",
        type: "combo",
        description:
          "Desliga Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
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
  // KP3
  {
    id: "keypad-3",
    title: "Keypad",
    number: "3",
    subtitle: "Suite Master",
    buttons: [
      {
        label: "Ligar Suíte",
        align: "left",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena dormir",
        align: "left",
        type: "combo",
        description:
          "Desliga Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
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
  // KP4
  {
    id: "keypad-4",
    title: "Keypad",
    number: "4",
    subtitle: "Perto do telão",
    buttons: [
      {
        label: "Ligar Suíte",
        align: "left",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena dormir",
        align: "left",
        type: "combo",
        description:
          "Desliga Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
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
  // KP5
  {
    id: "keypad-5",
    title: "Keypad",
    number: "5",
    subtitle: "Perto do Mudroom",
    buttons: [
      {
        label: "Ligar Suíte",
        align: "left",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena dormir",
        align: "left",
        type: "combo",
        description:
          "Desliga Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
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
  // KP6
  {
    id: "keypad-6",
    title: "Keypad",
    number: "6",
    subtitle: "Gourmet",
    buttons: [
      {
        label: "Ligar Suíte",
        align: "left",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena dormir",
        align: "left",
        type: "combo",
        description:
          "Desliga Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
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
  // KP7
  {
    id: "keypad-7",
    title: "Keypad",
    number: "7",
    subtitle: "Sala de TV",
    buttons: [
      {
        label: "Ligar Suíte",
        align: "left",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena dormir",
        align: "left",
        type: "combo",
        description:
          "Desliga Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
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
  // KP8
  {
    id: "keypad-8",
    title: "Keypad",
    number: "8",
    subtitle: "Cozinha",
    buttons: [
      {
        label: "Ligar Suíte",
        align: "left",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena dormir",
        align: "left",
        type: "combo",
        description:
          "Desliga Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
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
  // KP9
  {
    id: "keypad-9",
    title: "Keypad",
    number: "9",
    subtitle: "Academia",
    buttons: [
      {
        label: "Ligar Suíte",
        align: "left",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena dormir",
        align: "left",
        type: "combo",
        description:
          "Desliga Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
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
  // KP10
  {
    id: "keypad-10",
    title: "Keypad",
    number: "10",
    subtitle: "Yoga",
    buttons: [
      {
        label: "LED Academia + Cortineiro Academia",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "LED Yoga + Cortineiro Academia",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/45ca1fe83a76683fda5fb7142f84d30623446069?placeholderIfAbsent=true",
      },
      {
        label: "Banco e Arandela Jacuzzi",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/60f12d74e2856cfc3114cb693d1a3ff8673ecdf0?placeholderIfAbsent=true",
      },
      {
        label: "Sauna",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/5578c3ff9419c0eaf194b8ca847ac66cf426d949?placeholderIfAbsent=true",
      },
      {
        label: "Spot Ducha",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/1c6c906150767ab68967dcbbbd3c68885a24257e?placeholderIfAbsent=true",
      },
      { label: "Música Yoga", align: "left", type: "standard" },
      {
        label: "Ligar Yoga",
        align: "right",
        type: "combo",
        description: "LED Yoga + Cortineiro Academia + Música Yoga",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/c8f8f208cb7f3775546ab32ae39e8089e0aaab06?placeholderIfAbsent=true",
      },
      {
        label: "Ligar Sauna",
        align: "right",
        type: "combo",
        description: "Banco + Arandela + Sauna + Ducha + Musica Jacuzzi",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/2ca21d8d4b817150c1e89208809f3e4f0b19822c?placeholderIfAbsent=true",
      },
      {
        label: "Ligar Tudo",
        align: "right",
        type: "combo",
        description: "Academia + Yoga + Banco + Arandela + Sauna + Spot",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Jardim Academia",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Ar Condicionado — 21˚",
        align: "right",
        type: "combo",
        description: "Yoga",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/ecce239bcbf03b9a8f4d366d534ad37a42ef8861?placeholderIfAbsent=true",
      },
      {
        label: "Desligar tudo",
        align: "right",
        type: "combo",
        description: "Luzes + Música",
      },
    ],
  },
];

// Add 8 more empty keypad templates
/* for (let i = 5; i <= 10; i++) {
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
 */
