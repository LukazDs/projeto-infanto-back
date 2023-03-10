import { Router } from 'express';
import * as itemController from '../controllers/itemController.js';
import * as validateItem from '../middleware/validateItem.js';
import checkToken from '../middleware/validateToken.js';

const itemRouter = Router();

itemRouter.post(
  '/personage/:personageId/item',
  checkToken,
  validateItem.validateRegister,
  itemController.insertItem,
);

itemRouter.get(
  '/personage/:personageId/item',
  checkToken,
  itemController.getItems,
);

itemRouter.delete('/item/:id', checkToken, itemController.deleteItem);

export default itemRouter;
