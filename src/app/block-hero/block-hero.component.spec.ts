import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHeroComponent } from './block-hero.component';

describe('BlockHeroComponent', () => {
  let component: BlockHeroComponent;
  let fixture: ComponentFixture<BlockHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
