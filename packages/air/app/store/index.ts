import { IAsset, IBoard } from '@air/types'
import create from 'zustand'

interface GalleryStore {
  assets: IAsset[]
  boards: IBoard[]
  selectedItems: IAsset[] | IBoard[]
  removeAsset: (assets: IAsset[], assetId: string) => void
  setAssets: (assets: IAsset[]) => void
  setBoards: (boards: IBoard[]) => void
}

export const useGalleryStore = create<GalleryStore>((set) => ({
  assets: [],
  boards: [],
  selectedItems: [],
  removeAsset: (assets: IAsset[], assetId: string) => {
    // Faster than filter for large arrays
    for (let i = 0; i < assets.length; i += 1) {
      if (assets[i].id === assetId) {
        assets.splice(i, 1)
        break
      }
    }
    return set(() => ({ assets }))
  },
  setAssets: (assets: IAsset[]) => set(() => ({ assets })),
  setBoards: (boards: IBoard[]) => set(() => ({ boards })),
  setSelectedItems: (selectedItems: IAsset[] | IBoard[]) => set(() => ({ selectedItems })),
}))
