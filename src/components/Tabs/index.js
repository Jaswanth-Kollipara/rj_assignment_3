const Tabs = props => {
  const {data, changeTab} = props
  const {tabId, displayText} = data
  const onClickTab = () => {
    changeTab(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
