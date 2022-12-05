import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface HouseState {
  slug: string
  minPrice: number
  maxPrice: number
  minSize: number
  maxSize: number
  numApartments: number
  availApartments: number
  has3Room: boolean
  has4Room: boolean
  hasPenthouse: boolean
}

const initialState: HouseState[] = []

const houseSlice = createSlice({
  name: 'house',
  initialState,
  reducers: {
    houseadd: (state, action: PayloadAction<HouseState>) => {
      state.push({
        slug: action.payload.slug,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
        minSize: action.payload.minSize,
        maxSize: action.payload.maxSize,
        numApartments: action.payload.numApartments,
        availApartments: action.payload.availApartments,
        has3Room: action.payload.has3Room,
        has4Room: action.payload.has4Room,
        hasPenthouse: action.payload.hasPenthouse
      })
    },
    housechange: (state, action: PayloadAction<HouseState>) => {
      const house = {
        slug: action.payload.slug,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
        minSize: action.payload.minSize,
        maxSize: action.payload.maxSize,
        numApartments: action.payload.numApartments,
        availApartments: action.payload.availApartments,
        has3Room: action.payload.has3Room,
        has4Room: action.payload.has4Room,
        hasPenthouse: action.payload.hasPenthouse
      }
      const index = state.findIndex(element => element.slug === house.slug)
      state[index] = house
    }
  }
})

export const {houseadd, housechange} = houseSlice.actions

export default houseSlice.reducer
