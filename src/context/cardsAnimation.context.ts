/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';
export type GlobalContext = {
  enableCardsAnimation: boolean;
  setEnableCardsAnimation: (value: boolean) => void;
};
export const CardsAnimationContext = createContext<GlobalContext>({
  enableCardsAnimation: false,
  setEnableCardsAnimation: () => {},
});
export const useCardsAnimationContext = () => useContext(CardsAnimationContext);
