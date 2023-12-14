export interface IBoard {
  id: string
  thumbnail: string
  title: string
  assets?: IAsset[]
}

export interface IAsset {
  displayName: string
  height: number
  id: string
  image: string
  width: number
}
