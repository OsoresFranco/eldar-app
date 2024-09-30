import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'eldar-app';
  showSpinner: boolean = false;

  constructor(
    private translate: TranslateService,
    private spinnerService: SpinnerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.spinnerService.isLoading$.subscribe({
      next: (res) => {
        this.showSpinner = res;
        this.cdr.detectChanges();
      },
    });
    this.translate.setDefaultLang('es');
    const browserLang = this.translate.getBrowserLang();
    const supportedLanguages = ['es', 'en'];

    const selectedLang =
      browserLang && supportedLanguages.includes(browserLang)
        ? browserLang
        : 'es';

    this.translate.use(selectedLang);
  }
}
