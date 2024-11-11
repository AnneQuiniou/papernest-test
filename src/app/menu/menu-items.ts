import { PATHS } from '../utils/paths/paths';
import { MenuItem } from '../utils/types/menu.type';

export const upMenuItem: MenuItem = {
  id: 'up',
  name: $localize`Go up`,
  icon: 'trending_up',
  path: PATHS.Up,
};

export const downMenuItem: MenuItem = {
  id: 'down',
  name: $localize`Go down`,
  icon: 'trending_down',
  path: PATHS.Down,
};

export const resetMenuItem: MenuItem = {
  id: 'reset',
  name: $localize`Reset counter`,
  icon: 'restart_alt',
  path: PATHS.Reset,
};

export const menu: MenuItem[] = [upMenuItem, downMenuItem, resetMenuItem];
