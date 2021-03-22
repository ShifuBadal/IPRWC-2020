import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  slideIndex = 0;
  constructor(private router: Router,
              private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.showTheSlides(this.slideIndex);
  }


  toCollection(): void {
    this.router.navigate(['/collection']);
  }

  showTheSlides(n): void {
    let i = 0;
    const slides = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) {
      this.slideIndex = 1;
    }

    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace('active', '');
    }

    slides[this.slideIndex - 1].style.display = 'block';
    dots[this.slideIndex - 1].className += ' active';
  }

  plusSlides(n): void {
    this.showTheSlides(this.slideIndex += n);
  }

  currentSlide(n): void {
    this.showTheSlides(this.slideIndex = n);
  }

}
