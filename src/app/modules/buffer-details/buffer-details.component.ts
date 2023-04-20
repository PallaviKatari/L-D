import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffer-details',
  templateUrl: './buffer-details.component.html',
  styleUrls: ['./buffer-details.component.scss']
})
export class BufferDetailsComponent implements OnInit {
  categoryList: any;
  skillList: any;
  groupList: any;
  bufferList: any;
  constructor() { }

  ngOnInit(): void {
    this.categoryList = [{ categoryName: "category 1" }, { categoryName: "category 2" }, { categoryName: "category 3" }];
    this.skillList = [{ skillName: "skill 1" }, { skillName: "skill 2" }, { skillName: "skill 3" }];
    this.groupList = [{ groupName: "group 1" }, { groupName: "group 2" }, { groupName: "group 3" }];
    this.bufferList = [
      {
        EmpId: "1",
        Name:"Aakass",
        DOJ:"12/01/2022",
        Group:"Group 1",
        Skill:"Skill 1",
        Category:"Category 1",
        BenchStartDate:"22/01/2022",
        DaysElapsed:"33",
        CurrentStatus:"Training"
      },
      {
        EmpId: "2",
        Name:"Ajay",
        DOJ:"17/01/2022",
        Group:"Group 2",
        Skill:"Skill 4",
        Category:"Category 2",
        BenchStartDate:"29/01/2022",
        DaysElapsed:"23",
        CurrentStatus:"Training"
      },];
  }

}
