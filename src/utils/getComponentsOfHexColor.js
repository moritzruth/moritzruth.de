export function getComponentsOfHexColor(hexColorString) {
  return [
    Number.parseInt(hexColorString.slice(1, 3), 16),
    Number.parseInt(hexColorString.slice(3, 5), 16),
    Number.parseInt(hexColorString.slice(5, 7), 16)
  ]
}
