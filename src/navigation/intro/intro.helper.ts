import { letters } from 'src/constants/intro';
import { theme } from 'src/theme';

const letterAnimationSpeed = 100;
const bgHideAnimationSpeed = 1000;

const textLength = 441;
const maxLength = letters.length;
const oneLetterWidth = 20.5;
const mobileHeight = 485;
const dotIndex = 10;

export const introAnimation = (introRef: HTMLDivElement, cb: () => void) => {
  const windowWidth = window.innerWidth;
  const isMobile = windowWidth <= mobileHeight;

  let index = 0;

  const windowCenter = windowWidth / 2;
  const startLeftPosition = windowCenter - textLength / (isMobile ? 4 : 2) + oneLetterWidth;

  let topPosition = 0;

  const intervalId = setInterval(() => {
    if (index === maxLength) {
      setTimeout(() => {
        introRef!.style.transition = `opacity ${bgHideAnimationSpeed}ms ease-in-out`;
        introRef!.style.opacity = `0%`;

        setTimeout(cb, bgHideAnimationSpeed - 200);
      }, bgHideAnimationSpeed * 2);

      window.clearInterval(intervalId);
      return;
    }

    if (isMobile) {
      topPosition = mobileAnimation(index, startLeftPosition, topPosition);
    } else {
      desktopAnimation(index, startLeftPosition);
    }
    index++;
  }, letterAnimationSpeed);
};

const ignoreIndexList = [9, 11];

const mobileAnimation = (index: number, startLeftPosition: number, topPosition: number): number => {
  let newTopPosition = topPosition;

  const letterElement = document.getElementById(`animated-letter-${index}`) as HTMLSpanElement;
  let newLeftPosition = startLeftPosition + oneLetterWidth * index;

  if (ignoreIndexList.includes(index)) {
    newTopPosition += 40;
  } else if (index === dotIndex) {
    newLeftPosition = startLeftPosition + (textLength / 4 - 28);
  } else if (index >= 12) {
    newLeftPosition = startLeftPosition + oneLetterWidth * (index - 12);
  }

  setAnimation(letterElement, newLeftPosition, newTopPosition);

  return newTopPosition;
};

const desktopAnimation = (index: number, startLeftPosition: number) => {
  const letterElement = document.getElementById(`animated-letter-${index}`) as HTMLSpanElement;
  const newLeftPosition = startLeftPosition + oneLetterWidth * index;

  setAnimation(letterElement, newLeftPosition, 0);
};

const setAnimation = (element: HTMLSpanElement, leftPosition: number, topPosition: number) => {
  element.style.transition = theme.mixins.transition('left', 'top').transition as string;
  element.style.left = `${leftPosition}px`;
  element.style.top = `${topPosition}px`;
};
