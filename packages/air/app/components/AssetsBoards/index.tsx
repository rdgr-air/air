'use client'

import { Asset, Board } from '@air/components'
import { IAsset } from '@air/types'
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { arrayMove, rectSortingStrategy, SortableContext } from '@dnd-kit/sortable'
import { useState } from 'react'

import { useGalleryStore } from '../../store'
import Item from '../Asset/Asset'

const Assets = () => {
  const { assets, boards, removeAsset } = useGalleryStore()
  const [items, setItems] = useState<IAsset[]>(assets)
  const [showAssets, setShowAssets] = useState<boolean>(true)
  const [showBoards, setShowBoards] = useState<boolean>(true)

  const [activeItem, setActiveItem] = useState<IAsset>()

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    setActiveItem(items.find((item) => item.id === active.id))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const boardContainer = boards.find((board) => board.id === over?.id)
    if (!over) return

    const $activeItem = items.find((item) => item.id === active.id)
    const overItem = items.find((item) => item.id === over.id)

    if (boardContainer && $activeItem) {
      removeAsset(assets, $activeItem.id)
    }

    if (!$activeItem || !overItem) {
      return
    }

    const activeIndex = items.findIndex((item) => item.id === active.id)
    const overIndex = items.findIndex((item) => item.id === over.id)

    if (activeIndex !== overIndex) {
      setItems((prev) => arrayMove<IAsset>(prev, activeIndex, overIndex))
    }

    setActiveItem(undefined)
  }

  const handleDragCancel = () => {
    setActiveItem(undefined)
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <section className="mb-10">
        <h2 className="mb-2">
          <button
            type="button"
            className="rounded-lg px-2 py-1 text-xs font-bold uppercase text-gray-500 hover:bg-gray-50"
            onClick={() => setShowBoards(!showBoards)}
          >
            Boards ({boards.length})
          </button>
        </h2>
        {showBoards && (
          <div className="flex grow-0 flex-wrap gap-6">
            {boards.map((board, index) => {
              const { id } = board
              return <Board key={id} index={index} board={board} />
            })}
          </div>
        )}
      </section>
      <section className="mb-10">
        <h2 className="mb-2">
          <button
            type="button"
            className="rounded-lg px-2 py-1 text-xs font-bold uppercase text-gray-500 hover:bg-gray-50"
            onClick={() => setShowAssets(!showAssets)}
          >
            Assets ({assets.length})
          </button>
        </h2>
        {showAssets && (
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <div className="flex grow-0 flex-wrap gap-6">
              {assets.map((asset) => {
                const { id } = asset
                return <Asset key={id} item={asset} />
              })}
            </div>
          </SortableContext>
        )}
        <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
          {activeItem ? <Item item={activeItem} isDragging /> : null}
        </DragOverlay>
      </section>
    </DndContext>
  )
}

export default Assets
