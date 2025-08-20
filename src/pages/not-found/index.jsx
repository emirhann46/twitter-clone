import React from 'react'
import { Link } from 'react-router-dom'
import { BsTwitterX } from 'react-icons/bs'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#15202b] text-white p-5 relative overflow-hidden">
      <div className="relative z-10 text-center max-w-xl p-8 md:p-10 bg-[#192734]/80 rounded-2xl shadow-lg animate-fade-in">
        <BsTwitterX className="mx-auto text-5xl text-[#1da1f2] mb-6" />

        <h1 className="text-[120px] md:text-[140px] font-extrabold m-0 leading-none bg-gradient-to-r from-[#1da1f2] to-[#9bd1f9] text-transparent bg-clip-text ">404</h1>
        <h2 className="text-3xl md:text-4xl mt-0 mb-6 text-[#f7f9f9]">Sayfa Bulunamadı</h2>

        <p className="text-lg leading-relaxed mb-8 text-[#8899a6]">
          Aradığınız sayfa uçup gitmiş gibi görünüyor.
          <br />
          Belki de hiç var olmadı?
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <Link
            to="/"
            className="px-6 py-3 bg-[#1da1f2] text-white rounded-full text-lg font-semibold transition-all hover:bg-[#1a91da] hover:-translate-y-0.5"
          >
            Ana Sayfaya Dön
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-transparent border border-[#1da1f2] text-[#1da1f2] rounded-full text-lg font-semibold transition-all hover:bg-[#1da1f2]/10 hover:-translate-y-0.5"
          >
            Geri Git
          </button>
        </div>
      </div>

      {/* Animasyonlu kuşlar */}
      <div className="absolute inset-0 left-2 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-8 h-8 text-[#1da1f2] animate-fly-${i + 1}`}
            style={{
              top: `${(i + 1) * 15}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          >
            <BsTwitterX size={24} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotFound
