import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to access the admin dashboard</p>
        </div>
        <SignIn 
          afterSignInUrl="/admin/add-internship"
          redirectUrl="/admin/add-internship"
        />
      </div>
    </div>
  )
}