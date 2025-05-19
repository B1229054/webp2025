import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: '名稱', width: 300 },
  { field: 'location', headerName: '地點', width: 300 },
  { field: 'price', headerName: '票價', width: 150 },
];

export default function DataGridTable() {
  const [rows, setRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6')
      .then((res) => {
        const data = res.data.map((item, index) => ({
          id: index + 1,
          title: item.title || '無標題',
          location: item.showInfo?.[0]?.location || '未知地點',
          price: item.showInfo?.[0]?.price || '免費',
        }));
        setRows(data);
      });
  }, []);

  const filteredRows = rows.filter((row) =>
    row.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%', padding: 20 }}>
      <h1>景點觀光展覽資訊</h1>
      <input
        type="text"
        placeholder="搜尋名稱"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 10, padding: 5 }}
      />
      <div style={{ height: 600 }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </div>
  );
}
