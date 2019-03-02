import { CategoriaService } from './../providers/categoria.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import * as _ from "lodash";

@Component({
  selector: 'app-categoria-consulta',
  templateUrl: './categoria-consulta.component.html',
  styleUrls: ['./categoria-consulta.component.css']
})
export class CategoriaConsultaComponent implements OnInit {

  totalItems: any;
	page: any = 0;
	pageSize: any = 10;
	previousPage: any;
  categorias = new Array();
  nome = '';
  
  constructor(private categoriaService:CategoriaService) { }

  ngOnInit() {
   this.search(1,10);
   this.totalItems = 15;
  }

  loadPage(page: number) {
		if (page !== this.previousPage) {
			this.previousPage = page;
			this.search(page, this.pageSize);
		}
	}

  search(page, pageSize) {
		this.categorias = this.categoriaService.getCategoriasPaginada(page);
    if (this.nome != "") {
      this.categorias = _.filter(this.categorias,{nome:this.nome});
    }
  }

  delete(index) {
		swal({
			title: 'Você tem certeza?',
			text: "Deseja realmente excluir esta Categoria!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Excluir!',
			cancelButtonText: 'Cancelar!',
			reverseButtons: true
		}).then((result) => {
			if (result.value) {
					this.categorias.splice(index, 1);
					swal(
						'Deletado!',
						'Categoria excluída com sucesso.',
						'success'
					)
			}
		})
	}

}
