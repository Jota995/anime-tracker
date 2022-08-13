import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersAnimeComponent } from './characters-anime.component';

describe('CharactersAnimeComponent', () => {
  let component: CharactersAnimeComponent;
  let fixture: ComponentFixture<CharactersAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
