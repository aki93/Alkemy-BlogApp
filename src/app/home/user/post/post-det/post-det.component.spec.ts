import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetComponent } from './post-det.component';

describe('PostDetComponent', () => {
  let component: PostDetComponent;
  let fixture: ComponentFixture<PostDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
