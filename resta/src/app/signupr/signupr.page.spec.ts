import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignuprPage } from './signupr.page';

describe('SignuprPage', () => {
  let component: SignuprPage;
  let fixture: ComponentFixture<SignuprPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuprPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignuprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
