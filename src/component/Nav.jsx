export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      
      {/* BLUR BACKGROUND LAYER */}

      {/* CONTENT LAYER */}
      <div className="relative flex items-center justify-between px-8 py-4 shadow-lg ">
        <h1 className="text-2xl font-bold text-[#f7e7c3]">
          <a href="#home">JUICE</a>
        </h1>

        <div className="text-2xl text-[#f7e7c3] cursor-pointer space-x-4">
          <span ><a href="#home">Home</a></span>
          <span ><a href="#about">About</a></span>
          <span ><a href="#types">Types</a></span>
          <span ><a href="#contact">Contact</a></span>

        </div>
      </div>
    </nav>
  )
}
