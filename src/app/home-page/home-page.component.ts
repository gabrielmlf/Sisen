import { Component, OnInit } from '@angular/core';
import { SINTOMAS } from '../home-page/sintomas';
import { GerarDiagnosticoService } from '../gerar-diagnostico.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  request;

  //Lista de sintomas:

  sintomas = SINTOMAS;
  sintomasMarcados = [];

  //-------------------------------------------------------------//
  constructor(private diagnosticoService: GerarDiagnosticoService) {}

  ngOnInit(): void {}

  gerarDiagnostico() {
    this.diagnosticoService.gerarDiagnostico(this.sintomasMarcados);
    this.limparSintomas();
  }

  marcar(sintoma) {
    let marcado: boolean = false;
    for (let obj of this.sintomasMarcados) {
      if (obj == sintoma.value) {
        marcado = true;
      }
    }
    if (marcado) {
      this.removerSintoma(sintoma);
    } else {
      this.addSintoma(sintoma);
    }
  }

  addSintoma(sintoma) {
    this.sintomasMarcados.push(sintoma.value);
  }

  removerSintoma(sintoma) {
    for (let obj of this.sintomasMarcados) {
      if (obj == sintoma.value) {
        let objIndex = this.sintomasMarcados.indexOf(obj);
        this.sintomasMarcados.splice(objIndex, 1);
      }
    }
  }

  limparSintomas() {
    this.sintomasMarcados = [];
  }
}
