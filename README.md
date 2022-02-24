# Next.js Restaurant Website

A Next.js Jamstack website for Restaurants utilizing Tina CMS and Authentication. Users can update business info, hours, menu items, and the photo gallery with live previews. All changes are recorded in the git history and quickly deployed to the production site.

# Overview
1. Clone [this repository](https://github.com/ryan3738/frasers-nextjs-site)
2. Create a [Tina Cloud](https://tina.io/docs/tina-cloud/dashboard/) account
3. Create a [Cloudinary](https://cloudinary.com/documentation/how_to_integrate_cloudinary) account
4. Run a local development instance
5. Deploy to [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

# Getting Started
## Clone the repository and install dependencies
1. Clone the [repository](https://github.com/ryan3738/frasers-nextjs-site) locally
2. Navigate to the root directory
3. Install dependencies

        npm install
        # or
        yarn

## Create a Tina Cloud account and enter your credentials
1. Create a new GitHub repository and push the project to the repository
2. Create a [Tina Cloud](https://tina.io/docs/tina-cloud/dashboard/) account
3. Create a new [Tina project](https://app.tina.io/projects) and connect the Tina project to your GitHub repository
4. Take the [.env.example](/.env.example) file and rename it to .env
5. Place your Tina CMS credentials in the .env file

        # TINA SETTINGS
        NEXT_PUBLIC_TINA_CLIENT_ID="TINA CLIENT ID"

        # Select the branch you want Tina to use to read and write data
        NEXT_PUBLIC_EDIT_BRANCH="main"

        # 0 = save to the remote git branch
        # 1 = save to the local git branch
        NEXT_PUBLIC_USE_LOCAL_CLIENT=1

## Create a Cloudinary account and enter your credentials
1. Create a [Cloudinary](https://cloudinary.com/documentation/how_to_integrate_cloudinary) account
2. Place your Cloudinary credentials in the .env file

        # Cloudinary API keys
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="CLOUDINARY CLOUD NAME"
        NEXT_PUBLIC_CLOUDINARY_API_KEY="CLOUDINARY API KEY"
        CLOUDINARY_API_SECRET="API SECRET"


## Run a local instance of the site
1. Run the development server
   
        npm run dev
        # or
        yarn dev

2. Open http://localhost:3000 with your browser to see the website
3. Go to http://localhost:3000/admin to log in to the admin panel. When logged in, the cms is available as a side drawer. Changes are held in memory and displayed live on the website. After pressing the save button, changes are committed to the appropriate git branch based on the environment variables. ![Make edits to Tina Cms in real time](/assets/images/cms-site-edits.jpg)
4. Go to http://localhost:3000/admin/logout to log out of the cms      

# Deploy

CI/CD is ideal so that changes are automatically deployed to the production site. GitHub and Vercel make a great option for this case, and most changes take around a minute to deploy. [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Create a [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) account
2. Create a [new project](https://vercel.com/new) with Vercel and link it to your GitHub repository![Vercel new project page](/assets/images/vercel-deploy.jpg)
3. Add the environment variables to the Vercel project to link to your Tina Cloud and Cloudinary accounts.


# Next Steps
* Create additional items in the ./tina/schmes.ts file to add more content types to the website.
* Add additional users to your Tina Cloud account to give them the ability to edit the website.
