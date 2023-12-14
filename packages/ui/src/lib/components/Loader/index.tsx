import './Loader.css'

export const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="bg-primary-500 block ease-in-out [animation:3s_loaderAnimation_infinite] [height:50px] [width:50px]" />
    </div>
  )
}
