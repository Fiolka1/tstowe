import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RybyComponent } from './ryby.component';

describe('RybyComponent', () => {
  let component: RybyComponent;
  let fixture: ComponentFixture<RybyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RybyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RybyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
