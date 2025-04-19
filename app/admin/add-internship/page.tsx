import { AddInternshipForm } from "@/components/add-internship-form"

export default function AddInternshipPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Add Internship</h1>
        <p className="text-muted-foreground mt-2">Add a new internship opportunity for MUJ students.</p>
      </div>
      <AddInternshipForm />
    </div>
  )
}
