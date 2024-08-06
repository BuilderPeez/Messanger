import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  chats = [
    { name: 'John Doe', message: 'Hi there!', imageUrl: 'john-doe.jpg' },
    { name: 'Jane Smith', message: 'Hello!', imageUrl: 'jane-smith.jpg' },
    // Add more chat data as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}