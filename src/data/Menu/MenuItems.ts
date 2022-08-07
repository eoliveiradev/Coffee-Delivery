import {images} from "."

export type extrasType = "Gelado" | "Com Leite" | "Alcoólico" | ""

export interface CoffeeItemType {
  id: number;
  name: string,
  description: string,
  image: any,
  type: "Tradicional" | "Especial",
  extras?: extrasType[],
  currencySymbol: "R$" | "€" | "US$",
  price: number
}

export const MenuItems: CoffeeItemType[] = [
  {
    "id" : 1,
    "name": "Expresso Tradicional",
    "description": "O tradicional café feito com água quente e gãos moídos",
    "image": images.expresso,
    "type": "Tradicional",
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 2,
    "name": "Expresso Americano",
    "description": "Expresso diluído, menos intenso que o tradicional",
    "image": images.americano,
    "type": "Tradicional",
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 3,
    "name": "Expresso Cremoso",
    "description": "Café expresso tradicional com espuma cremosa",
    "image": images.expressoCremoso,
    "type": "Tradicional",
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 4,
    "name": "Expresso Gelado",
    "description": "Bebida preparada com café expresso e cubos de gelo",
    "image": images.cafeGelado,
    "type": "Tradicional",
    "extras": ["Gelado"],
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 5,
    "name": "Café com Leite",
    "description": "Meio a meio de expresso tradicional com leite vaporizado",
    "image": images.cafeComLeite,
    "type": "Tradicional",
    "extras": ["Com Leite"],
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 6,
    "name": "Latte",
    "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "image": images.latte,
    "type": "Tradicional",
    "extras": ["Com Leite"],
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 7,
    "name": "Capuccino",
    "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
    "image": images.capuccino,
    "type": "Tradicional",
    "extras": ["Com Leite"],
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 8,
    "name": "Macchiato",
    "description": "Café expresso misturado com um pouco de leite quente e espuma",
    "image": images.macchiato,
    "type": "Tradicional",
    "extras": ["Com Leite"],
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 9,
    "name": "Mocaccino",
    "description": "Café expresso com calda de chocolate, pouco leite e espuma",
    "image": images.mochaccino,
    "type": "Tradicional",
    "extras": ["Com Leite"],
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 10,
    "name": "Chocolate Quente",
    "description": "Bebida feita com chocolate dissolvido no leite quente e café",
    "image": images.chocolateQuente,
    "type": "Especial",
    "extras": ["Com Leite"],
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 10,
    "name": "Cubano",
    "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
    "image": images.cubano,
    "type": "Especial",
    "extras": ["Alcoólico", "Gelado"],
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 11,
    "name": "Havaiano",
    "description": "Bebida adocicada preparada com café e leite de coco",
    "image": images.havaiano,
    "type": "Especial",
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 12,
    "name": "Árabe",
    "description": "Bebida preparada com grãos de café árabe e especiarias",
    "image": images.arabe,
    "type": "Especial",
    "currencySymbol": "R$",
    "price": 9.90
  },

  {
    "id": 13,
    "name": "Irlandês",
    "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    "image": images.irlandes,
    "type": "Especial",
    "extras": ["Alcoólico"],
    "currencySymbol": "R$",
    "price": 9.90
  }
]