export { Sintoma, Diagnostico, ProvavelDiagnostico }

class Sintoma {
    constructor(nome?: string, pesoIndividual?: number) {
        this.nome = nome;
        this.pesoIndividual = pesoIndividual;
    }
    nome?: string;
    pesoIndividual?: number;
}

class Diagnostico {
    constructor(diagnostico?: string, sintomas?: Sintoma[], pesoTotal?: number) {
        this.diagnostico = diagnostico;
        this.sintomas = sintomas;
        this.pesoTotal = pesoTotal;
    }
    diagnostico?: string;
    sintomas?: Sintoma[];
    pesoTotal?: number;

}

class ProvavelDiagnostico {
    constructor(nome?: string, pesoFinal?: number) {
        this.nome = nome;
        this.pesoFinal = pesoFinal;
    }
    nome?: string;
    pesoFinal?: number;
}