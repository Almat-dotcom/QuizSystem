import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {QuizService} from '../quiz.service';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quizcards',
  templateUrl: './quizcards.component.html',
  styleUrls: ['./quizcards.component.scss']
})
export class QuizcardsComponent implements OnInit {
  faEdit = faEdit;
  list: any[];
  navbar: NavbarComponent;

  constructor(private service: QuizService) {
  }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe((result) => this.list = result);
  }

}
