import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import baguetteImage from "../assets/images/baguette.jpg";
import farmingBreadImage from "../assets/images/farmingBread.jpg";
import mixedGrainImage from "../assets/images/mixedGrain.jpg";
import milkBreadImage from "../assets/images/milkBread.jpg";
import brownBreadImage from "../assets/images/brownBread.jpg";
import cheeseBreadImage from "../assets/images/cheeseBread.jpg";
import premiumBreadImage from "../assets/images/premiumBread.jpg";
import cinnabonImage from "../assets/images/cinnabon.jpg";
import croissantImage from "../assets/images/croissant.jpg";

interface Bakery {
  name: string;
  description: string;
  price: number;
  image: string;
}

export const bakeries: Bakery[] = [
  {
    name: "Baguette",
    description: "A French classic with a crispy exterior and soft interior.",
    price: 2.5,
    image: baguetteImage,
  },
  {
    name: "Farming Bread",
    description: "Wholesome bread, a taste of the countryside in every slice.",
    price: 3.0,
    image: farmingBreadImage,
  },
  {
    name: "Mixed Grain",
    description:
      "A delightful blend of grains for a hearty and nutritious experience.",
    price: 3.5,
    image: mixedGrainImage,
  },
  {
    name: "Milk Bread",
    description:
      "Soft and fluffy bread infused with the richness of creamy milk.",
    price: 2.8,
    image: milkBreadImage,
  },
  {
    name: "Brown Bread",
    description:
      "Nutrient-packed brown bread, a healthy choice for your daily needs.",
    price: 3.2,
    image: brownBreadImage,
  },
  {
    name: "Cheese Bread",
    description:
      "Irresistible cheese-infused bread, a savory twist to your day.",
    price: 4.0,
    image: cheeseBreadImage,
  },
  {
    name: "Premium Bread",
    description:
      "Exquisite and luxurious bread, a treat for the discerning palate.",
    price: 5.0,
    image: premiumBreadImage,
  },
  {
    name: "Cinnabon",
    description:
      "Sweet cinnamon bliss rolled into every delightful Cinnabon creation.",
    price: 4.5,
    image: cinnabonImage,
  },
  {
    name: "Croissant",
    description:
      "Flaky layers of perfection, a French pastry masterpiece in every bite.",
    price: 3.8,
    image: croissantImage,
  },
];

// Define the initial state using the bakeries array
const initialState: { [name: string]: number | null} = (() => {
  let state: {[name: string]: number | null} = {};
  for (let bakery of bakeries) {
    state[bakery.name] = null;
  }
  return state;
})();

export const cartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      if (state[action.payload] === null) {
        state[action.payload] = 1
      } else {
        state[action.payload]! += 1
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      if (state[action.payload] === null) {
        state[action.payload] = 0
      } else {
        state[action.payload]! -= 1
      }
    },
    changeValue: (state, action: PayloadAction<{name: string, value: number}>) => {
      state[action.payload.name] = action.payload.value
    },
    cleanUp: (state) => {
      for (let key in state) {
        if (state[key] === 0)
          state[key] = null
      }
    },
    finishOrder: (state) => {
      for (let key in state) {
        state[key] = null
      }
    }
  }
})

export const { increment, decrement, changeValue, cleanUp, finishOrder } = cartSlice.actions

export default cartSlice.reducer