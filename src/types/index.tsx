// src/types/index.ts
export interface MenuItem {
    id: string
    name: string
    description: string
    price: string
    category: string
    image?: string
    vegetarian: boolean
    allergens?: string[]
  }
  
  export interface Reservation {
    id: string
    name: string
    email: string
    phone: string
    date: string
    time: string
    guests: number
    message?: string
    status: 'pending' | 'confirmed' | 'cancelled'
  }
  
  export interface GalleryImage {
    id: string
    url: string
    alt: string
    category: 'platos' | 'ambiente' | 'eventos'
  }