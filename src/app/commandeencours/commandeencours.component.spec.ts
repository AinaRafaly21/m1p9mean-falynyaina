import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeencoursComponent } from './commandeencours.component';

describe('CommandeencoursComponent', () => {
  let component: CommandeencoursComponent;
  let fixture: ComponentFixture<CommandeencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeencoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
