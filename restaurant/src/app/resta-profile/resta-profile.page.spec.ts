import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaProfilePage } from './resta-profile.page';

describe('RestaProfilePage', () => {
  let component: RestaProfilePage;
  let fixture: ComponentFixture<RestaProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
