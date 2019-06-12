import { Component, OnInit } from '@angular/core';
import { ProductImage } from '../models/product-image';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: ProductImage[];
  editImage: ProductImage;

  constructor(private imagesSevice: ImagesService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.imagesSevice.getImages()
      .subscribe(images => this.images = images);
  }

}
