import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatafromuserPage } from './datafromuser.page';

describe('DatafromuserPage', () => {
  let component: DatafromuserPage;
  let fixture: ComponentFixture<DatafromuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatafromuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatafromuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
