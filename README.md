# React + Supabase Boilerplate

A modern React application boilerplate integrated with Supabase as a Backend-as-a-Service (BaaS). This project is built with Vite for fast development and optimized production builds.

## 🚀 Features

- ⚡️ **Vite** - Fast development server and optimized builds
- ⚛️ **React 19** - Latest React with hooks
- 🔐 **Supabase** - Pre-configured Supabase client for authentication and database
- 🔑 **Auth Context** - Ready-to-use authentication context with user management
- 🧭 **React Router** - Client-side routing configured
- 🎨 **Modern UI** - Clean, responsive design with custom CSS
- 📦 **ESLint** - Code quality and consistency

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- A Supabase account (free tier available at [supabase.com](https://supabase.com))

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd agent-test-react-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Supabase

1. Create a new project in [Supabase](https://app.supabase.com)
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Fill in your Supabase credentials in `.env`:
   ```env
   VITE_SUPABASE_URL=your-project-url-here
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```
   
   You can find these values in your Supabase project settings:
   - Go to Project Settings > API
   - Copy the Project URL and anon/public key

### 4. Run the development server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/       # Reusable React components
│   └── Navbar.jsx   # Navigation component
├── context/         # React context providers
│   └── AuthContext.jsx  # Authentication context
├── lib/             # Utility libraries
│   └── supabase.js  # Supabase client configuration
├── pages/           # Page components
│   └── Home.jsx     # Home page
├── App.jsx          # Main app component with routing
├── App.css          # App styles
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔐 Authentication

The boilerplate includes a pre-configured authentication context (`AuthContext`) that provides:

- `user` - Current authenticated user
- `loading` - Authentication loading state
- `signIn(data)` - Sign in with email/password
- `signUp(data)` - Sign up new user
- `signOut()` - Sign out current user

### Usage Example

```jsx
import { useAuth } from './context/AuthContext'

function MyComponent() {
  const { user, signIn, signOut } = useAuth()
  
  // Use authentication methods
}
```

## 🗄️ Supabase Client

The Supabase client is configured in `src/lib/supabase.js` and can be imported anywhere:

```jsx
import { supabase } from './lib/supabase'

// Use Supabase client for database operations
const { data, error } = await supabase
  .from('your_table')
  .select('*')
```

## 🚀 Deployment

### Build for production

```bash
npm run build
```

The optimized files will be in the `dist` directory.

### Deploy to hosting platforms

This app can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Supabase (with static hosting)
- Any static hosting service

Make sure to set your environment variables in your hosting platform's settings.

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [React Router Documentation](https://reactrouter.com)

## 📄 License

This project is open source and available under the MIT License.

