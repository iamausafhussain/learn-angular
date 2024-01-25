import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-ngx-doc-viewer';
  
  public wordSrc: SafeResourceUrl;
  public pdfSrc: any = "https://www2.cs.arizona.edu/~mercer/Presentations/18-BinaryTrees.pdf";
 
  constructor(private sanitizer: DomSanitizer) {
    const localWordFilePath = 'D:/Info/{{filename}}.docx';
    this.wordSrc = this.sanitizer.bypassSecurityTrustResourceUrl(localWordFilePath);
    console.log(this.wordSrc);
    
  }
 
  ngOnInit(): void {}
}
