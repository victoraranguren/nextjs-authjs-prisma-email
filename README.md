# Next.js Authentication Template

A modern authentication solution built with Next.js, NextAuth.js, Prisma, and PostgreSQL that provides email and password authentication for your web applications.

## Features

- 🔐 Email and password authentication
- 📱 Responsive design for all devices
- 🛡️ Session management with JWT
- 🗄️ PostgreSQL database integration
- 📊 Prisma ORM for database operations
- 🔒 Password hashing and security
- 🚪 Protected routes and middleware
- 🔄 User registration and login flows
- 📝 Form validation with Zod
- 🎨 Styled with modern UI components

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or later)
- PostgreSQL
- npm or yarn or pnpm

## Project Structure

```
/
├── prisma/                # Prisma schema and migrations
├── public/                # Static files
├── src/
│   ├── actions/           # Server actions
│   ├── app/               # App router pages
│   │   ├── (auth)/        # Authentication routes
│   │   │   ├── login/     # Login page
│   │   │   ├── register/  # Registration page
│   │   ├── api/           # API routes
│   │   │   ├── auth/      # Auth API routes
│   ├── components/        # UI components
│   ├── lib/               # Utility functions
│   │   ├── db/            # Database client
│   ├── auth.config.ts     # NextAuth configuration
│   ├── auth.ts            # NextAuth setup
│   ├── middleware.ts      # Next.js middleware
├── .env                   # Environment variables
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nextjs-auth-template.git
cd nextjs-auth-template
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory with the following variables:

```env
# Database connection
DATABASE_URL="postgresql://username:password@localhost:5432/your_db_name?schema=public"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

Replace `username`, `password`, and `your_db_name` with your PostgreSQL credentials.

### 4. Set up the database

```bash
# Initialize Prisma
npx prisma generate

# Create and apply migrations
npx prisma migrate dev --name init
```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## Database Connection

When connecting to your PostgreSQL database, use:

```bash
psql -h localhost -U username -d your_db_name
```

If you encounter issues with peer authentication, make sure to specify the host with `-h localhost` to use password authentication.

## Authentication Flow

1. **Registration**: Users can sign up with email and password
2. **Verification**: Email verification (optional, can be enabled)
3. **Login**: Users can log in with their credentials
4. **Session**: Users remain authenticated with JWT sessions
5. **Logout**: Users can sign out, which clears their session

## Configuration

### NextAuth.js Configuration

The authentication setup is defined in `src/auth.ts` and `src/auth.config.ts`. Make sure the PrismaAdapter is properly configured in `auth.ts`:

```typescript
export const { handlers, auth, signIn, signOut } = NextAuth({
adapter: PrismaAdapter(prisma),
...authConfig,
session: { strategy: "jwt" },
});
```

### Prisma Schema

The database schema is defined in `prisma/schema.prisma` and includes models for users, accounts, and sessions.

## Troubleshooting

### Common Issues

- **Database Connection Issues**: Ensure PostgreSQL is running and the connection string is correct
- **Authentication Errors**: Make sure the PrismaAdapter is not commented out in `auth.ts`
- **Session Problems**: Check that `NEXTAUTH_SECRET` is properly set in your environment variables

## Deployment

### Deploying to Vercel

1. Push your code to a Git repository
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

### Setting up a Production Database

For production, consider using managed PostgreSQL services:
- Vercel Postgres
- Supabase
- Railway
- Neon

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [Prisma Documentation](https://www.prisma.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)

## License

MIT
