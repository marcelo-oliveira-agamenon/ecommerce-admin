export default function useLoadingPage() {
  const showGlobalLoadingPage = () => {
    const hasLoading = document.getElementById('global_loading_page');
    if (hasLoading) {
      return;
    }

    const loadingElement = document.createElement('div');
    loadingElement.setAttribute('id', 'global_loading_page');
    document.getElementById('root')?.appendChild(loadingElement);
  };

  const hideGlobalLoadingPage = () => {
    const hasLoading = document.getElementById('global_loading_page');

    if (hasLoading) {
      hasLoading.remove();
    }
  };

  return { showGlobalLoadingPage, hideGlobalLoadingPage };
}
