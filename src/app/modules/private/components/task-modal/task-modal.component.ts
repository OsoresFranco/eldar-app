import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import {
  COMPLEXITY_LIST,
  STATUS_LIST,
} from '../../../../core/constants/catalog.constant';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrl: './task-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TaskModalComponent {
  taskInformationForm: FormGroup = new FormGroup({});
  complexityList = COMPLEXITY_LIST;
  statusList = STATUS_LIST;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskInformationForm = this.fb.group({
      title: ['', [Validators.required]],
      createdAt: [new Date()],
      deadline: ['', [Validators.required]],
      complexity: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.taskInformationForm.valid) {
      const task = this.taskInformationForm.value;
      task.deadline = new Date(task.deadline);

      this.taskService.postTask(task).subscribe((response) => {

      });
    }
  }
}
