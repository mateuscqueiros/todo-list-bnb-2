import { IconPlus } from '@tabler/icons-react';
import { useState } from 'react';
import './App.scss';
import { ShopItem, ShopItemType } from './ShopItem';

const shopListItems: ShopItemType[] = [
  {
    id: 0,
    title: 'Frutas',
  },
  {
    id: 1,
    title: 'Comida',
  },
  {
    id: 2,
    title: 'Bebidas',
  },
  {
    id: 3,
    title: 'Limpeza',
  },
];

function App() {
  const [items, setItems] = useState<ShopItemType[]>(shopListItems);

  console.log(items);

  const handleDelete = (selectedItemId: ShopItemType['id']) => {
    setItems(items.filter((item) => item.id !== selectedItemId));
  };

  return (
    <div id="container">
      <div className="actions">
        <input type="text" id="add-input" />
        <IconPlus size={20} />
      </div>
      <ul className="items-list">
        {items.map((item) => {
          return <ShopItem key={item.id} item={item} onDelete={handleDelete} />;
        })}
      </ul>
    </div>
  );
}

export default App;
