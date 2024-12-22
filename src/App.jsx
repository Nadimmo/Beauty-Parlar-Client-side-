function App() {

  return (
    <>
      <div className="flex flex-col">
        <div className="form-control w-52">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="toggle toggle-primary" defaultChecked />
          </label>
        </div>
        <div className="form-control w-52">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="toggle toggle-secondary" defaultChecked />
          </label>
        </div>
        <div className="form-control w-52">
          <label className="label cursor-pointer">
            <span className="label-text">Remember me</span>
            <input type="checkbox" className="toggle toggle-accent" defaultChecked />
          </label>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
