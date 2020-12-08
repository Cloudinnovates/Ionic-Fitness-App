import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrainingSchedulePage } from './training-schedule.page';

describe('TrainingSchedulePage', () => {
  let component: TrainingSchedulePage;
  let fixture: ComponentFixture<TrainingSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
