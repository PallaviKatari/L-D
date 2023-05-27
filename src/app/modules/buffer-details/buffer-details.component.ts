import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Buffer } from '../buffer';
import { Observable } from 'rxjs';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';

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

  formValue!:FormGroup

  Buffer:any[]=[];
  bufferdetails:Buffer[]|any;

  constructor(
    private formbuilder:FormBuilder,
    private httpService:HttpService
  ) { }

  ngOnInit(): void {
      this.categoryList = [{ categoryName: "category 1" }, { categoryName: "category 2" }, { categoryName: "category 3" }];
      this.skillList = [{ skillName: "skill 1" }, { skillName: "skill 2" }, { skillName: "skill 3" }];
      this.groupList = [{ groupName: "group 1" }, { groupName: "group 2" }, { groupName: "group 3" }];

    this.formValue=this.formbuilder.group({
      empid:new FormControl(''),
      empname:new FormControl(''),
      doj:new FormControl(''),
      category:new FormControl(''),
      group:new FormControl(''),
      benchstartdate:new FormControl(''),
      totalexp:new FormControl(''),
      dayselapsed:new FormControl(''),
      existingskill:new FormControl(''),
      currentstatus:new FormControl('')

    })
    this.fetchBufferDetails();
  }

  fetchBufferDetails():void{
  this.bufferdetails=this.httpService.getAllBuffers();
  console.log(this.bufferdetails);
  }
}
