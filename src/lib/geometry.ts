export const getAngle = (x: number, y: number): number => {
  let theta = Math.atan2(y, x)
  if (theta < 0) theta = Math.PI * 2 + theta

  return theta
}
