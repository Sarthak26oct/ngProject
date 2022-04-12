import { Component, OnInit } from '@angular/core';
import { IPhoto } from './IPhoto';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  photos$!: IPhoto[];

  constructor(public photoservice: PhotoService) { }

  ngOnInit(): void {
    this.photoservice.getPhotos().subscribe(res => {
      this.photos$ = res;
    });
  }

}
