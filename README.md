# Frasers Gourmet Hideaway

A Next.js website for Frasers Gourmet Hideaway, built with [Tina CMS](https://tina.io/) for content editing and [Cloudinary](https://cloudinary.com/) for media. Restaurant staff can update business info, hours, menus, gallery images, and page content with live previews. Changes are saved to git and deployed automatically via Vercel.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tina CMS 3](https://tina.io/) with Tina Cloud
- [Cloudinary](https://cloudinary.com/) media store
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript

## Overview

1. Clone [this repository](https://github.com/ryan3738/frasers-nextjs-site)
2. Create a [Tina Cloud](https://tina.io/docs/tina-cloud/dashboard/) account
3. Create a [Cloudinary](https://cloudinary.com/documentation/how_to_integrate_cloudinary) account
4. Run a local development instance
5. Deploy to [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## Getting started

### Clone the repository and install dependencies

```bash
git clone https://github.com/ryan3738/frasers-nextjs-site.git
cd frasers-nextjs-site
pnpm install
```

### Create a Tina Cloud account and enter your credentials

1. Create a new GitHub repository and push the project to it
2. Create a [Tina Cloud](https://tina.io/docs/tina-cloud/dashboard/) account
3. Create a new [Tina project](https://app.tina.io/projects) and connect it to your GitHub repository
4. Copy `.env.example` to `.env` and add your Tina credentials:

```env
# Tina settings
NEXT_PUBLIC_TINA_CLIENT_ID="TINA CLIENT ID"
TINA_TOKEN="TINA TOKEN"
TINA_INDEXER_TOKEN="TINA INDEXER TOKEN"

# Branch Tina reads from and writes to
NEXT_PUBLIC_EDIT_BRANCH="main"

# 0 = save to the remote git branch
# 1 = save to the local git branch
NEXT_PUBLIC_USE_LOCAL_CLIENT=1
```

`TINA_TOKEN` and `TINA_INDEXER_TOKEN` are available in your Tina Cloud project settings.

### Create a Cloudinary account and enter your credentials

1. Create a [Cloudinary](https://cloudinary.com/documentation/how_to_integrate_cloudinary) account
2. Add your Cloudinary credentials to `.env`:

```env
# Cloudinary API keys
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="CLOUDINARY CLOUD NAME"
NEXT_PUBLIC_CLOUDINARY_API_KEY="CLOUDINARY API KEY"
CLOUDINARY_API_SECRET="API SECRET"
```

### Run a local instance

```bash
pnpm dev
```

This starts Tina CMS and Next.js together on **https://localhost:3100** (HTTPS is enabled for local development).

- **Site:** https://localhost:3100
- **Admin panel:** https://localhost:3100/admin — log in to edit content. Click any document in a collection (Business Info, Menus, Homepage Cards, etc.) to open the **visual editor** with a live site preview iframe. Edits update in the preview as you type; press save to commit changes to the git branch configured in your environment variables. Blog Posts use the form-only editor (no public page yet).
- **Log out:** https://localhost:3100/admin/logout

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Tina CMS and Next.js dev server (port 3100, HTTPS) |
| `pnpm build` | Build Tina admin and production Next.js app |
| `pnpm build:local` | Build locally without Tina Cloud checks |
| `pnpm start` | Build and start the production server |
| `pnpm lint` | Run ESLint |
| `pnpm ts-lint` | Run TypeScript in watch mode |

## Project structure

```
app/                  # Next.js App Router pages and components
content/              # Tina CMS content (JSON and MDX)
  gallery/            # Gallery grid images
  info/               # Business name, contact, hours
  menus/              # Menu definitions
  highlight/            # Homepage cards (MDX)
  global/             # Navigation, theme, meta, footer
tina/                 # Tina CMS schema and config
pages/api/cloudinary/ # Cloudinary media API route
public/               # Static assets and generated Tina admin
```

Content collections are defined in `tina/schema.ts`:

- **Gallery Grid** — photo gallery layout and images
- **Business Info** — name, phone, email, address, hours
- **Menu** — menu title, sections, items, and availability
- **Homepage Card** — MDX image + text blocks on the home page
- **Blog Posts** — MDX blog content
- **Global** — site navigation, theme, SEO meta, footer

## Deploy

CI/CD via GitHub and Vercel is recommended so content changes deploy automatically (typically within a minute).

1. Create a [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) account
2. Create a [new project](https://vercel.com/new) linked to your GitHub repository
3. Add these environment variables in Vercel (**Production**, **Preview**, and **Development** — not just Production):

| Variable | Notes |
| --- | --- |
| `NEXT_PUBLIC_TINA_CLIENT_ID` | From [app.tina.io](https://app.tina.io) → Project → Client ID |
| `TINA_TOKEN` | Read-only **Content** token from Project → Tokens |
| `TINA_INDEXER_TOKEN` | **Search** token from Project → Tokens |
| `NEXT_PUBLIC_USE_LOCAL_CLIENT` | Set to `0` |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `NEXT_PUBLIC_CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

4. **Branch access (fixes `not authorized to access branch`):** Vercel builds use the deployed git branch (e.g. `staging`). In Tina Cloud → Project → **Tokens**, ensure your Content token includes that branch (or use **All branches**). In the project dashboard, confirm the branch is indexed (push a commit to `tina/tina-lock.json` on that branch if needed).

5. **Optional:** If you only want Tina to read `main` on every Vercel deploy, set `NEXT_PUBLIC_TINA_BRANCH=main` in Vercel.

## Next steps

- Add content types in `tina/schema.ts` to extend what editors can manage
- Invite additional users in Tina Cloud to grant editing access
- Query content in Next.js — see [Tina's Next.js data fetching guide](https://tina.io/guides/tinacms/nextjs-data-fetching/guide/#example-fetching-content-through-getstaticpaths)
