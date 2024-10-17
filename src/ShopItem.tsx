import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';

export interface ShopItemType {
  id: number;
  title: string;
}

export interface ShopItemProps {
  item: ShopItemType;
  onDelete?: (value: ShopItemType['id']) => void;
}

export function ShopItem({ item, onDelete }: ShopItemProps) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="shop-item">
      <div>
        {!isEditing && <span>{item.title}</span>}
        {isEditing && <input type="text" defaultValue={item.title} />}
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
            <IconCheck />
          </div>
        )}
      </div>
    </div>
  );
}
