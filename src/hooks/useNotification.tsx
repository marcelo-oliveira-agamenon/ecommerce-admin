import variables from '../global/_variables.module.scss';

export default function useNotification() {
  const showNotification = (title: string, text: string, type: 'warning' | 'success' | 'error') => {
    let color;

    switch (type) {
      case 'error':
        color = variables.errorColor;
        break;

      case 'success':
        color = variables.successColor;
        break;

      case 'warning':
        color = variables.warningColor;
        break;

      default:
        color = variables.thirdColor;
        break;
    }

    const notification = document.createElement('div');
    const titleElement = document.createElement('h1');
    const textElement = document.createElement('p');

    notification.setAttribute('id', 'global_notification');
    notification.style.backgroundColor = color;
    titleElement.textContent = title;
    textElement.textContent = text;
    notification.appendChild(titleElement);
    notification.appendChild(textElement);

    document.getElementById('root')?.appendChild(notification);
  };

  const hideNotification = () => {
    const hasNotification = document.getElementById('global_notification');

    if (hasNotification) {
      hasNotification.style.animationName = 'slideOut';
      setTimeout(() => {
        hasNotification.remove();
      }, 1300);
    }
  };

  return { showNotification, hideNotification };
}
