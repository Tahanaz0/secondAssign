import { defineField, defineType } from "sanity";

export default defineType({
  name: "cartItem",
  title: "Cart Item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
