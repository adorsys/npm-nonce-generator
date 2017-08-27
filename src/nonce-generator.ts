import seedrandom from "seedrandom"

export default class NonceGenerator {
  private rng: seedrandom.prng
  constructor(seed?: string) {
    this.rng = seedrandom(seed)
  }
  generate = () => {
    return this.rng.int32() >>> 0
  }
}
