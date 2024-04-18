// Write your JS code he
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul>
      {blogsList.map(each => (
        <BlogItem list={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
