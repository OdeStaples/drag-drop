import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface Tasks {
  taskId: string;
  taskName: string;
  taskStatus: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentTask!: Tasks | null;

  tasksList: Tasks[] = [
    {
      taskId: 'Jira-001',
      taskName: 'Prototype',
      taskStatus: 'Done',
    },
    {
      taskId: 'Jira-002',
      taskName: 'landing Page',
      taskStatus: 'Done',
    },
    {
      taskId: 'Jira-003',
      taskName: 'Backend',
      taskStatus: 'In-Progress',
    },
    {
      taskId: 'Jira-004',
      taskName: 'DB Setup',
      taskStatus: 'In-Progress',
    },
    {
      taskId: 'Jira-005',
      taskName: 'Client Demo',
      taskStatus: 'To-Do',
    },
    {
      taskId: 'Jira-006',
      taskName: 'Incorporate client feedback',
      taskStatus: 'To-Do',
    },
    {
      taskId: 'Jira-007',
      taskName: 'Env Setup',
      taskStatus: 'Done',
    },
    {
      taskId: 'Jira-008',
      taskName: 'Deployement',
      taskStatus: 'To-Do',
    },
    {
      taskId: 'Jira-009',
      taskName: 'Support',
      taskStatus: 'To-Do',
    },
  ];

  getTasks(status: string): Tasks[] {
    return this.tasksList.filter((task) => task.taskStatus === status);
  }

  onDrag(task: Tasks): void {
    this.currentTask = task;
  }

  onDrop(event: any, status: string): void {
    event.preventDefault();
    this.tasksList = this.tasksList.map((task) =>
      task.taskId === this.currentTask?.taskId
        ? { ...task, taskStatus: status }
        : task
    );

    this.currentTask = null;
  }

  onDragStart(event: any): void {
    event.preventDefault();
  }
}
