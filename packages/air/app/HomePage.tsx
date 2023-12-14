'use client'

import { AssetsBoards } from '@air/components'
import { useEffect } from 'react'

import { useGalleryStore } from './store'
import { IAsset, IBoard } from './types'
import { AirLogo } from './vectors/logo'

interface HomePageProps {
  assets: IAsset[]
  boards: IBoard[]
}

const HomePage = ({ assets, boards }: HomePageProps) => {
  const { assets: storedAssets, setAssets, setBoards } = useGalleryStore()

  useEffect(() => {
    setAssets(assets)
    setBoards(boards)
  }, [assets, boards, setAssets, setBoards])

  if (storedAssets?.length === 0) return null

  return (
    <main className="mx-auto w-full max-w-7xl  p-4">
      <div className="text-primary-500 my-6 w-20">
        <AirLogo />
      </div>
      <h1 className="mb-10 text-3xl font-bold">Air Gallery View</h1>
      <AssetsBoards />
    </main>
  )
}

export default HomePage
