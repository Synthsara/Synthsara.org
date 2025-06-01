# Synthsara Deployment Guide

## Environment Variables

The following environment variables need to be set in Vercel for the Synthsara platform to function correctly:

### Supabase Configuration
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL (e.g., https://your-project.supabase.co)
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key for server-side operations

### NextAuth Configuration
- `NEXTAUTH_SECRET`: A random string used to encrypt cookies (generate with `openssl rand -base64 32`)
- `NEXTAUTH_URL`: The canonical URL of your site (e.g., https://synthsara.org)

## Supabase Database Setup

Execute the following SQL in your Supabase SQL editor to create the required tables:

```sql
-- Create intentions table
CREATE TABLE intentions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users,
  text text,
  created_at timestamptz DEFAULT now()
);

-- Create powercoin table
CREATE TABLE powercoin (
  user_id uuid PRIMARY KEY REFERENCES auth.users,
  balance integer DEFAULT 0
);
```

## Deployment Steps

1. Create a Supabase project at https://supabase.com
2. Execute the SQL above in the Supabase SQL editor
3. Create a GitHub repository and push the code
4. Create a new project in Vercel linked to your GitHub repo
5. Set the environment variables in Vercel
6. Deploy the project
7. Verify the live URL is working correctly

## Local Development

1. Clone the repository
2. Create a `.env.local` file with the environment variables
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. Open http://localhost:3000 in your browser

## Troubleshooting

- If database connections fail, verify your Supabase credentials
- If authentication issues occur, check your NextAuth configuration
- For deployment issues, check Vercel logs for detailed error messages
