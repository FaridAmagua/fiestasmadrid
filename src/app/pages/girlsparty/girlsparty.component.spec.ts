import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlspartyComponent } from './girlsparty.component';

describe('GirlspartyComponent', () => {
  let component: GirlspartyComponent;
  let fixture: ComponentFixture<GirlspartyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GirlspartyComponent]
    });
    fixture = TestBed.createComponent(GirlspartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
