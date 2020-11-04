import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestprofilePage } from './restprofile.page';

describe('RestprofilePage', () => {
  let component: RestprofilePage;
  let fixture: ComponentFixture<RestprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
