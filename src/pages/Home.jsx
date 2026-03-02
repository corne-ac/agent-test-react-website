import { useAuth } from '../context/AuthContext'

function Home() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Welcome to React + Supabase</h1>
      {user ? (
        <div>
          <p>You are signed in as: {user.email}</p>
          <p>This is a boilerplate React application integrated with Supabase.</p>
        </div>
      ) : (
        <div>
          <p>This is a boilerplate React application integrated with Supabase.</p>
          <p>You are not signed in. Configure your Supabase credentials to enable authentication.</p>
        </div>
      )}
      
      <div className="info-section">
        <h2>Getting Started</h2>
        <ol>
          <li>Copy <code>.env.example</code> to <code>.env</code></li>
          <li>Add your Supabase project URL and anon key</li>
          <li>Start building your application!</li>
        </ol>
      </div>

      <div className="info-section">
        <h2>What's Included</h2>
        <ul>
          <li>⚡ Vite for fast development and building</li>
          <li>⚛️ React 19 for building UI</li>
          <li>🔐 Supabase client configured and ready</li>
          <li>🔑 Auth context for managing user authentication</li>
          <li>🧭 React Router for navigation</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
