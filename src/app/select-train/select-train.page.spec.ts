import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectTrainPage } from './select-train.page';

describe('SelectTrainPage', () => {
  let component: SelectTrainPage;
  let fixture: ComponentFixture<SelectTrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTrainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectTrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
