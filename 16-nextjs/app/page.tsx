import Link from "next/link"
export  default function Home() {
  return (
    <div className="bg-pink-500 min-h-dvh flex flex-col gap-4 p-4 items-center justify-center">
      <h2 className="text-4xl text-white">Hello Next JS</h2>
      <p className="justify-center">
        This is a simple Next.js application with Tailwind CSS and DaisyUI.
      </p>
      <Link  href="signin" className="btn btn-outline">Sign In</Link>
    </div>
  )
}