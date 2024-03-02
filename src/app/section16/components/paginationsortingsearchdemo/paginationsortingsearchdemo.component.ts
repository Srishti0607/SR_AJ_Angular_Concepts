import { Component } from '@angular/core';
import { CustomdemoService } from '../../../services/customdemo.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-paginationsortingsearchdemo',
  templateUrl: './paginationsortingsearchdemo.component.html',
  styleUrls: ['./paginationsortingsearchdemo.component.css']
})
export class PaginationsortingsearchdemoComponent {

  sortDir = 1;
  columnVal: any;
  reactiveForm!: FormGroup;
  locked: any[] = []; //holds all users from json file
  config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.locked.length
  };

  constructor(private landingSrv: CustomdemoService) {}

  ngOnInit(): void {

    this.landingSrv.getUsers().subscribe((data: any) => {
      if (data) {
        this.locked = data;
        this.sortArr('User');
      }
    });

    this.reactiveForm = new FormGroup({
      pageSize: new FormControl('5'),

    });

  }

  onPageChange(e: number) {
    this.config.currentPage = e;
  }


  updateConfig() {
    this.config.itemsPerPage = this.reactiveForm.get('pageSize')!.value;
  }

  sortArr(colName: any) {

    this.locked.sort((a, b) => {
      a = a[colName].toLowerCase();
      b = b[colName].toLowerCase();

      return a.localeCompare(b) * this.sortDir;
    });

  }

  onSortClick(event: any, column: any) {

    this.columnVal = column;

    let target = event.currentTarget,
      classList = target.classList;
    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir = -1;
    }
    else {
      classList.remove('fa-chevron-down');
      classList.add('fa-chevron-up');
      this.sortDir = 1;
    }

    this.sortArr(column);

  }








}
