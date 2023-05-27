import { Component } from '@angular/core';

@Component({
  selector: 'app-shadow-details',
  templateUrl: './shadow-details.component.html',
  styleUrls: ['./shadow-details.component.scss']
})
export class ShadowDetailsComponent {
  categoryList: any;
  skillList: any;
  groupList: any;
  shadowList: any;
  constructor() { }

  ngOnInit(): void {
    this.categoryList = [{ categoryName: "category 1" }, { categoryName: "category 2" }, { categoryName: "category 3" }];
    this.skillList = [{ skillName: "skill 1" }, { skillName: "skill 2" }, { skillName: "skill 3" }];
    this.groupList = [{ groupName: "group 1" }, { groupName: "group 2" }, { groupName: "group 3" }];
    this.shadowList = [
      {
        EmpId: "1",
        Name:"Aakass",
        DOJ:"12/01/2022",
        Group:"Group 1",
        Skill:"Skill 1",
        Category:"Category 1",
        ShadowStartDate:"22/01/2022",
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
        ShadowStartDate:"29/01/2022",
        DaysElapsed:"23",
        CurrentStatus:"Training"
      },];
  }


}
