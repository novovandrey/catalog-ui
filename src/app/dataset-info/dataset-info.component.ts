import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {LoadDatasetInfoService} from "../services/load-dataset-info.service";
import {FormControl} from "@angular/forms";
import {MatTabChangeEvent} from "@angular/material/tabs";
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-dataset-info',
  templateUrl: './dataset-info.component.html',
  styleUrls: ['./dataset-info.component.scss']
})
export class DatasetInfoComponent implements OnInit, OnChanges {

  datasetName: string = ''
  selectedTab: FormControl = new FormControl(0);
  tabs: string[] = ['schema', 'partitionsSchema'];
  area: string = 'First'
  // @ts-ignore
  constructor(private loadDatasetInfoService: LoadDatasetInfoService) {
    this.loadDatasetInfoService.datasetName.subscribe(datasetName => {
      this.datasetName = datasetName
    } );
    console.log("selected " + this.selectedTab.value)
    console.log("area " + this.area)
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log("selected " + this.selectedTab.value)
    this.loadDatasetInfoService.getDatasetInfo(this.datasetName, this.area, this.tabs[this.selectedTab.value])
  }

  areaChanged($event: MatButtonToggleChange) {
    this.loadDatasetInfoService.getDatasetInfo(this.datasetName, this.area, this.tabs[this.selectedTab.value])
  }

  ngOnInit(): void {
  }


  ngOnChanges(): void {
  }
}
