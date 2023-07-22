import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotoComponent } from './album-photo.component';

describe('AlbumPhotoComponent', () => {
  let component: AlbumPhotoComponent;
  let fixture: ComponentFixture<AlbumPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumPhotoComponent]
    });
    fixture = TestBed.createComponent(AlbumPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
