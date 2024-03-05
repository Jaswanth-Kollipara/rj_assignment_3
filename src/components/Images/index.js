const Images = props => {
  const {data, clickImg} = props
  const {id, imageUrl, thumbnailUrl} = data
  const onClickImage = () => {
    clickImg(id)
  }

  return (
    <li>
      <img src={imageUrl} alt={thumbnailUrl} onClick={onClickImage} />
    </li>
  )
}

export default Images
