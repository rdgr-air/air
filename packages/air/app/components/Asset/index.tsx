import { IAsset } from '@air/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { HTMLAttributes } from 'react'

import AssetComponent from './Asset'

type Props = {
  item: IAsset
} & HTMLAttributes<HTMLDivElement>

const Asset = ({ item, ...props }: Props) => {
  const { attributes, isDragging, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
  })

  const styles = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  }

  return (
    <AssetComponent
      item={item}
      ref={setNodeRef}
      style={styles}
      isOpacityEnabled={isDragging}
      {...props}
      {...attributes}
      {...listeners}
    />
  )
}

export default Asset
