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
  editImage: ProductImage; // the productImage currently being edited

  constructor(private imagesSevice: ImagesService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.imagesSevice.getImages()
      .subscribe(
        (data: ProductImage[]) => {
          console.log(data);
          this.images = data;
        },
        (err) => console.log(err),
        () => console.log('Finished getting data from server:: getImages()')
      );
  }

}
