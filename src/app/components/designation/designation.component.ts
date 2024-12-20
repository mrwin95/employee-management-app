import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IAPiResponse } from '../../helpers/api-response';
import { IDesignation } from '../../model/interface/designation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  // constructor(public masterService: MasterService) {}

  designationLists: IDesignation[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe(
      (res: IAPiResponse<IDesignation[]>) => {
        this.designationLists = res.data;
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
