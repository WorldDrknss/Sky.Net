import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
  e: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.e = navigation?.extras?.state?.error;
  }

  ngOnInit(): void {
  }

}
