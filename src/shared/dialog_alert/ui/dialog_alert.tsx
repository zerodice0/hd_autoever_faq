import '@/shared/dialog_alert/ui/dialog_alert.css';

function DialogAlert(ref: React.RefObject<HTMLDialogElement | null>, message: string) {
  const onClickDialogClose = () => {
    ref.current?.close();
  }

  return (
    <dialog className="dialog-wrapper dialog-error" id="error_faq" ref={ref}>
      <div className="dialog-body">
        <p className="message">{message}</p>
        <div className="button-group">
          <button type="button" 
                  className="btn-xlg btn-tertiary"
                  onClick={onClickDialogClose}>
                    확인
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default DialogAlert;