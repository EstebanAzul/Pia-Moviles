import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutoDataPage } from './auto-data.page';

describe('AutoDataPage', () => {
  let component: AutoDataPage;
  let fixture: ComponentFixture<AutoDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutoDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
