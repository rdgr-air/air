import { IAsset } from '@air/types'
import Image from 'next/image'
import { CSSProperties, forwardRef, HTMLAttributes } from 'react'

type Props = {
  item: IAsset
  isOpacityEnabled?: boolean
  isDragging?: boolean
} & HTMLAttributes<HTMLDivElement>

const AssetComponent = forwardRef<HTMLDivElement, Props>(
  ({ item, isOpacityEnabled, isDragging, style, ...props }, ref) => {
    const styles: CSSProperties = {
      opacity: isOpacityEnabled ? '0.4' : '1',
      cursor: isDragging ? 'grabbing' : 'grab',
      lineHeight: '0.5',
      transform: isDragging ? 'scale(1.05)' : 'scale(1)',
      ...style,
    }

    return (
      <div
        ref={ref}
        className="relative inline-block aspect-square w-full [max-width:215px]"
        style={styles}
        {...props}
      >
        <Image
          width="250"
          height="250"
          src={item.image}
          alt={`${item.id}`}
          className="aspect-square rounded-lg object-cover"
        />
      </div>
    )
  },
)

export default AssetComponent
