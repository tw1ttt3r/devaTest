import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContactFormComponent } from './content-contact-form.component';

describe('ContentContactFormComponent', () => {
  let component: ContentContactFormComponent;
  let fixture: ComponentFixture<ContentContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
