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
      //1 E
      {
        label: "Spot Cama Suíte",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cortineiro Suíte",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Abajur Guto",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Abajur Ana",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Balizador Closet",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Música Suite Master", align: "left", type: "standard" },
      //1 D
      {
        label: "Ligar Suite",
        align: "right",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena Dormir",
        align: "right",
        type: "combo",
        description:
          "Desligar Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Abrir Cortinas 1 e 2",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Fechar Cortinas 1 e 2",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Ar Condicionado Suite 21˚",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Desligar Tudo", align: "right", type: "standard" },
    ],
  },

  {
    // KP2
    id: "keypad-2",
    title: "Keypad",
    number: "2",
    subtitle: "Suite Master Esquadria (Guto)",
    buttons: [
      //2 E
      {
        label: "Spot Cama Suíte",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cortineiro Suíte",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Abajur Guto",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Abajur Ana",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Música Varanda",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Música Suite Master", align: "left", type: "standard" },
      //2 D
      {
        label: "Ligar Suite",
        align: "right",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Cena Dormir",
        align: "right",
        type: "combo",
        description:
          "Desligar Luz Quarto + Ligar Música Suite + Balizador Closet + Luz Spot Divisória Banho Master",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Abrir Cortinas 1 e 2",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Fechar Cortinas 1 e 2",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Ar Condicionado Suite 21˚",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Desligar Tudo", align: "right", type: "standard" },
    ],
  },

  {
    // KP3
    id: "keypad-3",
    title: "Keypad",
    number: "3",
    subtitle: "Suite Master",
    buttons: [
      //3 E
      {
        label: "Abrir Cortina Escritório 1 e 2",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Fechar Cortina Escritório 1 e 2",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Música Varanda",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Música Closet",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Música Banho Master",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Música Suite Master", align: "left", type: "standard" },
      //3 D
      {
        label: "Ligar Suite",
        align: "right",
        type: "combo",
        description: "Abajur Guto + Ana + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Ligar Closet",
        align: "right",
        type: "combo",
        description: "Balizador + Prateleira + LED",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Ligar Escritório",
        align: "right",
        type: "combo",
        description: "Estante + Cortineiro + Spot + Bancada + Abajur",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Ar Condicionado Escritório 21˚",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Ar Condicionado Suite 21˚",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Desligar Tudo", align: "right", type: "standard" },
    ],
  },

  {
    // KP4
    id: "keypad-4",
    title: "Keypad",
    number: "4",
    subtitle: "Perto do telão",
    buttons: [
      //4 E
      {
        label: "Hóspedes (todos)",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Spot Lavabo",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Mesa de Centro",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Abajur",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Piscina",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Cortineiro Sala", align: "left", type: "standard" },
      //4 D
      {
        label: "Ligar Estar",
        align: "right",
        type: "combo",
        description: "Spot Lavabo + Mesa de Centro + Cortineiro + Spot Sofa",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Jardim Frente",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Jardim Fundos",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Spot Lavabo + Escada + Escritório",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Ver TV",
        align: "right",
        type: "combo",
        description: "Projetor + Cortineiro + Spot Lavabo",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Desligar Estar (tudo)", align: "right", type: "standard" },
    ],
  },

  {
    // KP5
    id: "keypad-5",
    title: "Keypad",
    number: "5",
    subtitle: "Perto do Mudroom",
    buttons: [
      //5 E
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
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Pendente Jantar",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Mudroom",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Piscina",
        align: "left",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      { label: "Música Jantar - Playlist", align: "left", type: "standard" },
      //5 D
      {
        label: "Ligar Jantar",
        align: "right",
        type: "combo",
        description: "Spot Entrada + Spot Sofá + Pendente Jantar + Cortineiro",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Jardim Frente",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Jardim Fundos",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Pendente Jantar + Cortineiro",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Ar Condicionado 21˚",
        align: "right",
        type: "standard",
        imagePath:
          "https://cdn.builder.io/api/v1/image/assets/b3256afd46b8486c87e857b82cbb46f9/b2488fec856a887fb70e5aa4e605bf369b030cc5?placeholderIfAbsent=true",
      },
      {
        label: "Desligar Tudo",
        align: "right",
        type: "combo",
        description: "Jantar + Música + AC",
      },
    ],
  },

  {
    // KP6
    id: "keypad-6",
    title: "Keypad",
    number: "6",
    subtitle: "Gourmet",
    buttons: [
      //6 E
      { label: "LED Gourmet", align: "left", type: "standard" },
      { label: "Spot Gourmet", align: "left", type: "standard" },
      { label: "Armario Gourmet", align: "left", type: "standard" },
      { label: "Cortineiro Gourmet", align: "left", type: "standard" },
      {
        label: "Música Varanda Gourmet - Playlist",
        align: "left",
        type: "standard",
      },
      { label: "Música Gourmet - Playlist", align: "left", type: "standard" },
      //6 D
      {
        label: "Ligar Gourmet",
        align: "right",
        type: "combo",
        description: "Armário + Cortineiro + Led Gourmet + Spot Gourmet",
      },
      { label: "Jardim Academia", align: "right", type: "standard" },
      { label: "Jardim Fundos", align: "right", type: "standard" },
      {
        label: "Ligar Gourmet Indireto",
        align: "right",
        type: "combo",
        description: "Armário + Cortineiro",
      },
      {
        label: "Varanda Gourmet + Banco Gourmet",
        align: "right",
        type: "standard",
      },
      {
        label: "Desligar Tudo",
        align: "right",
        type: "combo",
        description: "Gourmet + Varanda Gourmet + Música",
      },
    ],
  },

  {
    // KP7
    id: "keypad-7",
    title: "Keypad",
    number: "7",
    subtitle: "Sala de TV",
    buttons: [
      //7 E
      { label: "Entrada Sala", align: "left", type: "standard" },
      { label: "Sofá", align: "left", type: "standard" },
      { label: "Abajur", align: "left", type: "standard" },
      { label: "TV + receiver", align: "left", type: "standard" },
      { label: "Blu ray + receiver", align: "left", type: "standard" },
      { label: "Rádio Sala de TV", align: "left", type: "standard" },
      //7 D
      {
        label: "Ligar Sala de TV",
        align: "right",
        type: "combo",
        description: "Luzes Entrada + Sofá + Abajur",
      },
      {
        label: "Ligar Netflix",
        align: "right",
        type: "combo",
        description: "Luz Abajur + TV + Receiver + Netflix",
      },
      {
        label: "Ligar Bluray",
        align: "right",
        type: "combo",
        description: "Luz Abajur + TV + Receiver + Bluray",
      },
      {
        label: "Ligar Entrada Sala + Abajur",
        align: "right",
        type: "standard",
      },
      { label: "Ar Condicionado 21˚", align: "right", type: "standard" },
      {
        label: "Desligar Tudo",
        align: "right",
        type: "combo",
        description: "Luzes + TV + Receiver + etc",
      },
    ],
  },

  {
    // KP8
    id: "keypad-8",
    title: "Keypad",
    number: "8",
    subtitle: "Cozinha",
    buttons: [
      //8 E
      { label: "Armário Cozinha", align: "left", type: "standard" },
      { label: "Bancada Cozinha", align: "left", type: "standard" },
      { label: "LED Cozinha", align: "left", type: "standard" },
      { label: "Area de Servico", align: "left", type: "standard" },
      { label: "Pendentes sala de jantar", align: "left", type: "standard" },
      { label: "Música Cozinha", align: "left", type: "standard" },
      //8 D
      {
        label: "Ligar Cozinha",
        align: "right",
        type: "combo",
        description: "Armario + Bancada + Led",
      },
      {
        label: "Ligar Area de Servico + Garagem",
        align: "right",
        type: "standard",
      },
      { label: "Jardim Frente", align: "right", type: "standard" },
      { label: "Jardim Fundos", align: "right", type: "standard" },
      { label: "Jardim Academia", align: "right", type: "standard" },
      {
        label: "Desligar Tudo",
        align: "right",
        type: "combo",
        description: "Luzes + Música",
      },
    ],
  },

  {
    // KP9
    id: "keypad-9",
    title: "Keypad",
    number: "9",
    subtitle: "Academia",
    buttons: [
      //9 E
      {
        label: "LED Academia + Cortineiro Academia",
        align: "left",
        type: "standard",
      },
      {
        label: "LED Yoga + Cortineiro Academia",
        align: "left",
        type: "standard",
      },
      { label: "Banco e Arandela Jacuzzi", align: "left", type: "standard" },
      { label: "Sauna", align: "left", type: "standard" },
      { label: "Spot Ducha", align: "left", type: "standard" },
      { label: "Música Academia", align: "left", type: "standard" },
      //9 D
      {
        label: "Ligar Academia",
        align: "right",
        type: "combo",
        description: "LED Academia + Cortineiro Academia + Música Academia",
      },
      {
        label: "Ligar Sauna",
        align: "right",
        type: "combo",
        description: "Banco + Arandela + Sauna + Ducha + Musica Jacuzzi",
      },
      {
        label: "Ligar Tudo",
        align: "right",
        type: "combo",
        description: "Academia + yoga + Banco + Arandela + Sauna + Spot",
      },
      { label: "Jardim Academia", align: "right", type: "standard" },
      {
        label: "Ar Condicionado Academia 21˚",
        align: "right",
        type: "standard",
      },
      {
        label: "Desligar Tudo",
        align: "right",
        type: "combo",
        description: "Luzes + Música",
      },
    ],
  },

  {
    // KP10
    id: "keypad-10",
    title: "Keypad",
    number: "10",
    subtitle: "Yoga",
    buttons: [
      //10 E
      {
        label: "LED Academia + Cortineiro Academia",
        align: "left",
        type: "standard",
      },
      {
        label: "LED Yoga + Cortineiro Academia",
        align: "left",
        type: "standard",
      },
      { label: "Banco e Arandela Jacuzzi", align: "left", type: "standard" },
      { label: "Sauna", align: "left", type: "standard" },
      { label: "Spot Ducha", align: "left", type: "standard" },
      { label: "Música Yoga", align: "left", type: "standard" },
      //10 D
      {
        label: "Ligar Yoga",
        align: "right",
        type: "combo",
        description: "LED Yoga + Cortineiro Academia + Música Yoga",
      },
      {
        label: "Ligar Sauna",
        align: "right",
        type: "combo",
        description: "Banco + Arandela + Sauna + Ducha + Musica Jacuzzi",
      },
      {
        label: "Ligar Tudo",
        align: "right",
        type: "combo",
        description: "Academia + yoga + Banco + Arandela + Sauna + Spot",
      },
      { label: "Jardim Academia", align: "right", type: "standard" },
      { label: "Ar Condicionado Yoga 21˚", align: "right", type: "standard" },
      {
        label: "Desligar Tudo",
        align: "right",
        type: "combo",
        description: "Luzes + Música",
      },
    ],
  },
];
