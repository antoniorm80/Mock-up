import { CanDeactivateFn } from '@angular/router';

export const unSaveGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
