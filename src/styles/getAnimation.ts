const fadingAnimation = {
  fadeIn: 'animate__fadeIn',
  fadeInDown: 'animate__fadeInDown',
  fadeInDownBig: 'animate__fadeInDownBig',
  fadeInLeft: 'animate__fadeInLeft',
  fadeInLeftBig: 'animate__fadeInLeftBig',
  fadeInRight: 'animate__fadeInRight',
  fadeInRightBig: 'animate__fadeInRightBig',
  fadeInUp: 'animate__fadeInUp',
  fadeInUpBig: 'animate__fadeInUpBig',
  fadeInTopLeft: 'animate__fadeInTopLeft',
  fadeInTopRight: 'animate__fadeInTopRight',
  fadeInBottomLeft: 'animate__fadeInBottomLeft',
  fadeInBottomRight: 'animate__fadeInBottomRight',
}

type Fading = keyof typeof fadingAnimation

export const getFading = (inView: boolean, effect: Fading): string => {
  const animationInit = 'animationInit animate__animated'
  if (inView) {
    return animationInit + ' ' + fadingAnimation[effect]
  }
  return animationInit
}
