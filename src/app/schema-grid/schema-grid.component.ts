import {Component, OnChanges, OnInit, ViewChild} from '@angular/core';
import {DatasetInfo, LoadDatasetInfoService} from "../services/load-dataset-info.service";
import {AgGridAngular} from "ag-grid-angular";
import {CellClickedEvent, ColDef, GridReadyEvent, GridApi} from "ag-grid-community";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-schema-grid',
  templateUrl: './schema-grid.component.html',
  styleUrls: ['./schema-grid.component.scss']
})
export class SchemaGridComponent implements OnInit, OnChanges{

  datasetInfo: DatasetInfo = {
    name: "",
    schema: "",
    partitions: ""
  };

  constructor(private loadDatasetInfoService: LoadDatasetInfoService, private http: HttpClient) {
    this.loadDatasetInfoService.putDatasetInfo.subscribe(result => {
      this.columnDefs = [];
      // @ts-ignore
      if (result.type == 'schema') {
        Object.keys(result.datasetInfo.schema.fields[0]).forEach(key => {
          this.columnDefs.push( { field: `${key}`} )
          this.gridApi.setColumnDefs(this.columnDefs)
        });
        // @ts-ignore
        this.rowData = result.datasetInfo.schema.fields
        this.gridApi.setRowData(this.rowData)
      } else {
        Object.keys(result.datasetInfo.partitionSchema.fields[0]).forEach(key => {
          this.columnDefs.push( { field: `${key}`} )
          this.gridApi.setColumnDefs(this.columnDefs)
        });
        // @ts-ignore
        this.rowData = result.datasetInfo.partitionSchema.fields
        this.gridApi.setRowData(this.rowData)
      }
    } );

  }

  private gridApi!: GridApi<DatasetInfo>;

  public columnDefs: ColDef[] = [];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData: any;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  ngOnChanges(): void {
    console.log("onchanges SchemaGridComponent")
    // @ts-ignore
    this.rowData = this.datasetInfo.schema.fields
  }

  ngOnInit(): void {
    console.log("init")
  }

}
