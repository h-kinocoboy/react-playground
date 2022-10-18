import type { NextPage } from 'next'
import PlaygroundList from '@/components/playground-list/playground-list'

const Home: NextPage = () => {
  return (
    <>
      <h1>React Playground!</h1>
      <hr/>
      <h2>Study Contents.</h2>
      <PlaygroundList></PlaygroundList>
    </>
  )
}

export default Home
