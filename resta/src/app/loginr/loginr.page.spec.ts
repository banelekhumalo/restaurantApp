import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginrPage } from './loginr.page';

describe('LoginrPage', () => {
  let component: LoginrPage;
  let fixture: ComponentFixture<LoginrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
