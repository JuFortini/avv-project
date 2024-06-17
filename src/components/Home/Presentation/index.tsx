export function Presentation(): JSX.Element {
  return (
    <>
      <div className="bg-teal-50 px-8 lg:px-16 py-24 lg:py-2 h-svh w-full flex justify-center items-center">
        <div className="flex flex-col xl:flex-row justify-center items-center max-w-[30rem] lg:max-w-screen-xl h-full w-full sm:space-y-10 space-x-20">
          <div className="w-full max-w-[34rem] space-y-4 sm:space-y-10">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif">Lorem ipsum dolor sit, amet consec tetur.</h1>
            <h2 className="text-sm sm:text-base xl:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quia nesciunt? Vitae quia neque officiis magnam nisi repellat. Corporis tempore similique aperiam culpa! Et, impedit laudantium. Reprehenderit et eius repellendus.</h2>
          </div>
          <div className="relative w-full lg:max-h-[40rem] lg:max-w-full max-w-[30rem] h-3/5 lg:h-4/5">
            <img
              className="absolute object-cover right-0 -bottom-8 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-2xl"
              src="https://images.unsplash.com/photo-1660721858662-9ad9f37447f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="absolute object-cover bottom-0 left-0 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-2xl"
              src="https://images.unsplash.com/photo-1512099053734-e6767b535838?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}
