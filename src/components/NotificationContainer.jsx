import { Toast } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../stores/toasts';

export function NotificationContainer() {
  const toasts = useSelector((state) => state.toasts);
  const dispatch = useDispatch();
  return (
    <div className="position-fixed bottom-0 end-0 p-2">
      {toasts.map((t) => (
        <Toast key={t.id} onClose={() => dispatch(remove(t.id))} bg={t.isError ? 'danger' : 'light'} autohide>
          <Toast.Header>
            <strong className="me-auto">{t.header}</strong>
          </Toast.Header>
          <Toast.Body>{t.message}</Toast.Body>
        </Toast>
      ))}
    </div>
  );
}
