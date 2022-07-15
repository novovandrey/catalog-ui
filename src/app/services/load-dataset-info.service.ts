import {ErrorHandler, Injectable} from "@angular/core";
import {EventEmitter} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface DatasetInfo {
  name: string,
  schema: string,
  partitions: string
}

@Injectable({
  providedIn: "root"
})

export class LoadDatasetInfoService {


  constructor(private http: HttpClient) {}

  putDatasetInfo:EventEmitter<any> = new EventEmitter();
  datasetName:EventEmitter<string> = new EventEmitter<string>()

  public datasetInfo: DatasetInfo = {
    name: "",
    schema: "",
    partitions: ""
  };

  public getDatasetInfo (datasetName: string, area: string, type: string) {

    this.datasetName.emit(datasetName)

    this.datasetInfo = {
      name: datasetName,
      schema: 'field 1',
      partitions: 'partitions',
    }
    console.log("getDatasetInfo called")

    this.http.get("http://localhost:8080/catalog/datasetInfo/" + type)
      .subscribe({
        next: (info) => this.putDatasetInfo.emit({datasetInfo: info, type: type}),
        error: (error) => console.error(error)
      });
  }

}
