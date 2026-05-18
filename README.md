# FOREST — Digital Restaurant Menu

A static, fast-loading digital menu for **FOREST** (מטבח ים תיכוני מודרני), built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
npm start
```

Deployable to Vercel with zero configuration — just push the repo and connect it.

## Adding or Editing Menu Items

All menu data lives in **`/data/menu.ts`** as a typed array. No database required.

### Edit an existing dish

Find the dish by `id` in `menu.ts` and change any field:

```ts
{
  id: "kabab-skewer",
  name: "שיפוד קבב",
  description: "תוספת תיאור", // add or edit description
  price: "45",                 // update price
  image: "/menu/kabab-skewer.jpg", // add image path
}
```

### Add a new dish

Add a new object to the `dishes` array of the relevant category:

```ts
{
  id: "my-new-dish",       // unique kebab-case id
  name: "שם המנה",
  description: "תיאור קצר",
  price: "55",
  image: "/menu/my-new-dish.jpg", // optional
}
```

### Add a new category

Add a new object to the `menuData` array at the bottom of `menu.ts`, then add its `id` to either `rightColIds` or `leftColIds` in `app/page.tsx` to place it in the correct column.

## Adding Dish Photos

1. Place the photo file in `/public/menu/` — e.g. `/public/menu/kabab-skewer.jpg`.
2. Add `image: "/menu/kabab-skewer.jpg"` to the dish in `menu.ts`.
3. Recommended image size: **400×400px**, square crop, JPEG or WebP.

If no image is set, a soft beige placeholder with a camera icon is shown automatically.

## Design System

| Token | Value |
|---|---|
| Background | `#F7F1E8` (warm cream) |
| Accent/pill | `#E8DCC4` (soft beige/tan) |
| Text | `#1F1A14` (deep charcoal) |
| Serif font | Cormorant Garamond (logo, category headers) |
| Body font | Heebo (Hebrew dish names, descriptions) |

## Project Structure

```
/app
  layout.tsx         — RTL root layout, Google Fonts
  page.tsx           — Landing hero + full menu
  globals.css        — Base styles + paper texture
/components
  Logo.tsx           — FOREST SVG wordmark with pine-cone O
  Hero.tsx           — Full-screen landing section
  CategoryHeader.tsx — Beige pill header with botanical flourishes
  DishRow.tsx        — Dish name + leader + price + image
  BotanicalCorner.tsx — Reusable pine-branch SVG corner art
  StickyCategoryNav.tsx — Scroll-triggered sticky nav
/data
  menu.ts            — All menu content (typed)
/public/menu/        — Dish photos go here
```
