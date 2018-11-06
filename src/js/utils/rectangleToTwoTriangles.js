export const rectangleToTwoTriangles = (x, y, width, height) => {
  const x1 = x;
  const x2 = x + width;
  const y1 = y;
  const y2 = y + height;

  return [
    x1, y1, /* Top-left */
    x2, y1, /* Top-right */
    x1, y2, /* Bottom-left */
    x1, y2, /* bottom-right */
    x2, y1, /* top-right */
    x2, y2, /* bottom-right */
  ];
}
