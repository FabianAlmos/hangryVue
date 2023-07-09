export type tokenPairResponse = {
    accessToken: string
    refreshToken: string
} & Response

export type userResponse = {
    id: string
    firstName: string
    lastName: string
    email: string
} & Response

type addressesResponse = {
    id: number
    userID: number
    isActive: boolean
    city: string
    street: string
    houseNumber: string
    zipCode: string
    floorNumber: string
    apartament: string
} & Response

export type addressesCollectionResponse = {
    addressess: addressesResponse[]
} & Response

type workingHours = {
    opening: string
    closing: string
}

type supplierResponse = {
    id: number
    type: string
    image: string
    name: string
    deliveryFee: number
    workingHours: workingHours
} & Response

export type supplierCollectionResponse = {
    suppliers: supplierResponse[]
} & Response

type menuResponse = {
    id: number
    image: string
    supplierID: number
    categoryID: number
    price: number
} & Response

export type menuCollectionResponse = {
    menus: menuResponse[]
} & Response

type orderResponse = {
    id: number
    userID: number
    supplierID: number
    driverID: number
    statusID: number
    note: string
    createdAt: string
    deliveredAt: string
} & Response

export type orderCollectionResponse = {
    orders: orderResponse[]
} & Response