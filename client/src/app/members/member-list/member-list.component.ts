import { User } from 'src/app/_models/user';
import { take } from 'rxjs/operators';
import { AccountService } from './../../_services/account.service';
import { UserParams } from './../../_models/userParams';
import { MembersService } from '../../_services/members.service';
import { Member } from './../../_models/member';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/_models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html', 
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];
  pagination: Pagination;
  userParams: UserParams
  user: User;
  genderList = [{value: 'male', display: 'Males'},{value: 'female', display: 'Females'}];

  constructor(private membersService: MembersService) { 
    this.userParams = this.membersService.getUserParams();
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.membersService.setUserParams(this.userParams);
    this.membersService.getMembers(this.userParams).subscribe(response => {
      this.members = response.result;
      this.pagination = response.pagination;
    });
  }

  resetFilters(){
    this.userParams = this.membersService.resetUserParams();
    this.loadMembers();
  }

  pageChanged(event: any) {
    this.userParams.pageNumber = event.page;
    this.membersService.setUserParams(this.userParams);
    this.loadMembers();
  }



}
