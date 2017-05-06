import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'issues-list-page',
  templateUrl: 'issues_list.html'
})
export class IssuesListPage {
private reports = [{
  "title": "report 1",
  "category":"category 1",
  "description": "description description description description descriptiondescription",
  "likes": 10,
  "dislikes": 20,
  "comments": ["fsad","fsadf","fasdf"]
}, {
  "title": "report 2",
  "category":"category 1",
  "description": "description description description description descriptiondescription",
  "likes": 10,
  "dislikes": 20,
  "comments": ["fsad","fsadf","fasdf"]
}];
private user = {
  "email_hash": "fsda"
}
  constructor(public navCtrl: NavController) {

  }

  getReports(searchEvent: any)
  {
    //TODO: Get data from backend

    let searchQuery = searchEvent.target.value;

    // if the value is an empty string don't filter the items
    if (searchQuery && searchQuery.trim() != '') {
      this.reports = this.reports.filter((item) => {
        return (item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
      })
    }
  }
}
