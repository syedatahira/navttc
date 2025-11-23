export interface Product {
  _id: string
  title: string
  slug: string
  price: number
  discount: number
  description: string
  brand: string
  category: string
  subCategory: string
  tags: string[]
  rating: number
  numReviews: number
  thumbnail: string
  images: string[]
  variants: {
    color: string,
    colorCode?: string,
    size: string,
    sku?: string,
    stock: number
  }[]
  isFeatured: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
  finalPrice: number
  totalStock: number
}