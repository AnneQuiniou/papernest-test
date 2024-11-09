import { PATHS } from '../utils/paths/paths';
import { MenuItem } from '../utils/types/menu.type';

const upItem: MenuItem = {
  id: 'up',
  name: 'Go up',
  icon: 'trending_up',
  path: PATHS.Up,
};

const downItem: MenuItem = {
  id: 'down',
  name: 'Go down',
  icon: 'trending_down',
  path: PATHS.Down,
};

const resetItem: MenuItem = {
  id: 'reset',
  name: 'Reset counter',
  icon: 'restart_alt',
  path: PATHS.Reset,
};

export const menu: MenuItem[] = [upItem, downItem, resetItem];
