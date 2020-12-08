import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LunchanddinnerPage } from './lunchanddinner.page';

describe('LunchanddinnerPage', () => {
  let component: LunchanddinnerPage;
  let fixture: ComponentFixture<LunchanddinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchanddinnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LunchanddinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
