import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private cadastro: CadastroService) { }

  ngOnInit(): void {

    this.cadastro.listarProdutos().subscribe(produtos => {
      console.log(produtos);
    });
  }


}
