import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NstiformComponent } from './nstiform.component';

describe('NstiformComponent', () => {
  let component: NstiformComponent;
  let fixture: ComponentFixture<NstiformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NstiformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NstiformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
