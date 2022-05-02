const ExplorerService = require('../../lib/services/Explorerservice')

describe('test explorer service', () => {
  test('requeriendo calcular todos los explores', () => {
    const explorers = [{mission: 'node'}]
    const explorerInNode = ExplorerService.filterByMission(explorers, 'node')
    expect(explorerInNode.length).toBe(1)
  })
})