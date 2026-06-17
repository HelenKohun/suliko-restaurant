import kakheti from "../assets/Wine/46f90a1ff03e4b38b288e93a1925b11d.jpg"
import kartli from "../assets/Wine/0b0lc7dkewc0x16agid3jzs96010ursd.jpg"
import imeretia from "../assets/Wine/i.jpg"
import rachaLechkhumi from "../assets/Wine/Racha-Lechkhumi_and_Lower_Svaneti,_Georgia_-_panoramio_(1).jpg"
import adjara from "../assets/Wine/Аджария-вид-в-сторону-турецкой-границы.jpg"
import samegrelo from "../assets/Wine/XXL_height.jpg"
import guria from "../assets/Wine/5.-Achi-church-Guria-Region-in-Georgia.jpg"



export const regions = [
  {
    id: "kakheti",
    image: kakheti,
  },
  {
    id: "kartli",
    image: kartli,
  },
  {
    id: "imeretia",
    image: imeretia,
  },
  {
    id: "racha-lechkhumi",
    image: rachaLechkhumi,
  },
  {
    id: "adjara",
    image: adjara,
  },
  {
    id: "samegrelo",
    image: samegrelo,
  },
  {
    id: "guria",
    image: guria,
  },
];

export const types = ["red", "white", "amber", "rose"]

export const styles = ["dry", "semi-dry", "semi-sweet"]



