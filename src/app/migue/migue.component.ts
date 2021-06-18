import { Component, OnInit } from '@angular/core';
import { Diagnostico, ProvavelDiagnostico } from './classes';
import { Doencas } from './doencas'
import { GerarDiagnosticoService } from '../gerar-diagnostico.service';


@Component({
  selector: 'app-migue',
  templateUrl: './migue.component.html',
  styleUrls: ['./migue.component.scss']
})
export class MigueComponent implements OnInit {

  diagnosticoOrdenado
  doencas: Diagnostico[] = Doencas
  resultado: boolean = false
  diagnosticos: ProvavelDiagnostico[] = []
  sintomas: string[]

  constructor(private diagnosticoService: GerarDiagnosticoService) { }

  ngOnInit(): void {
    this.diagnosticoService.request
      .subscribe({ next: (v) => this.executarIA(v) })
  }

  executarIA(sintomas) {
    this.sintomas = sintomas
    this.diagnostico();
  }

  getPeso(doenca: Diagnostico): number {
    let pesoAtual = 0
    for (let sintoma of this.sintomas) {
      for (let sintomaBD of doenca.sintomas) {
        if (sintomaBD.nome == sintoma) {
          pesoAtual = pesoAtual + sintomaBD.pesoIndividual
        }
      }
    }
    return pesoAtual;
  }

  diagnostico() {
    for (let doenca of this.doencas) {
      let provavelDiagnostico: ProvavelDiagnostico
      this.diagnosticos.push(provavelDiagnostico = new ProvavelDiagnostico(doenca.diagnostico, (this.getPeso(doenca) * doenca.pesoTotal)))
    }
    this.diagnosticoOrdenado = this.diagnosticos.sort((obj1, obj2) => {
      if (obj1.pesoFinal < obj2.pesoFinal) {
        return 1;
      }
      if (obj1.pesoFinal > obj2.pesoFinal) {
        return -1;
      }
      return 0;
    });
  }


}
