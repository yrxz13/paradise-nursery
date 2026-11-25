# Paradise Nursery

Paradise Nursery is a React and Redux Toolkit shopping-cart application for an online houseplant shop. The catalog includes 18 plants in three collections. Shoppers can add plants, adjust quantities, remove items, and see the cart total update immediately. Checkout displays a coming-soon message.

## Run locally

Use Node.js 20 or later. Install dependencies and start Vite.

```sh
npm install
npm run dev
```

Run `npm run build` for a production build or `npm run preview` to serve the build locally.

## Assignment files

1. [README.md](README.md)
2. [AboutUs.jsx](src/AboutUs.jsx)
3. [App.css](src/App.css)
4. [App.jsx](src/App.jsx)
5. [CartSlice.jsx](src/CartSlice.jsx)
6. [ProductList.jsx](src/ProductList.jsx)
7. [CartItem.jsx](src/CartItem.jsx)

Plant thumbnails are original botanical illustrations. Cart prices are stored in cents to keep calculations exact. Decreasing an item from one to zero removes it and enables its Add to Cart button again.

Landing photo: [Jason Leung on Unsplash](https://unsplash.com/photos/lush-green-plants-inside-a-greenhouse-GYGL-vk3HIg).
