import 'jspdf-autotable';
import { Box, Button } from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import jsPDF from 'jspdf';
import React from 'react';

const Data = [
  {
    id: 1,
    employee_name: 'SpiderMan',
    employee_role: 'role1',
    completionson_learning: '90 (%)',
    completion_of_quizzes: '80 (%)',
    avg_score: '99',
    filter: 'filter 1',
  },
  {
    id: 2,
    employee_name: 'Batman',
    employee_role: 'role2',
    completionson_learning: '70 (%)',
    completion_of_quizzes: '90 (%)',
    avg_score: '55',
    filter: 'filter 2',
  },
];

const columns = [
  { title: 'employee_name', field: 'employee_name', flex: 1 },
  { title: 'employee_role', field: 'employee_role', flex: 1 },
  {
    title: 'completionson_learning',
    field: 'completionson_learning',
    flex: 1,
  },
  { title: 'completion_of_quizzes', field: 'completion_of_quizzes', flex: 1 },
  { title: 'avg_score', field: 'avg_score', flex: 1 },
  { title: 'filter', field: 'filter', flex: 1, hide: true },
];

function DownloadFile() {
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
        <Button onClick={() => downloadPdf()}>download Pdf</Button>
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  }

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text('Student Details', 20, 10);
    doc.autoTable({
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: Data,
    });
    doc.save('table-name!!!!!!.pdf');
  };

  return (
    <>
      <div>
        <Button onClick={() => downloadPdf()}>download Pdf</Button>
      </div>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          sx={{ color: 'white' }}
          rows={Data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </Box>
    </>
  );
}

export default DownloadFile;
