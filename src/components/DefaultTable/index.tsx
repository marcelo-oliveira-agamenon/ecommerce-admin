import React from 'react';

import './style.scss';

interface IDefaultTable {
  data: Array<any>;
  headers: Array<{
    headerKey: string;
    headerTitle: string;
  }>;
  titleTable: string;
  emptyTableMessage: string;
}

const DefaultTable: React.FC<IDefaultTable> = ({
  headers,
  data,
  emptyTableMessage,
  titleTable,
}) => {
  function returnKeyString(index: number): string {
    return index + new Date().toDateString();
  }

  return (
    <table id="default-table">
      <thead>
        <div className="table-title">{titleTable}</div>

        <tr className="table-header">
          {headers.map((header, index) => (
            <th key={returnKeyString(index)}>{header.headerTitle}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data && data.length ? (
          data.map((obj, index) => (
            <tr key={returnKeyString(index)}>
              {headers.map((key, index1) => (
                <td
                  key={returnKeyString(index1)}
                  style={{ borderBottom: index + 1 === data.length ? 'none' : '' }}
                >
                  {obj[key.headerKey]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <h5>{emptyTableMessage}</h5>
        )}
      </tbody>
    </table>
  );
};

export default DefaultTable;
