import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestasetingsPage } from './restasetings.page';

describe('RestasetingsPage', () => {
  let component: RestasetingsPage;
  let fixture: ComponentFixture<RestasetingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestasetingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestasetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
