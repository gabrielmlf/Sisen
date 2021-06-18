import { Sintoma, Diagnostico, ProvavelDiagnostico } from './classes';

export { Doencas }

let sintomas_risco_de_aspiracao: Sintoma[] = [new Sintoma("dor_no_corpo", 1), new Sintoma("tosse", 2), new Sintoma("febre", 1), new Sintoma("coriza", 3), new Sintoma("dor_de_cabeca", 2)]
let doenca1 = new Diagnostico("risco_de_aspiracao", sintomas_risco_de_aspiracao, 9)

let sintomas_risco_de_infeccao_no_sitio_cirurgico = [new Sintoma("dor_no_corpo", 3), new Sintoma("manchas_na_pele", 2), new Sintoma("febre", 3), new Sintoma("enjoo", 3)]
let doenca2 = new Diagnostico("risco_de_infeccao_no_sitio_cirurgico", sintomas_risco_de_infeccao_no_sitio_cirurgico, 11)

let sintomas_risco_de_boca_seca = [new Sintoma("dor_no_corpo", 3), new Sintoma("ansiedade", 2), new Sintoma("esquecimento", 1), new Sintoma("formigamento_na_mao", 1), new Sintoma("sensibilidade_a_dor", 2), new Sintoma("constipacao", 2), new Sintoma("insonia", 1)]
let doenca3 = new Diagnostico("risco_de_boca_seca", sintomas_risco_de_boca_seca, 12)

let sintomas_risco_de_infeccao = [new Sintoma("ansiedade", 3), new Sintoma("agitacao", 2), new Sintoma("insonia", 1), new Sintoma("falta_de_apetite", 2), new Sintoma("perda_de_sono", 1)]
let doenca4 = new Diagnostico("risco_de_infeccao", sintomas_risco_de_infeccao, 9)

let Doencas = [doenca1, doenca2, doenca3, doenca4];