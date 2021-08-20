import React from 'react';

import './style.scss';

interface IDefaultTable {
  data: Array<any>;
  headers: Array<string>;
  titleTable: string;
  emptyTableMessage: string;
}

const DefaultTable: React.FC<IDefaultTable> = ({
  headers,
  data,
  emptyTableMessage,
  titleTable,
}) => (
  <table className="default-table">
    <thead>
      <div className="table-title">{titleTable}</div>

      <tr className="table-header">
        {headers.map((title) => (
          <th key={title}>{title}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {data && data.length ? (
        data.map((obj, index) => (
          <tr>
            {headers.map((key) => (
              <td key={obj[key]} style={{ borderBottom: index + 1 === data.length ? 'none' : '' }}>
                {obj[key]}
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

export default DefaultTable;
