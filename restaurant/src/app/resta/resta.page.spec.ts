import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestaPage } from './resta.page';

describe('RestaPage', () => {
  let component: RestaPage;
  let fixture: ComponentFixture<RestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
