export interface ILoadGameInfo {
  loadResult: (input: LoadGameInfo.Input) => Promise<LoadGameInfo.Output>
}

export namespace LoadGameInfo {
  export type Input = { date: string }
  export type Output = undefined | {
    draw_date: string // e.g. "2021-10-16T00:00:00.000"
    winning_numbers: string // e.g. "30 31 41 42 48 03"
    multiplier: string // e.g. 3
  }
}
