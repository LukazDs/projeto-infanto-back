import { Item } from '@prisma/client';
import * as itemRepository from '../repositories/itemRepository.js';
import { TItem, TItemNoPersonageId } from '../utils/itemUtils.js';

export async function insertItem(
  item: TItemNoPersonageId,
  personageId: string,
) {
  const itemDb: TItem = await itemRepository.insertItem({
    ...item,
    personageId: Number(personageId),
  });

  return itemDb;
}

export async function getItemsByPersonageId(personageId: number) {
  const itemDb: Item[] = await itemRepository.getItems(personageId);

  return itemDb;
}