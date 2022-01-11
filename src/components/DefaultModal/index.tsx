import React, { useCallback } from 'react';
import './style.scss';

interface IModal {
  titleText: string;
  overallText?: string;
  size: 'bg' | 'md' | 'sm';
  confirmBtnText?: string;
  cancelBtnText?: string;
  onConfirmAction?: () => void;
  onCancelAction?: () => void;
}

const Modal: React.FC<IModal> = ({
  size,
  onConfirmAction,
  onCancelAction,
  titleText,
  overallText,
  confirmBtnText,
  cancelBtnText,
}) => {
  const returnSizeModal = useCallback(() => {
    switch (size) {
      case 'bg':
        return '70%';

      case 'md':
        return '50%';

      default:
        return '30%';
    }
  }, [size]);

  return (
    <div
      id="background-blur"
      onClick={onCancelAction}
      onKeyDown={onCancelAction}
      role="button"
      tabIndex={0}
    >
      <div id="modal-global" style={{ width: returnSizeModal(), height: returnSizeModal() }}>
        <h1>{titleText}</h1>

        <p>{overallText}</p>

        <div className="btns-container">
          {confirmBtnText && (
            <button type="button" onClick={onConfirmAction}>
              {confirmBtnText}
            </button>
          )}

          {cancelBtnText && (
            <button type="button" onClick={onCancelAction}>
              {cancelBtnText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
