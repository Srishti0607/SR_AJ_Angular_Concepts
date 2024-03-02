import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
// import { ExportToCsv } from 'export-to-csv';
// import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
// import { CustomdemoService } from '../services/customdemo.service';


/*
npm i xlsx
npm i jspdf
npm i export-to-csv
npm i ngx-export-as

*/


@Component({
  selector: 'app-export-to-file-formats-demo',
  templateUrl: './export-to-file-formats-demo.component.html',
  styleUrls: ['./export-to-file-formats-demo.component.css']
})
export class ExportToFileFormatsDemoComponent {

  constructor(
    // private landingSrv: CustomdemoService,
    // private exportAsService: ExportAsService
    ) { }

    countryDetObj: any = []; //store country details getting from service

    // exportAsConfigTxt: ExportAsConfig = {
    //   type: 'txt', // the type you want to download
    //   elementIdOrContent: 'customers',
    // }
  
    // exportAsConfigPng: ExportAsConfig = {
    //   type: 'png', // the type you want to download
    //   elementIdOrContent: 'customers',
    // }
    // exportAsConfigJSON: ExportAsConfig = {
    //   type: 'json', // the type you want to download
    //   elementIdOrContent: 'customers',
    // }




  ngOnInit(): void {
    // this.getCountryCodesData();
  }

// getCountryCodesData() {
    
//     this.landingSrv.getCountryData(1, 10).subscribe((data: any) => {
//       if (data) {
//         this.countryDetObj = data;
//       }
//     });
// }

// exportTxt(){
//   this.exportAsService.save(this.exportAsConfigTxt, 'Country').subscribe(() => {
//     // save started
//   }); 
// }

// exportPNG() {
//   this.exportAsService.save(this.exportAsConfigPng, 'Country').subscribe(() => {
//     // save started
//   });   
// }

// exportJson(){
//   this.exportAsService.save(this.exportAsConfigJSON, 'Country').subscribe(() => {
//     // save started
//   }); 
// }

exportPDF() {
  const doc = new jsPDF("p", "pt", "a4");
  const source = document.getElementById("customers")!;
  
  doc.setFontSize(8);
  doc.html(source, {
    callback: function (pdf) {
      doc.output("dataurlnewwindow"); // preview pdf file when exported
    }
  });
}

// exportToCSV() {
//   const options = { 
//     fieldSeparator: ',',
//     quoteStrings: '"',
//     decimalSeparator: '.',
//     showLabels: true, 
//     showTitle: true,
//     title: 'Country CSV',
//     useTextFile: false,
//     useBom: true,
//     useKeysAsHeaders: true,
//   };
 
// const csvExporter = new ExportToCsv(options);
 
// csvExporter.generateCsv(this.countryDetObj);
// }

exportToExcel() {

  let Heading: any = [];
  Object.keys(this.countryDetObj[0]).forEach(res => {
    Heading.push(res);
  });

  let exceldata: any = [];
  for (let i = 1; i < this.countryDetObj.length; i++) {
    exceldata.push(this.countryDetObj[i])
  }

  const wb = XLSX.utils.book_new();

  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);

  XLSX.utils.sheet_add_aoa(ws, [Heading]);

  XLSX.utils.sheet_add_json(ws, exceldata, { origin: 'A2', skipHeader: true });

  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, 'country-list.xlsx');




}




}
