import { PATHS } from '../utils/paths/paths';
import { MenuItem } from '../utils/types/menu.type';

const upItem: MenuItem = {
  id: 'up',
  name: 'Go up',
  icon: '',
  path: PATHS.Up,
};

const downItem: MenuItem = {
  id: 'down',
  name: 'Go down',
  icon: '',
  path: PATHS.Down,
};

const resetItem: MenuItem = {
  id: 'reset',
  name: 'Go down',
  icon: '',
  path: PATHS.Reset,
};

export const menu: MenuItem[] = [upItem, downItem, resetItem];
