import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermConditionPage } from './term-condition.page';

describe('TermConditionPage', () => {
  let component: TermConditionPage;
  let fixture: ComponentFixture<TermConditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermConditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
