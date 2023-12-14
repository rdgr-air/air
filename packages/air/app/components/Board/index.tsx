import { ContextMenu } from '@air/components'
import { IBoard } from '@air/types'
import { useDroppable } from '@dnd-kit/core'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

const Board = ({ board, index }: { board: IBoard; index: number }) => {
  const { id, title, thumbnail } = board
  const { setNodeRef } = useDroppable({
    id,
  })
  return (
    <div
      ref={setNodeRef}
      className={twMerge(
        'w-full [aspect-ratio:5/2] [max-height:130px] sm:aspect-square sm:max-h-none sm:[max-width:215px]',
        'group relative inline-block w-full ',
      )}
    >
      <ContextMenu />
      <Image
        alt={title}
        src={thumbnail}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-lg object-cover"
      />
      <div className="absolute inset-0 z-10 flex items-end overflow-hidden rounded-lg bg-gradient-to-t from-black/70 to-red-500/0 p-3 text-lg font-bold text-white">
        {index + 1}. {title}
      </div>
    </div>
  )
}

export default Board
