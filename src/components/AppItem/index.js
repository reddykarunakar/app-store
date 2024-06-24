import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <>
      <li className="app-list">
        <img src={imageUrl} alt={appName} className="icon" />
        <p className="text">{appName}</p>
      </li>
    </>
  )
}
export default AppItem
