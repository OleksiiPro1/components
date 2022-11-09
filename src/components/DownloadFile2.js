import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import * as React from 'react';

const Data = [
  {
    id: 1,
    employee_name: 'SpiderMan',
    employee_role: 'role1',
    completionson_learning: '90 (%)',
    completion_of_quizzes: '80 (%)',
    avg_score: '99',
  },
  {
    id: 2,
    employee_name: 'Batman',
    employee_role: 'role2',
    completionson_learning: '70 (%)',
    completion_of_quizzes: '90 (%)',
    avg_score: '55',
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function DownloadFile2() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        sx={{ color: 'white' }}
        {...data}
        loading={loading}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
