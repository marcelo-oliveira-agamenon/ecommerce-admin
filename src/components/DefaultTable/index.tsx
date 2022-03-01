import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

import './style.scss';

interface IDefaultTable {
  data: Array<any>;
  headers: Array<{
    headerKey: string;
    headerTitle: string;
  }>;
  titleTable: string;
  emptyTableMessage: string;
  onEditRow?: (identifier: string | number) => void;
  onDeleteRow?: (indetifier: string | number) => void;
  keyIdentifierAction?: string;
}

const DefaultTable: React.FC<IDefaultTable> = ({
  headers,
  data,
  emptyTableMessage,
  titleTable,
  onDeleteRow,
  onEditRow,
  keyIdentifierAction,
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

          <>{onEditRow && <th>Editar</th>}</>

          <>{onDeleteRow && <th>Deletar</th>}</>
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
                  <span>{obj[key.headerKey]}</span>
                </td>
              ))}

              <>
                {onEditRow && keyIdentifierAction && (
                  <td>
                    <FiEdit onClick={() => onEditRow(obj[keyIdentifierAction])} size={15} />
                  </td>
                )}
              </>

              <>
                {onDeleteRow && keyIdentifierAction && (
                  <td>
                    <AiOutlineDelete
                      onClick={() => onDeleteRow(obj[keyIdentifierAction])}
                      size={15}
                    />
                  </td>
                )}
              </>
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
