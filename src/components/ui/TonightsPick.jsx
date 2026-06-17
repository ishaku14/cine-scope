function TonightsPick() {
  return (
    <section className="text-white px-4 mb-10">
      <div className="bg-gray-600 p-7 rounded-3xl">
        <p className="text-purple-300 font-bold text-[0.9rem] mb-3">
          TONIGHT'S PICK
        </p>

        <div className="flex gap-5">
          <div className="w-30 h-30 rounded-2xl bg-white"></div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Interstella</p>
            <p className="text-gray-300">
              A masterpiece of modern sci-fi. Drive into the unknown.
            </p>
            <div className="bg-gray-300/20 self-start py-2 px-4 rounded-full font-bold cursor-pointer">
              Show Author
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TonightsPick;