import 'jspdf-autotable';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';
import React from 'react';
import XLSX from 'xlsx';

const Data = [
  {
    id: 1,
    employee_name: 'Alex',
    employee_role: 'role1',
    completionson_learning: '90 (%)',
    completion_of_quizzes: '80 (%)',
    avg_score: '99',
  },
  {
    id: 2,
    employee_name: 'Alex',
    employee_role: 'role2',
    completionson_learning: '70 (%)',
    completion_of_quizzes: '90 (%)',
    avg_score: '55',
  },
];
function DownloadFile() {
  const columns = [
    { title: 'employee_name', field: 'employee_name' },
    { title: 'employee_role', field: 'employee_role' },
    { title: 'completionson_learning', field: 'completionson_learning' },
    { title: 'completion_of_quizzes', field: 'completion_of_quizzes' },
    { title: 'avg_score', field: 'avg_score' },
  ];

  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.text('Student Details', 20, 10);
    doc.autoTable({
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: Data,
    });
    doc.save('table.pdf');
  };

  const downloadExcel = () => {
    const newData = Data.map((row) => {
      delete row.tableData;
      return row;
    });
    const workSheet = XLSX.utils.json_to_sheet(newData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'students');
    XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' });
    XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' });
    XLSX.writeFile(workBook, 'Data.xlsx');
  };

  return (
    <>
      <div>
        <Button onClick={() => downloadPdf()}>download Pdf</Button>
      </div>
      <div>
        <Button onClick={() => downloadExcel()}>download Excel</Button>
      </div>
    </>
  );
}

export default DownloadFile;
