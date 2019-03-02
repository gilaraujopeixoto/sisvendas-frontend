import { Categoria } from './../models/categoria';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias = [];  
  categoriasSalvas = [];  
  categoriasMerge = [];  
  constructor() { 
  }

  gerarCategoria(identificador, nome, pai) {
    let categoria = new Categoria();
    categoria.id = identificador;
    categoria.nome = nome;
    categoria.categoriaPai = pai;
    
    return categoria;
  }

  gerarCategoriaPai(identificador, nome) {
    let categoria = new Categoria();
    categoria.nome = nome;
    categoria.id = identificador;
    
    return categoria;
  }

  getCategoriaPai(identificador) {
    let categoria;
    this.categorias.forEach(element => {
      if (element.id == identificador) {
        categoria = element;
      }
    });

    return categoria;
  }

  gerarCategorias() {
      this.categorias.push(this.gerarCategoria(1,'Telefone e Celular', null));
      this.categorias.push(this.gerarCategoria(2,'SmartPhone', this.getCategoriaPai(1)));
      this.categorias.push(this.gerarCategoria(3,'Telefone Fixo', this.getCategoriaPai(1)));
      this.categorias.push(this.gerarCategoria(4,'Periféricos', null));
      this.categorias.push(this.gerarCategoria(5,'Mouse', this.getCategoriaPai(4)));
      this.categorias.push(this.gerarCategoria(6,'Teclado', this.getCategoriaPai(4)));
      this.categorias.push(this.gerarCategoria(7,'Gabinetes', this.getCategoriaPai(4)));
      this.categorias.push(this.gerarCategoria(8,'Caixas de Som', this.getCategoriaPai(4)));
      this.categorias.push(this.gerarCategoria(9,'Armazenamento', null));
      this.categorias.push(this.gerarCategoria(10,'HD', this.getCategoriaPai(9)));
      this.categorias.push(this.gerarCategoria(11,'SSD', this.getCategoriaPai(9)));
      this.categorias.push(this.gerarCategoria(12,'Pen Drive', this.getCategoriaPai(9)));
      this.categorias.push(this.gerarCategoria(13,'Hardware', null));
      this.categorias.push(this.gerarCategoria(14,'Placa Mãe', this.getCategoriaPai(13)));
      this.categorias.push(this.gerarCategoria(15,'Processador', this.getCategoriaPai(13)));
      this.categorias.push(this.gerarCategoria(16,'Placa de Vídeo', this.getCategoriaPai(13)));

      this.categoriasMerge = this.categorias;
      if (sessionStorage.getItem('categoriasSalvas') != null) {
        this.categoriasMerge = this.categorias.concat(JSON.parse(sessionStorage.getItem('categoriasSalvas'))); 
      }
  

      return this.categoriasMerge;
  }

  gerarCategoriasPaginada(page) {
    this.categorias = [];
    if (page == 1) {
      this.categorias.push(this.gerarCategoria(1,'Telefone e Celular', null));
      this.categorias.push(this.gerarCategoria(2,'SmartPhone', this.getCategoriaPai(1)));
      this.categorias.push(this.gerarCategoria(3,'Telefone Fixo', this.getCategoriaPai(1)));
      this.categorias.push(this.gerarCategoria(4,'Periféricos', null));
      this.categorias.push(this.gerarCategoria(5,'Mouse', this.getCategoriaPai(4)));
      this.categorias.push(this.gerarCategoria(6,'Teclado', this.getCategoriaPai(4)));
      this.categorias.push(this.gerarCategoria(7,'Gabinetes', this.getCategoriaPai(4)));
      this.categorias.push(this.gerarCategoria(8,'Caixas de Som', this.getCategoriaPai(4)));
      this.categorias.push(this.gerarCategoria(9,'Armazenamento', null));
      this.categorias.push(this.gerarCategoria(10,'HD', this.getCategoriaPai(9)));
    } else if (2) {
      this.categorias.push(this.gerarCategoria(11,'SSD', this.getCategoriaPai(9)));
      this.categorias.push(this.gerarCategoria(12,'Pen Drive', this.getCategoriaPai(9)));
      this.categorias.push(this.gerarCategoria(13,'Hardware', null));
      this.categorias.push(this.gerarCategoria(14,'Placa Mãe', this.getCategoriaPai(13)));
      this.categorias.push(this.gerarCategoria(15,'Processador', this.getCategoriaPai(13)));
      this.categorias.push(this.gerarCategoria(16,'Placa de Vídeo', this.getCategoriaPai(13)));
    }
    this.categoriasMerge = this.categorias;
    if (sessionStorage.getItem('categoriasSalvas') != null) {
      this.categoriasMerge = this.categorias.concat(JSON.parse(sessionStorage.getItem('categoriasSalvas'))); 
    }

    return this.categoriasMerge;
  }

  getCategoriasPaginada(page) {
    return this.gerarCategoriasPaginada(page);
  }

  getCategorias() {
    return this.gerarCategorias();
  }

  save(categoria:Categoria) {
    this.categoriasSalvas = JSON.parse(sessionStorage.getItem('categoriasSalvas'));
    if (this.categoriasSalvas == null) {
      this.categoriasSalvas = []
    }
    let count = this.categoriasMerge.length;
    categoria.id = count + 1;
    this.categoriasSalvas.push(categoria);
    sessionStorage.setItem('categoriasSalvas', JSON.stringify(this.categoriasSalvas));
  }
}
