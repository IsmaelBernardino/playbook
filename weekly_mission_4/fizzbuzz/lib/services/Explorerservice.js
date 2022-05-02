class ExplorerService {
  static filterByMission(explorers, mission){
    return explorers.filter((explorer) => explorer.mission == mission);
  }
  static getAmountOfExplorersByMission(explorers, mission){
    return explorers.filter((explorer) => explorer.mission == mission)
  }
  static getExplorersUsernamesByMission(explorers, mission){
    const AmountOfExplorersByMission = this.getAmountOfExplorersByMission(explorers, mission)
    return AmountOfExplorersByMission.map((explorer) => explorer.githubUsername);
  }
}

module.exports = ExplorerService