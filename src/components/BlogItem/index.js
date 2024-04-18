// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {list} = props
  const {title, description, publishedDate} = list
  return (
    <li>
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="dis">{publishedDate}</p>
      </div>
      <p className="dis">{description}</p>
      <hr />
    </li>
  )
}
export default BlogItem
