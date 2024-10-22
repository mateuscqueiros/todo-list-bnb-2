import { ShopItemType } from './ShopItem';

export function sortItems(items: ShopItemType[]) {
  return items.sort((a, b) => (a.id > b.id ? 1 : -1));
}
