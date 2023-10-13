import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-image-to-pdf-converter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ImageToPdfConverterComponent {
  @ViewChild('contentToConvert', { static: false }) contentToConvert!: ElementRef;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
  title = 'Image to PDF Converter';
  imagePreview: File | String | null = null; 
   
  onFileSelected(event: Event) {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
  
        
        if (file.type.startsWith('image/')) {
          
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imagePreview = e.target?.result as string;
          };
          reader.readAsDataURL(file);
        } else {
          alert('Please select a valid image file.');
        }
      }
  }

  async convertToPdf() {
    if (this.imagePreview) {
      const canvas = await html2canvas(this.contentToConvert.nativeElement);
      const imageDataUrl = canvas.toDataURL('image/jpeg');
      
      console.log('Image Data URL:', imageDataUrl);
      
      const doc = new jsPDF();
  

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      doc.addImage(imageDataUrl, 'JPEG', 0, 0, imgWidth, imgHeight);
      doc.save('image-to-pdf.pdf');

      this.resetPage();
    } else {
      alert('Please select an image before converting.');
    }
  }

  resetPage() {
    this.imagePreview = null; 
    this.fileInput.nativeElement.value = '';
    this.contentToConvert.nativeElement.innerHTML = ''; 
  }
  
}
