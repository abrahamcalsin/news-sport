export function filterData<T extends Record<string, any>>(data: T[], callback: (item: any, index: number) => void) {
  const filteredData = [...data].filter((item, index) => callback(item, index))

  return filteredData
}
