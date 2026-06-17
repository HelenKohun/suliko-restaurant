import coldStarters from "../assets/Menu/pexels-nadin-sh-78971847-14866633.jpg"
import hotStarters from "../assets/Menu/pexels-amanda-lim-5074906-8508107.jpg"
import chaczapuri from "../assets/Menu/pexels-anhelina-vasylyk-734724285-33637724.jpg"
import salat from "../assets/Menu/pexels-valeriya-27294704.jpg";
import soup from "../assets/Menu/pexels-vovkapanda-6213758.jpg";
import mainDish from "../assets/Menu/pexels-nadin-sh-78971847-18363400.jpg"
import grill from "../assets/Menu/pexels-nadin-sh-78971847-20352397.jpg"
import fish from "../assets/Menu/pexels-nano-erdozain-120534369-29149766.jpg"
import desert from "../assets/Menu/pexels-valeriya-1639567.jpg"

export const menuData = [
  {
    id: "zimne-przystawki",
    img: coldStarters,
    imgPosition: "left",
    dishes: [
      { id: 1, price: 24 },
      { id: 2, price: 32 },
      { id: 3, price: 28 },
      { id: 4, price: 36 },
      { id: 5, price: 18 },
      { id: 6, price: 22 },
    ]
  },
  {
    id: "ciepłe-przystawki",
    img: hotStarters,
    imgPosition: "right",
    dishes: [
      { id: 7, price: 28 },
      { id: 8, price: 34 },
      { id: 9, price: 42 },
      { id: 10, price: 30 },
      { id: 11, price: 32 },
      { id: 12, price: 48 },
    ]
  },
  {
    id: "chaczapuri",
    img: chaczapuri,
    imgPosition: "left",
    dishes: [
      { id: 13, price: 44 },
      { id: 14, price: 36 },
      { id: 15, price: 42 },
      { id: 16, price: 40 },
      { id: 17, price: 38 },
    ]
  },
  {
    id: "salaty",
    img: salat,
    imgPosition: "right",
    dishes: [
      { id: 18, price: 26 },
      { id: 19, price: 30 },
      { id: 20, price: 38 },
      { id: 21, price: 32 },
    ]
  },
  {
    id: "zupy",
    img: soup,
    imgPosition: "left",
    dishes: [
      { id: 22, price: 32 },
      { id: 23, price: 28 },
      { id: 24, price: 36 },
      { id: 25, price: 34 },
    ]
  },
  {
    id: "dania-glowne",
    img: mainDish,
    imgPosition: "right",
    dishes: [
      { id: 26, price: 72 },
      { id: 27, price: 68 },
      { id: 28, price: 58 },
      { id: 29, price: 64 },
      { id: 30, price: 62 },
      { id: 31, price: 48 },
      { id: 32, price: 65 },
      { id: 33, price: 75 },
    ]
  },
  {
    id: "grill",
    img: grill,
    imgPosition: "left",
    dishes: [
      { id: 34, price: 58 },
      { id: 35, price: 72 },
      { id: 36, price: 78 },
      { id: 37, price: 52 },
      { id: 38, price: 56 },
      { id: 39, price: 85 },
      { id: 40, price: 68 },
      { id: 41, price: 32 },
      { id: 42, price: 130 },
      { id: 43, price: 240 },
    ]
  },
  {
    id: "ryby",
    img: fish,
    imgPosition: "right",
    dishes: [
      { id: 44, price: 58 },
      { id: 45, price: 62 },
      { id: 46, price: 54 },
      { id: 47, price: 68 },
    ]
  },
  {
    id: "desery",
    img: desert,
    imgPosition: "left",
    dishes: [
      { id: 48, price: 18 },
      { id: 49, price: 22 },
      { id: 50, price: 24 },
      { id: 51, price: 26 },
    ]
  },
]