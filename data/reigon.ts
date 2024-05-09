interface Walk {
  code: string
  name: string
}

interface Island {
  image: string
  Walks: Walk[]
}

export type ContinentData = Record<string, Island>

const data: ContinentData = {
  North: {
    image: '',
    Walks: [
      { code: 'LWT', name: 'Lake Waikaremoana Track' },
      { code: 'TNC', name: 'Tongariro Northern Circuit' },
      { code: 'WJ', name: 'Whanganui Journey' },
    ],
  },
  South: {
    image: '',
    Walks: [
      { code: 'AT', name: 'Abel Tasman Coast Track' },
      { code: 'HT', name: 'Heaphy Track' },
      { code: 'KT', name: 'Kepler Track' },
      { code: 'MT', name: 'Milford Track' },
      { code: 'PT', name: 'Paparoa Track' },
      { code: 'RT', name: 'Rakiura Track' },
      { code: 'RBT', name: 'Routeburn Track' },
    ],
  },
}

export default data
