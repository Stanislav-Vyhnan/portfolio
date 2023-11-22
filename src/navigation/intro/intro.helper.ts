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

  for (let i = 0; i < letters.length; i++) {
    if (isMobile) {
      topPosition = mobileAnimation('border-letter', i, startLeftPosition, topPosition, false);
    } else {
      desktopAnimation('border-letter', i, startLeftPosition, false);
    }
  }

  topPosition = 0;

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
      topPosition = mobileAnimation('animated-letter', index, startLeftPosition, topPosition, true);
    } else {
      desktopAnimation('animated-letter', index, startLeftPosition, true);
    }
    index++;
  }, letterAnimationSpeed);
};

const ignoreIndexList = [9, 11];

const mobileAnimation = (
  className: string,
  index: number,
  startLeftPosition: number,
  topPosition: number,
  isAnimated: boolean
): number => {
  let newTopPosition = topPosition;

  const letterElement = document.getElementById(`${className}-${index}`) as HTMLSpanElement;
  let newLeftPosition = startLeftPosition + oneLetterWidth * index;

  if (ignoreIndexList.includes(index)) {
    newTopPosition += 40;
  } else if (index === dotIndex) {
    newLeftPosition = startLeftPosition + (textLength / 4 - 28);
  } else if (index >= 12) {
    newLeftPosition = startLeftPosition + oneLetterWidth * (index - 12);
  }

  setAnimation(letterElement, newLeftPosition, newTopPosition, isAnimated);

  return newTopPosition;
};

const desktopAnimation = (
  className: string,
  index: number,
  startLeftPosition: number,
  isAnimated: boolean
) => {
  const letterElement = document.getElementById(`${className}-${index}`) as HTMLSpanElement;
  const newLeftPosition = startLeftPosition + oneLetterWidth * index;

  console.log(letterElement);

  setAnimation(letterElement, newLeftPosition, 0, isAnimated);
};

const setAnimation = (
  element: HTMLSpanElement,
  leftPosition: number,
  topPosition: number,
  isAnimated: boolean
) => {
  if (isAnimated) {
    element.style.transition = theme.mixins.transition('left', 'top').transition as string;
  }

  element.style.left = `${leftPosition}px`;
  element.style.top = `${topPosition}px`;
};
