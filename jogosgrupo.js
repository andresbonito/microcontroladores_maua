var Grupos = function () {
    this.Grupos = []

    var grupoA = [];
    grupoA.push(new Timegrupo(teams.qat, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoA.push(new Timegrupo(teams.equ, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoA.push(new Timegrupo(teams.sen, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoA.push(new Timegrupo(teams.hol, 0, 0, 0, 0, 0, 0, 0, 0))
    this.Grupos.push(new Grupo(
        "A", grupoA
    ))
    
    var grupoB = [];
    grupoB.push(new Timegrupo(teams.ing, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoB.push(new Timegrupo(teams.ira, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoB.push(new Timegrupo(teams.eua, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoB.push(new Timegrupo(teams.pdg, 0, 0, 0, 0, 0, 0, 0, 0))
    this.Grupos.push(new Grupo(
        "B", grupoB
    ))
    
    var grupoC = [];
    grupoC.push(new Timegrupo(teams.arg, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoC.push(new Timegrupo(teams.ara, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoC.push(new Timegrupo(teams.mex, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoC.push(new Timegrupo(teams.pol, 0, 0, 0, 0, 0, 0, 0, 0))
    this.Grupos.push(new Grupo(
        "C", grupoC
    ))
    
    var grupoD = [];
    grupoD.push(new Timegrupo(teams.fra, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoD.push(new Timegrupo(teams.aus, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoD.push(new Timegrupo(teams.din, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoD.push(new Timegrupo(teams.tun, 0, 0, 0, 0, 0, 0, 0, 0))
    this.Grupos.push(new Grupo(
        "D", grupoD
    ))
    
    var grupoE = [];
    grupoE.push(new Timegrupo(teams.esp, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoE.push(new Timegrupo(teams.cos, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoE.push(new Timegrupo(teams.ale, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoE.push(new Timegrupo(teams.jap, 0, 0, 0, 0, 0, 0, 0, 0))
    this.Grupos.push(new Grupo(
        "E", grupoE
    ))
    
    var grupoF = [];
    grupoF.push(new Timegrupo(teams.bel, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoF.push(new Timegrupo(teams.can, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoF.push(new Timegrupo(teams.mar, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoF.push(new Timegrupo(teams.cro, 0, 0, 0, 0, 0, 0, 0, 0))
    this.Grupos.push(new Grupo(
        "F", grupoF
    ))
    
    var grupoG = [];
    grupoG.push(new Timegrupo(teams.bra, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoG.push(new Timegrupo(teams.ser, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoG.push(new Timegrupo(teams.sui, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoG.push(new Timegrupo(teams.cam, 0, 0, 0, 0, 0, 0, 0, 0))
    this.Grupos.push(new Grupo(
        "G", grupoG
    ))
    
    var grupoH = [];
    grupoH.push(new Timegrupo(teams.por, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoH.push(new Timegrupo(teams.gan, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoH.push(new Timegrupo(teams.uru, 0, 0, 0, 0, 0, 0, 0, 0))
    grupoH.push(new Timegrupo(teams.cor, 0, 0, 0, 0, 0, 0, 0, 0))
    this.Grupos.push(new Grupo(
        "H", grupoH
    ))
}


