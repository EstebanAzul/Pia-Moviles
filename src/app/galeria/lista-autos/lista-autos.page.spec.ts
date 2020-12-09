import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAutosPage } from './lista-autos.page';

describe('ListaAutosPage', () => {
  let component: ListaAutosPage;
  let fixture: ComponentFixture<ListaAutosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAutosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
