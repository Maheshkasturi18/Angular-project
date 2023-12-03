import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p class="footer p-4 text-center m-0">
    Powered By <a href="" class="fw-bold text-decoration-none text-black"> Tushar Chawatekar </a>
    </p>
  `,
  styles: [
    '.footer{background-color:bisque}'
  ]
})
export class FooterComponent {

}
