import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestasettingsPage } from './restasettings.page';

describe('RestasettingsPage', () => {
  let component: RestasettingsPage;
  let fixture: ComponentFixture<RestasettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestasettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestasettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
