
# FullBlog Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To get started with this project, follow the instructions below to set up and run the application locally.

### Prerequisites

- Node.js (version 12.0 or higher)
- npm or yarn
- MongoDB (for storing messages)

### Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

Once the dependencies are installed, run the development server using one of the following commands:

```bash
npm run dev
# or
yarn dev
```

After starting the server, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Editing Pages

You can start editing the page by modifying `pages/index.js`. The page will automatically reload as you make changes.

## Features

- **Next.js Pages**: The app is built using Next.js, which enables fast page rendering and automatic routing.
- **API Routes**: The app includes [API routes](https://nextjs.org/docs/api-routes) to handle backend requests such as fetching blog posts and other dynamic content.
- **Static Site Generation (SSG)**: Next.js is used to pre-render pages at build time for fast loading.
- **Markdown Files for Posts**: The blog posts are created by reading content from markdown (.md) files. These files are parsed to extract the content, which is then displayed dynamically on the website.
- **Contact Form**: The project includes a form where users can submit messages. These messages are stored in MongoDB for persistence.

## Folder Structure

- **`components/`**: Contains reusable components like navigation, footer, etc.
- **`lib/`**: Utility functions and other libraries.
- **`pages/`**: This directory contains the pages of the application. Each file corresponds to a route.
- **`posts/`**: Contains blog post data stored in markdown files. The files are parsed to create posts.
- **`public/`**: Contains static assets like images, fonts, etc.
- **`styles/`**: Contains global CSS and component-specific styles.
- **`README.md`**: This file, providing an overview of the project.

## API Routes

You can define API routes inside the `pages/api` directory. For example, to handle fetching blog posts, create a file at `pages/api/posts.js`.

## MongoDB Integration

This project integrates MongoDB to store messages submitted through the contact form. The messages are sent to an API route and then stored in the database for future reference.

## Deploying to Production

You can deploy the application using services like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Simply push the project to a Git repository and connect it to the deployment service for seamless continuous deployment.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is private and not for commercial use.
