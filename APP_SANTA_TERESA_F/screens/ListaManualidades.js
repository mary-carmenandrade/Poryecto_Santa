import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { MdEdit, MdDelete } from 'react-icons/md';
import axios from 'axios';

const ListaManualidades = () => {
  const [manualidades, setManualidades] = useState([]);

  useEffect(() => {
    const fetchManualidades = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/manualidades');
        setManualidades(response.data);
      } catch (error) {
        console.error('Error fetching manualidades:', error);
      }
    };

    fetchManualidades();
  }, []);

  const editarManualidad = (id) => {
    // Lógica para editar la manualidad
    alert(`Editar manualidad con ID: ${id}`);
  };

  const eliminarManualidad = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/manualidades/${id}`);
      setManualidades(prevManualidades => prevManualidades.filter(manualidad => manualidad._id !== id));
    } catch (error) {
      console.error('Error deleting manualidad:', error);
    }
  };

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: '_id' },
      { Header: 'Manualidad', accessor: 'manualidad' },
      { Header: 'Precio', accessor: 'precio' },
      { Header: 'Cantidad', accessor: 'cantidad' },
      { Header: 'Fecha', accessor: 'fecha' },
      {
        Header: 'Acciones',
        accessor: 'acciones',
        Cell: ({ row }) => (
          <div style={styles.actionsContainer}>
            <MdEdit
              style={styles.icon}
              onClick={() => editarManualidad(row.values._id)}
            />
            <MdDelete
              style={styles.icon}
              onClick={() => eliminarManualidad(row.values._id)}
            />
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: manualidades });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div style={styles.container}>
      <table {...getTableProps()} style={styles.table}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} style={styles.tableRow}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} style={styles.tableHeader}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={styles.tableRow}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} style={styles.tableCell}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    minHeight: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    width: '80%',
    borderCollapse: 'collapse',
    marginBottom: 20,
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    color: '#fff',
    padding: 12,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#333',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
    transition: 'background-color 0.3s',
  },
  tableCell: {
    padding: 12,
    textAlign: 'left',
    fontSize: 14,
    color: '#333',
  },
  actionsContainer: {
    display: 'flex',
    gap: 10,
  },
  icon: {
    fontSize: 20,
    cursor: 'pointer',
    color: '#666',
  },
};

export default ListaManualidades;
