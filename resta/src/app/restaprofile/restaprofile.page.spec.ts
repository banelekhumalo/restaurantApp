import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaprofilePage } from './restaprofile.page';

describe('RestaprofilePage', () => {
  let component: RestaprofilePage;
  let fixture: ComponentFixture<RestaprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
