import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegRestaPage } from './reg-resta.page';

describe('RegRestaPage', () => {
  let component: RegRestaPage;
  let fixture: ComponentFixture<RegRestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegRestaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegRestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
