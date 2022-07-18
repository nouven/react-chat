import Header from './Header'
import Room from './Room'
import Search from './Search'
function Left() {
  return (
    <div className="relative / flex flex-col gap-1 / / / overflow-y-auto select-none">
      <Header />
      <Search />
      <div className="/ flex flex-col flex-1 gap-1 / overflow-y-auto / / / ">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  )
}
export default Left
