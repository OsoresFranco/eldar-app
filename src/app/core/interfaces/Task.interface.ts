export interface Task {
  user: string;
  title: string;
  createdAt: Date;
  deadline: Date;
  status: 'pending' | 'blocked' | 'in progress' | 'completed' | 'unassigned';
  complexity: 'low' | 'medium' | 'high';
  actions: string[];
}
