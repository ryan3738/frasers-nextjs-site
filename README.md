# Next.js Restaurant Website

A Next.js website for Fraser's Gourmet Hideaway Restaurant with a CMS and Authentication. This website is coded using Next.js, React.js, Typescript, and Tina CMS.

This site is mobile responsive and offers the ability to update business info, hours, menu items, and the photo gallery.
# Getting Started
## Clone the repository and install dependencies
1. Clone the repository locally
2. Navigate to the root directory
3. Install dependencies

        npm install
        # or
        yarn

## Create a Tina CMS account and setup your credentials
Go here for instructions on setting up a Tina account: https://tina.io/docs/tina-cloud/dashboard/
1. Create a Tina Cloud account
2. Create a new Tina project
3. Take the .env.example file and rename it to .env
4. Place your Tina CMS credentials in the .env file

        # TINA SETTINGS
        NEXT_PUBLIC_TINA_CLIENT_ID="TINA CLIENT ID"

        # Select the branch you want Tina to use to read and write data
        NEXT_PUBLIC_EDIT_BRANCH="main"

        # 0 = save to the remote git branch
        # 1 = save to the local git branch
        NEXT_PUBLIC_USE_LOCAL_CLIENT=1

## Create a Cloudinary account and setup your credentials
Go here for instructions on setting up a cloudinary account: https://cloudinary.com/documentation/how_to_integrate_cloudinary
1. Create a Cloudinary account
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
3. Go to http://localhost:3000/admin to login to the admin panel
4. Go to http://localhost:3000/admin/logout to log out of the cms      


# Make changes to the website info using the CMS
![Make edits to Tina Cms in real time](/assets/images/cms-site-edits.jpg)
<figcaption>When logged in the cms is availabe as a side drawer. Changes are displayed live on the website. Once the save button is pressed changes will be saved to the git branch and location based on the settings in the .env file.</figcaption>

# Deploy

The best way to deploy this website is through a CI/CD pipeline so that changes can be automatically deployed to the production website after they are saved.

Github and vercel make a great option to deploy this site. Most changes will be deployed in around a minute. [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

1. If you haven't already, create a new Github repository and push the project to the repository.
2. Create a Vercel account
3. Create a new project with Vercel and link it to your Github repository
4. Add the .env variables to the Vercel project to link to your Tina Cloud and Cloudinary accounts

# Next Steps
* Create additional items in the ./tina/schmes.ts file to add more content to the website.
* Add additional users to your Tina Cloud account to give them the ability to edit the website.
