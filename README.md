## Ticketing App

Description
This is a small ticketing app I created to dive deeper into Next.js and explore the possibilities it offers with Server-Side Rendering (SSR). As I worked on it, I found myself hooked by Next.js and the versatility it brings, especially with its seamless integration of SSR. This project also connects to a database and includes a custom user authentication system (though it's probably not the most optimal approach).

I developed this app in my spare time, and it has been a great learning experience. I’m now convinced that Next.js is my favorite framework for JavaScript development! Along the way, I also experimented with various tools and libraries, both new and familiar, such as Prisma for database management, Tailwind CSS and shadcn/ui for styling, and Recharts for visualizations.

## Functionalities

This project includes the following features:

- Basic CRUD operations for managing tickets.
- A data table for displaying users and tickets.
- Login and Logout functionality for user authentication.
- Theme selection for light/dark mode.
- Routing and Protected Routes for managing access.

## Tools and Libraries Used

Here’s a list of some of some tools and libraries I used in this project:

- Next.js – for the core framework and SSR.
- Prisma – for database ORM and querying.
- Zod – for schema validation.
- Tailwind CSS – for utility-first CSS styling.
- shadcn/ui – for quickly adding UI components.
- Recharts – for rendering charts in the dashboard.
- bcryptjs – for password hashing and authentication.

## How to Run the Project

Clone the repository:

bash
Copy code
git clone <your-repo-url>
Install dependencies:

bash
Copy code
npm install
Set up the database (using Prisma):

bash
Copy code
npx prisma migrate dev
Run the development server:

bash
Copy code
npm run dev
Future Improvements
Optimize user authentication flow.
Improve overall UI/UX.
Add unit tests.
Further optimize the code

Such a great play I had!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

npx prisma migrate dev
