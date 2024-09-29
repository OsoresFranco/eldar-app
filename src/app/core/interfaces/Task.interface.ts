export interface Task {
  user: string;
  title: string;
  createdAt: Date;
  deadline: Date;
  status: 'pending' | 'blocked' | 'inProgress' | 'completed' | 'unassigned';
  complexity: 'low' | 'medium' | 'high';
}
