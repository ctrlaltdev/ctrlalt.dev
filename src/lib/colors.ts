export const palette = [
  '#F19FA4',
  '#F3BBB3',
  '#F9DBC3',
  '#E6F0CF',
  '#C0E8D9',
  '#C8CEE7',
]

export const randomizedPalette = () => {
  return palette.sort(() => Math.random() - 0.5)
}

export const getPaletteColor = (colors: string[], index: number): string => {
  return colors[index % colors.length]
}

export const getRandomPaletteColor = (colors: string[] = palette): string => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
