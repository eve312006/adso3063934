import Link from "next/link"

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/imgs/juegos.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      
      <div className="hero-content text-center">
        <div className="max-w-md bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
          <img 
            src="/imgs/logo.png" 
            alt="NextJS Game Logo" 
            className="w-full mix-blend-screen brightness-125"
          />

          <div className="text-neutral-content">
            <p className="my-8 text-justify">
              <strong>GameNext.js</strong> is a modern platform to manage and organize
              videogames. Built with Next.js, it uses Prisma, Neon database, and 
              Stack Auth to provide secure authentication, fast performance, and scalable 
              data management.
            </p>
            
            <Link href="signin" className="btn btn-outline btn-primary px-8"> Sign In </Link>
            <Link href="signup" className="btn btn-outline btn-primary px-8"> Sign Up </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}
