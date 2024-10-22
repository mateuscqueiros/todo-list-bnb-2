import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { useRef, useState } from 'react';

export interface ShopItemType {
  id: number;
  title: string;
}

export interface ShopItemProps {
  item: ShopItemType;
  onEdit?: (value: ShopItemType) => void;
  onDelete?: (value: ShopItemType['id']) => void;
}

export function ShopItem({ item, onDelete, onEdit }: ShopItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  function handleEdit() {
    setIsEditing(false);
    const titleInput = titleInputRef.current?.value;
    if (titleInput) {
      onEdit && onEdit({ id: item.id, title: titleInput });
    }
  }

  return (
    <li className="shop-item">
      <div>
        {!isEditing && <span>{item.title}</span>}
        {isEditing && (
          <input ref={titleInputRef} type="text" defaultValue={item.title} />
        )}
      </div>
      <div className="item-actions">
        {!isEditing && (
          <div className="normal-actions">
            <IconEdit onClick={() => setIsEditing(true)} />
            <IconTrash onClick={() => onDelete && onDelete(item.id)} />
          </div>
        )}
        {isEditing && (
          <div className="edit-actions">
            <IconCheck onClick={handleEdit} />
          </div>
        )}
      </div>
    </li>
  );
}
