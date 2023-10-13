import { TestBed } from '@angular/core/testing';
import { ImageToPdfConverterComponent } from './app.component';

describe('ImageToPdfConverterComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ImageToPdfConverterComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ImageToPdfConverterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ImageToPdfConverter'`, () => {
    const fixture = TestBed.createComponent(ImageToPdfConverterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ImageToPdfConverter');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ImageToPdfConverterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ImageToPdfConverter app is running!');
  });
});
