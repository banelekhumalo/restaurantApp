import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EdituserprofPage } from './edituserprof.page';

describe('EdituserprofPage', () => {
  let component: EdituserprofPage;
  let fixture: ComponentFixture<EdituserprofPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserprofPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EdituserprofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
