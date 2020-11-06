import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestamenuPage } from './restamenu.page';

describe('RestamenuPage', () => {
  let component: RestamenuPage;
  let fixture: ComponentFixture<RestamenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestamenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestamenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
