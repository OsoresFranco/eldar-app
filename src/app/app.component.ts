import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'eldar-app';

  constructor() {}

  ngOnInit(): void {
    // this.translate.setDefaultLang('es');
    // const browserLang = this.translate.getBrowserLang();
    // const supportedLanguages = ['es', 'en'];

    // const selectedLang =
    //   browserLang && supportedLanguages.includes(browserLang)
    //     ? browserLang
    //     : 'es';

    // this.translate.use(selectedLang);
  }
}
