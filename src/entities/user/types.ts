export interface UserAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export interface UserCompany {
  name: string
  catchPhrase: string
  bs: string
}

export interface User {
  id: number
  username: string
  email: string
  phone: string
  website: string
  company: UserCompany
  address: UserAddress
}
