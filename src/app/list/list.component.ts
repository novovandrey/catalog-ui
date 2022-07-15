import {Component, OnInit, Output} from '@angular/core';
import {LoadDatasetInfoService} from "../services/load-dataset-info.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  datasets: string[] = [];

  defaultArea: string = 'First'

  constructor(private loadDatasetInfoService: LoadDatasetInfoService) {
  }

  ngOnInit(): void {
    this.datasets = ['dataset 1','dataset 2','dataset 3','dataset 4','dataset 5','dataset 6','dataset 7','dataset 8']
  }

  loadDatasetInfo (datasetName: string) {
    // console.log('loaddatasetinfo-> datasetname ', datasetName)
    this.loadDatasetInfoService.getDatasetInfo(datasetName, this.defaultArea, "schema")
  }

}
