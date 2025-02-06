import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'
import { authorType } from './authorType'
import { postType } from './postType'
import cartitem from './cartitem'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,categoryType,blockContentType,authorType,postType ,cartitem,order],

}