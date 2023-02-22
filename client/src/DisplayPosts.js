import { useQuery, gql } from '@apollo/client'

const GET_LOCATIONS = gql`
query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      id
      title
    }
    meta {
      totalCount
    }
  }
}
`;

export default function DisplayPosts() {
  const { loading, error, data } = useQuery(GET_LOCATIONS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return data?.posts?.data?.map(({ id, title }) => (
    <div key={id} className='postBox'>
      <h3 className='id'>{id}</h3>
      <b className='title'>Title:</b>
      <p className='fullTitle'>{title}</p>
      <br />
    </div>
  ))
}