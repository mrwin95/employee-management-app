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
  designationLists: IDesignation[] = [];

  ngOnInit(): void {
    this.masterService
      .getDesignations()
      .subscribe((res: IAPiResponse<IDesignation[]>) => {
        this.designationLists = res.data;
      });
  }
  // constructor(public masterService: MasterService) {}
}
