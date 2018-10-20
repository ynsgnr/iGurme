const colors = {
  background: "rgb(224,224,224)",
  contrast:"rgb(140,160,179)",
  itemBackground:"rgb(225,225,225)",
  itemBackgroundLigth:"rgb(255,255,255)",
  black:"rgb(0,0,0)",
  white:"rgb(255,255,255)",
  contrastDark:"rgb(238,238,238)",
  contrastLight:"rgb(196,211,217)",
  contrastGray:"rgb(223,223,223)",
  mainColor:"rgb(245,166,34)",
  darkGreen:"rgb(65,117,5)",
  grayText:"rgb(74,74,74)",
  lightText:"rgb(159,159,159)",
  darkText:"rgb(0,0,0)",
  whiteText:"rgb(255,255,255)"
}

const getColor = (color)=>{
  return colors[color]
}

export {getColor}
