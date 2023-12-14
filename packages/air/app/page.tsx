import { assetsData, boardsData } from './data'
import HomePage from './HomePage'

const Index = () => {
  const boards = boardsData.data.map((board) => {
    return {
      id: board.id,
      title: board.title,
      thumbnail: board.thumbnails[0],
    }
  })

  const assets = assetsData.data.clips.map((asset) => {
    const {
      displayName,
      id,
      width,
      height,
      assets: { image },
    } = asset
    return {
      displayName,
      id,
      width,
      height,
      image,
    }
  })

  return <HomePage assets={assets} boards={boards} />
}

export default Index
