import './App.css'
import {LoginForm} from "@/components/login-form.tsx";

function App() {

  return (
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm md:max-w-3xl">
              <LoginForm/>
          </div>
      </div>
  )
}

export default App
