function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background">
      <div className="flex items-center gap-1.5">
        <span className="text-purple-100 font-bold text-[1.4rem] tracking-tight">
          CineScope
        </span>
      </div>
 
      {/* Right icons */}
      <div className="flex items-center gap-3">
        <button className="relative text-gray-400 hover:text-white transition-colors">
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-violet-500 rounded-full" />
        </button>
 
        <button className="w-8 h-8 rounded-full bg-violet-700 overflow-hidden">
          <img
            src="https://i.pravatar.cc/32"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;