import { AddInternshipForm } from "@/components/add-internship-form"

export default function AddInternshipPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Add Internship</h1>
        <p className="text-muted-foreground mt-2">Add a new internship opportunity for MUJ students.</p>
      </div>
      <div className="bg-card rounded-lg border shadow-sm p-6 w-full">
        <AddInternshipForm />
      </div>
    </div>
  )
}
