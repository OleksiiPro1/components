import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';

const columns = [
  { title: 'employee_name', field: 'employee_name', flex: 1 },
  { title: 'employee_role', field: 'employee_role', flex: 1 },
  { title: 'completionson_learning', field: 'completionson_learning', flex: 1 },
  { title: 'completion_of_quizzes', field: 'completion_of_quizzes', flex: 1 },
  { title: 'avg_score', field: 'avg_score', flex: 1 },
];

const Data = [
  {
    id: 1,
    employee_name: 'Peter Pan',
    employee_role: 'role1',
    completionson_learning: '90 (%)',
    completion_of_quizzes: '80 (%)',
    avg_score: '99',
  },
  {
    id: 2,
    employee_name: 'Bugs Bunny',
    employee_role: 'role2',
    completionson_learning: '70 (%)',
    completion_of_quizzes: '90 (%)',
    avg_score: '55',
  },
  {
    id: 3,
    employee_name: 'Batman',
    employee_role: 'role3',
    completionson_learning: '74 (%)',
    completion_of_quizzes: '50 (%)',
    avg_score: '77',
  },
];

export default function DataTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ color: 'white' }}
        rows={Data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
}
