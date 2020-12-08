import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectGenderPage } from './select-gender.page';

describe('SelectGenderPage', () => {
  let component: SelectGenderPage;
  let fixture: ComponentFixture<SelectGenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectGenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
