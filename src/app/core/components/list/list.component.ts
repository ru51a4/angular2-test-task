import { Component, OnInit, Input } from '@angular/core';
import { GlobalFunctionService } from '../../services/global-function.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private fn: GlobalFunctionService) {
  }

  @Input() weatherDataList;
  @Input() unit;
  public tempConverter = this.fn.tempConverter;

  ngOnInit(): void {

  }


}
