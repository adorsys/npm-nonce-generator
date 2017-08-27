export default function isUInt32(value: number) {
  return Number.isInteger(value) && value >= 0 && value < 2 ** 32
}
