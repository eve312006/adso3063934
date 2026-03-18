import Link from "next/link";
import { SignIn } from "@stackframe/stack";

export default function SignInPage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/imgs/juegos.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-black/60"></div>
      <div className="hero-content flex-col gap-6">
        <div className="bg-black/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl ring-1 ring-white/20 w-full max-w-md"> 
          <div className="mb-6 text-center">
          </div>
          {/* Componente de Stack Auth */}
          <div className="stack-auth-container">
            <SignIn />
          </div>
        </div>
        <Link 
          className="btn btn-ghost text-white/70 hover:text-white hover:bg-white/10 transition-all gap-2" 
          href="/"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
          Go Home
        </Link>
      </div>
    </div>
  );
}