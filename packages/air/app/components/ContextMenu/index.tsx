import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import React from 'react'

const ContextMenu = () => {
  const items = [
    {
      key: 'itemsSelected',
      label: 'Items selected',
    },
    {
      key: 'download',
      label: 'Download',
    },
  ]

  return (
    <Dropdown>
      <DropdownTrigger>
        <div
          role="button"
          className="absolute right-2 top-2 z-20 hidden h-6 w-6 items-center justify-center rounded-md bg-black/80 text-xs leading-none text-white group-hover:visible group-hover:flex"
        >
          …
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === 'delete' ? 'danger' : 'default'}
            className={item.key === 'delete' ? 'text-danger' : ''}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  )
}

export default ContextMenu
