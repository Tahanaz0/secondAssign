import { defineField, defineType } from "sanity";

export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      validation: (Rule: any) => Rule.required().email(),
    }),
    defineField({
      name: "cartItems",
      title: "Cart Items",
      type: "array",
      of: [{ type: "reference", to: [{ type: "cartItem" }] }],
    }),
    defineField({
      name: "subtotal",
      title: "Subtotal",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (Rule: any) => Rule.optional(),
    }),
    defineField({
      name: "deliveryFee",
      title: "Delivery Fee",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "promoCode",
      title: "Promo Code",
      type: "string",
      validation: (Rule: any) => Rule.optional(),
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "createdAt",
      title: "Order Date",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
