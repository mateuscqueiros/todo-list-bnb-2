import { IconPlus } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import './App.scss';
import { ShopItem, ShopItemType } from './ShopItem';
import { sortItems } from './utils';

const shopListItems: ShopItemType[] = [
  {
    id: 2,
    title: 'Bebidas',
  },
  {
    id: 0,
    title: 'Frutas',
  },
  {
    id: 3,
    title: 'Limpeza',
  },
  {
    id: 1,
    title: 'Comida',
  },
];

function App() {
  const [items, setItems] = useState<ShopItemType[]>(sortItems(shopListItems));
  const createInputRef = useRef<HTMLInputElement>(null);

  console.log(items);

  const createItem = () => {
    const newItemTitle = createInputRef.current?.value;
    const maxId = Math.max(...items.map((i) => i.id));
    if (newItemTitle) {
      setItems(sortItems([...items, { id: maxId + 1, title: newItemTitle }]));
      createInputRef.current.value = '';
    }
  };

  const handleDelete = (selectedItemId: ShopItemType['id']) => {
    setItems(sortItems(items.filter((item) => item.id !== selectedItemId)));
  };

  const handleEdit = (newItem: ShopItemType) => {
    setItems(
      sortItems([...items.filter((item) => item.id !== newItem.id), newItem])
    );
  };

  return (
    <div id="container">
      <div className="actions">
        <input ref={createInputRef} type="text" id="add-input" />
        <IconPlus size={20} onClick={createItem} />
      </div>
      <ul className="items-list">
        {items.map((item) => {
          return (
            <ShopItem
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
