export function HomePage(): JSX.Element {
  return (
    <>

      <div className="bg-teal-50 px-8 lg:px-16 py-2 h-svh w-full flex justify-center items-center">
        <div className="flex justify-center items-center max-w-screen-xl w-full">
          <div>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, quia nesciunt? Vitae quia neque officiis magnam nisi repellat. Corporis tempore similique aperiam culpa! Et, impedit laudantium. Reprehenderit et eius repellendus.</h2>
          </div>
          <img
            className="max-w-md"
            src="https://images.unsplash.com/photo-1529030168380-b62c39672668?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
