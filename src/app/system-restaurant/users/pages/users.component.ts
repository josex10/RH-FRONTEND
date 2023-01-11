import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthLoginUserInformation } from 'src/app/core/state/selectors/Auth/auth.selector';
import { ISystemUser } from 'src/app/shared/interfaces/ISystem-user/ISystem-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  loading$ = new Observable<boolean>;
  systemUserInformation$ = new Observable<ISystemUser | undefined>;

  constructor(private store: Store<any>) {

  }

  ngOnInit(): void {
    this.systemUserInformation$ = this.store.select(selectAuthLoginUserInformation);
  }

}
