import { Component, OnInit } from '@angular/core';
import { LANGUAGE_LIST } from '../../../../core/constants/catalog.constant';
import { TranslateService } from '@ngx-translate/core';
import { LangServiceService } from '../../../../core/services/lang-service.service';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrl: './auth-home.component.scss',
})
export class AuthHomeComponent implements OnInit {
  authAction: string = 'login';
  language: string = 'es';
  langOptions = ['es', 'en'];

  constructor(
    private translateService: TranslateService,
    private langService: LangServiceService
  ) {}

  ngOnInit(): void {
    this.langService.lang$.subscribe((lang) => {
      this.language = lang;
    });
  }

  changeAuthAction(action: string) {
    this.authAction = action;
  }

  onLanguageSelect() {
    this.langService.changeLanguage(this.language);
    this.translateService.use(this.language);
  }
}