export const winesData = [
  //  CZERWONE 
  { id: 1, name: "Saperavi Qvevri", winery: "Pheasant's Tears", region: "kakheti", type: "red", style: "dry", price: 58, year: 2021 },
  { id: 2, name: "Saperavi Reserva", winery: "Teliani Valley", region: "kakheti", type: "red", style: "dry", price: 72, year: 2020 },
  { id: 3, name: "Saperavi Biologiczne", winery: "Iago's Wine", region: "kartli", type: "red", style: "dry", price: 65, year: 2022 },
  { id: 4, name: "Mukuzani", winery: "Château Mukhrani", region: "kakheti", type: "red", style: "dry", price: 84, year: 2019 },
  { id: 5, name: "Kindzmarauli", winery: "GWS", region: "kakheti", type: "red", style: "semi-sweet", price: 52, year: 2022 },
  { id: 6, name: "Akhasheni", winery: "Tbilvino", region: "kakheti", type: "red", style: "semi-sweet", price: 48, year: 2022 },
  { id: 7, name: "Shavkapito", winery: "Gotsa Family Wines", region: "kartli", type: "red", style: "dry", price: 76, year: 2021 },
  { id: 8, name: "Tavkveri", winery: "Okro's Wines", region: "kartli", type: "red", style: "dry", price: 68, year: 2022 },
  { id: 9, name: "Aleksandrouli", winery: "Dakishvili", region: "racha-lechkhumi", type: "red", style: "semi-sweet", price: 95, year: 2021 },
  { id: 10, name: "Mujuretuli", winery: "Dakishvili", region: "racha-lechkhumi", type: "red", style: "semi-sweet", price: 98, year: 2021 },
  { id: 11, name: "Usakhelouri", winery: "Ramaz Nikoladze", region: "racha-lechkhumi", type: "red", style: "semi-sweet", price: 145, year: 2020 },
  { id: 12, name: "Chkhaveri", winery: "Baia's Wine", region: "guria", type: "red", style: "dry", price: 62, year: 2022 },
  { id: 13, name: "Otskhanuri Sapere", winery: "Nikoladze", region: "imeretia", type: "red", style: "dry", price: 55, year: 2021 },
  { id: 14, name: "Saperavi Noir", winery: "Kvareli Cellar", region: "kakheti", type: "red", style: "dry", price: 88, year: 2019 },
  { id: 15, name: "Cabernet Sauvignon", winery: "Château Mukhrani", region: "kartli", type: "red", style: "dry", price: 92, year: 2020 },
  { id: 16, name: "Saperavi Organiczne", winery: "Schuchmann", region: "kakheti", type: "red", style: "dry", price: 70, year: 2022 },
  { id: 17, name: "Merlot Qvevri", winery: "Tbilvino", region: "kakheti", type: "red", style: "dry", price: 78, year: 2021 },
  { id: 18, name: "Saperavi Grand Reserve", winery: "Teliani Valley", region: "kakheti", type: "red", style: "dry", price: 125, year: 2018 },
  { id: 19, name: "Dzelshavi", winery: "Alaverdi Monastery", region: "kakheti", type: "red", style: "dry", price: 82, year: 2021 },
  { id: 20, name: "Tavkveri Rosso", winery: "Gotsa Family Wines", region: "kartli", type: "red", style: "dry", price: 72, year: 2022 },

  //  BIAŁE
  { id: 21, name: "Rkatsiteli Klasyczne", winery: "Pheasant's Tears", region: "kakheti", type: "white", style: "dry", price: 48, year: 2022 },
  { id: 22, name: "Mtsvane", winery: "Schuchmann", region: "kakheti", type: "white", style: "dry", price: 52, year: 2022 },
  { id: 23, name: "Chinuri", winery: "Iago's Wine", region: "kartli", type: "white", style: "dry", price: 55, year: 2022 },
  { id: 24, name: "Tsitska", winery: "Nikoladze", region: "imeretia", type: "white", style: "dry", price: 45, year: 2022 },
  { id: 25, name: "Tsolikouri", winery: "Baia's Wine", region: "imeretia", type: "white", style: "dry", price: 48, year: 2022 },
  { id: 26, name: "Krakhuna", winery: "Okro's Wines", region: "imeretia", type: "white", style: "dry", price: 58, year: 2021 },
  { id: 27, name: "Kisi", winery: "Teliani Valley", region: "kakheti", type: "white", style: "dry", price: 65, year: 2021 },
  { id: 28, name: "Goruli Mtsvane", winery: "GWS", region: "kartli", type: "white", style: "dry", price: 52, year: 2022 },
  { id: 29, name: "Chkhaveri Białe", winery: "Baia's Wine", region: "guria", type: "white", style: "semi-sweet", price: 58, year: 2022 },
  { id: 30, name: "Rkatsiteli Reserva", winery: "Château Mukhrani", region: "kakheti", type: "white", style: "dry", price: 78, year: 2020 },
  { id: 31, name: "Sauvignon Blanc", winery: "Schuchmann", region: "kakheti", type: "white", style: "dry", price: 55, year: 2022 },
  { id: 32, name: "Pinot Grigio", winery: "Tbilvino", region: "kartli", type: "white", style: "dry", price: 48, year: 2022 },
  { id: 33, name: "Tsitska-Tsolikouri", winery: "Ramaz Nikoladze", region: "imeretia", type: "white", style: "dry", price: 62, year: 2021 },
  { id: 34, name: "Khikhvi", winery: "Alaverdi Monastery", region: "kakheti", type: "white", style: "dry", price: 88, year: 2021 },
  { id: 35, name: "Mtsvane Kakhuri", winery: "Pheasant's Tears", region: "kakheti", type: "white", style: "dry", price: 58, year: 2022 },
  { id: 36, name: "Aladasturi", winery: "Ramaz Nikoladze", region: "guria", type: "white", style: "dry", price: 95, year: 2021 },
  { id: 37, name: "Tsolikouri Biologiczne", winery: "Okro's Wines", region: "imeretia", type: "white", style: "dry", price: 65, year: 2022 },
  { id: 38, name: "Rkatsiteli Organiczne", winery: "Schuchmann", region: "kakheti", type: "white", style: "dry", price: 60, year: 2022 },
  { id: 39, name: "Viognier", winery: "Château Mukhrani", region: "kartli", type: "white", style: "dry", price: 82, year: 2021 },
  { id: 40, name: "Chardonnay Qvevri", winery: "Teliani Valley", region: "kakheti", type: "white", style: "dry", price: 75, year: 2021 },

  //  AMBER 
  { id: 41, name: "Rkatsiteli Amber", winery: "Pheasant's Tears", region: "kakheti", type: "amber", style: "dry", price: 68, year: 2021 },
  { id: 42, name: "Mtsvane Qvevri", winery: "Iago's Wine", region: "kartli", type: "amber", style: "dry", price: 72, year: 2021 },
  { id: 43, name: "Kisi Amber", winery: "Teliani Valley", region: "kakheti", type: "amber", style: "dry", price: 85, year: 2020 },
  { id: 44, name: "Khikhvi Amber", winery: "Alaverdi Monastery", region: "kakheti", type: "amber", style: "dry", price: 95, year: 2020 },
  { id: 45, name: "Chinuri Skin Contact", winery: "Gotsa Family Wines", region: "kartli", type: "amber", style: "dry", price: 78, year: 2022 },
  { id: 46, name: "Tsitska Amber", winery: "Nikoladze", region: "imeretia", type: "amber", style: "dry", price: 62, year: 2021 },
  { id: 47, name: "Tsolikouri Amber", winery: "Okro's Wines", region: "imeretia", type: "amber", style: "dry", price: 65, year: 2021 },
  { id: 48, name: "Rkatsiteli 8 miesięcy", winery: "Schuchmann", region: "kakheti", type: "amber", style: "dry", price: 92, year: 2020 },
  { id: 49, name: "Goruli Mtsvane Amber", winery: "Ramaz Nikoladze", region: "kartli", type: "amber", style: "dry", price: 75, year: 2021 },
  { id: 50, name: "Krakhuna Amber", winery: "Baia's Wine", region: "imeretia", type: "amber", style: "dry", price: 70, year: 2021 },
  { id: 51, name: "Mtsvane Naturalny", winery: "Pheasant's Tears", region: "kakheti", type: "amber", style: "dry", price: 80, year: 2022 },
  { id: 52, name: "Rkatsiteli Klasztorne", winery: "Alaverdi Monastery", region: "kakheti", type: "amber", style: "dry", price: 110, year: 2020 },
  { id: 53, name: "Kisi Grand Amber", winery: "Château Mukhrani", region: "kakheti", type: "amber", style: "dry", price: 135, year: 2019 },
  { id: 54, name: "Chinuri Imerecki", winery: "Iago's Wine", region: "imeretia", type: "amber", style: "dry", price: 68, year: 2022 },
  { id: 55, name: "Tsitska-Tsolikouri Amber", winery: "Okro's Wines", region: "imeretia", type: "amber", style: "dry", price: 72, year: 2021 },
  { id: 56, name: "Aladasturi Amber", winery: "Baia's Wine", region: "guria", type: "amber", style: "dry", price: 115, year: 2020 },
  { id: 57, name: "Saperavi Blanc Amber", winery: "Tbilvino", region: "kakheti", type: "amber", style: "dry", price: 88, year: 2021 },
  { id: 58, name: "Mtsvane Długa Maceracja", winery: "Teliani Valley", region: "kakheti", type: "amber", style: "dry", price: 98, year: 2020 },
  { id: 59, name: "Goruli Amber", winery: "Gotsa Family Wines", region: "kartli", type: "amber", style: "dry", price: 82, year: 2021 },
  { id: 60, name: "Kakhuri Amber Blend", winery: "GWS", region: "kakheti", type: "amber", style: "dry", price: 75, year: 2021 },

  // RÓŻOWE
  { id: 61, name: "Saperavi Rosé", winery: "Tbilvino", region: "kakheti", type: "rose", style: "dry", price: 52, year: 2022 },
  { id: 62, name: "Tavkveri Rosé", winery: "Gotsa Family Wines", region: "kartli", type: "rose", style: "dry", price: 62, year: 2022 },
  { id: 63, name: "Chkhaveri Rosé", winery: "Baia's Wine", region: "guria", type: "rose", style: "semi-dry", price: 58, year: 2022 },
  { id: 64, name: "Shavkapito Rosé", winery: "Iago's Wine", region: "kartli", type: "rose", style: "dry", price: 65, year: 2022 },
  { id: 65, name: "Otskhanuri Rosé", winery: "Nikoladze", region: "imeretia", type: "rose", style: "dry", price: 55, year: 2022 },
  { id: 66, name: "Saperavi Rosé Premium", winery: "Schuchmann", region: "kakheti", type: "rose", style: "dry", price: 72, year: 2022 },
  { id: 67, name: "Aladasturi Rosé", winery: "Ramaz Nikoladze", region: "guria", type: "rose", style: "dry", price: 88, year: 2022 },
  { id: 68, name: "Pinot Noir Rosé", winery: "Château Mukhrani", region: "samegrelo", type: "rose", style: "dry", price: 78, year: 2022 },
  { id: 69, name: "Tavkveri Pétillant", winery: "Pheasant's Tears", region: "kartli", type: "rose", style: "dry", price: 68, year: 2022 },
  { id: 70, name: "Saperavi Różowe Qvevri", winery: "Alaverdi Monastery", region: "kakheti", type: "rose", style: "dry", price: 82, year: 2022 },
  { id: 71, name: "Merlot Rosé", winery: "Teliani Valley", region: "kakheti", type: "rose", style: "semi-dry", price: 55, year: 2022 },
  { id: 72, name: "Chkhaveri Pétillant", winery: "Baia's Wine", region: "guria", type: "rose", style: "dry", price: 72, year: 2022 },
  { id: 73, name: "Saperavi Rosé Organiczne", winery: "GWS", region: "kakheti", type: "rose", style: "dry", price: 62, year: 2022 },
  { id: 74, name: "Blend Różowe", winery: "Okro's Wines", region: "imeretia", type: "rose", style: "dry", price: 60, year: 2022 },
  { id: 75, name: "Tavkveri Naturalny", winery: "Gotsa Family Wines", region: "kartli", type: "rose", style: "dry", price: 75, year: 2022 },
  { id: 76, name: "Shavkapito Rosé Amber", winery: "Iago's Wine", region: "kartli", type: "rose", style: "dry", price: 70, year: 2022 },
  { id: 77, name: "Grenache Rosé", winery: "Schuchmann", region: "kakheti", type: "rose", style: "dry", price: 68, year: 2022 },
  { id: 78, name: "Saperavi Rosé Reserva", winery: "Château Mukhrani", region: "adjara", type: "rose", style: "dry", price: 95, year: 2021 },
  { id: 79, name: "Otskhanuri Rosé Naturalny", winery: "Nikoladze", region: "imeretia", type: "rose", style: "dry", price: 58, year: 2022 },
  { id: 80, name: "Kakhuri Rosé Blend", winery: "Tbilvino", region: "kakheti", type: "rose", style: "dry", price: 50, year: 2022 },
]