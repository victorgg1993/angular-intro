import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  //
  comentaris: { nom: string; data: string; comentari: string }[] = [
    {
      nom: 'Katy',
      data: '25/04/2019 15:26',
      comentari:
        'Eveniet perspiciatis asperiores cum odio ducimus omnis nihil iusto ipsam\
         magni voluptatem explicabo ratione accusamus quod ipsa, dicta rem.',
    },

    {
      nom: 'Salomon',
      data: '25/04/2019 17:26',
      comentari:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem debitis\
         tempora iste numquam tempore! Quam nobis aspernatur maiores inventore unde.',
    },

    {
      nom: 'Bondary',
      data: '26/04/2019 16:26',
      comentari:
        'Eius dolores harum enim odio, dolore quibusdam fugit est corporis eaque.\
         Officiis ea enim accusantium consequuntur est?',
    },
  ];

  constructor() {}

  pintarMissatges(): void {
    const pare = document.getElementsByTagName('article')[0];
    pare.innerHTML = '';

    for (const element of this.comentaris) {
      const seccio = document.createElement('section');
      seccio.innerHTML = `
      <div>
      <h3>${element.nom}</h3>
      <p>${element.data}</p>
      </div>
      <p>
      ${element.comentari}
      </p>
      `;
      pare.appendChild(seccio);
    }
  }

  ngOnInit(): void {}
}
