import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './services/date-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'product';
  title = 'Front-End';

  constructor(private dataStorageService: DataStorageService){}

  ngOnInit(): void {
  }

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}