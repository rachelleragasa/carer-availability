import { css } from "styled-components"

export const breakpoint = {
  mobile: "640px",
  tablet: "768px",
  tabletLarge: "1024px",
  desktop: "1280px",
}

export const above = Object.keys(breakpoint).reduce((acc, name) => {
  acc[name] = (...args) => css`
    @media (min-width: ${breakpoint[name]}) {
      ${css(...args)}
    }
  `
  return acc
}, {})