// Colors
export enum pallete {
  darkest = "#0A2F51",
  second_dark = "#0E4D64",
  third_dark = "#137177",
  fourth_dark = "#188977",
  middle_color = "#1D9A6C",
  sixth_light = "#39A96B",
  fifth_light = "#56B870",
  fourth_light = "#74C67A",
  third_light = "#99D492",
  second_light = "#BFE1B0",
  lightest = "#DEEDCF",
  white = "#FFFFFF"
}

//Header / Footer heights
export const headerHeight: string = "5rem";
export const headerDesktopHeight: string = "7rem";
export const footerHeight: string = "5rem";
export const footerDesktopHeight: string = "7rem";

//Fonts
export const normalFont: string = "'Roboto Cn', sans-serif";

// Spacing
export enum sizes {
  xs = "0.8rem",
  s = "1.2rem",
  m = "1.6rem",
  l = "3.0rem",
  xl = "4.7rem",
  desktop_breakpoint = "45rem"
}

export default { pallete, headerHeight, footerHeight, normalFont, sizes };