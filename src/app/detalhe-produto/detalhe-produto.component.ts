import { Component } from '@angular/core';

@Component({
  selector: 'app-detalhe-produto',
  imports: [],
  templateUrl: './detalhe-produto.component.html',
  styleUrl: './detalhe-produto.component.css'
})
export class DetalheProdutoComponent {
  produtoId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.produtoId = this.route.snapshot.paramMap.get('id')!;
  }

}
import { ActivatedRoute } from '@angular/router';

