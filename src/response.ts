export interface ProductInterface {
  id: number;
  img: string;
  price: number;
  name: string;
  group: "racao" | "remedio" | "brinquedo" | "acessorio";
}

export const forYou: ProductInterface[] = [
  {
    id: 1,
    img: "/src/assets/products/doguinho.png",
    price: 90.0,
    name: "Coleira Peitoral",
    group: "acessorio",
  },
  {
    id: 2,
    img: "/src/assets/products/coleira.png",
    price: 90.0,
    name: "Coleira Peitoral",
    group: "acessorio",
  },
  {
    id: 3,
    img: "/src/assets/products/doguinho2.png",
    price: 90.0,
    name: "Coleira Peitoral",
    group: "acessorio",
  },
  {
    id: 4,
    img: "/src/assets/products/doguinho3.png",
    price: 90.0,
    name: "Coleira Antilatido educativa sem choque",
    group: "acessorio",
  },
];

export const products: ProductInterface[] = [
  {
    id: 1,
    img: "/src/assets/products/doguinho.png",
    price: 90.0,
    name: "Coleira Peitoral",
    group: "acessorio",
  },
  {
    id: 2,
    img: "/src/assets/products/coleira.png",
    price: 26.0,
    name: "Coleira Peitoral",
    group: "acessorio",
  },
  {
    id: 3,
    img: "/src/assets/products/doguinho2.png",
    price: 55.0,
    name: "Coleira Peitoral",
    group: "acessorio",
  },
  {
    id: 4,
    img: "/src/assets/products/doguinho3.png",
    price: 130.0,
    name: "Coleira Antilatido educativa sem choque",
    group: "acessorio",
  },
  {
    id: 5,
    img: "/src/assets/products/pneu.png",
    price: 18.0,
    name: "Pneu Off Road, Pvc Flex",
    group: "brinquedo",
  },
  {
    id: 6,
    img: "/src/assets/products/doguinho4.png",
    price: 20.0,
    name: "Bola De Tênis Brinquedo Para Animal",
    group: "brinquedo",
  },
  {
    id: 7,
    img: "/src/assets/products/brinquedo.png",
    price: 40.0,
    name: "Brinquedo Mordedor Interativo Ca",
    group: "brinquedo",
  },
  {
    id: 8,
    img: "/src/assets/products/brinquedo2.png",
    price: 40.0,
    name: "Mordedor Bonequinha Pet Games",
    group: "brinquedo",
  },
  {
    id: 9,
    img: "/src/assets/products/racao.png",
    price: 132.0,
    name: "Ração Seca Nutrilus Pro + Frango",
    group: "racao",
  },
  {
    id: 10,
    img: "/src/assets/products/racao2.png",
    price: 150.0,
    name: "Ração Pedigree Nutrição Essen",
    group: "racao",
  },
  {
    id: 11,
    img: "/src/assets/products/racao3.png",
    price: 75.0,
    name: "Ração Seca Espoleta Carne para cães",
    group: "racao",
  },
  {
    id: 12,
    img: "/src/assets/products/racao4.png",
    price: 99.99,
    name: "Ração Special Dog Premium",
    group: "racao",
  },
  {
    id: 13,
    img: "/src/assets/products/antena.png",
    price: 50.0,
    name: "Novo Colar Elizabetano Veterinário",
    group: "remedio",
  },
  {
    id: 14,
    img: "/src/assets/products/remedio.png",
    price: 99.99,
    name: "Mega Calm - 60 Comprimidos",
    group: "remedio",
  },
  {
    id: 15,
    img: "/src/assets/products/remedio2.png",
    price: 44.9,
    name: "Petisco Calmante para Cachorro",
    group: "remedio",
  },
  {
    id: 16,
    img: "/src/assets/products/remedio3.png",
    price: 99.99,
    name: "Suplemento Alimentar Nutrafases",
    group: "remedio",
  },
];
