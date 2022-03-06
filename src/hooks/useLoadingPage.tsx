export default function useLoadingPage() {
  const showGlobalLoadingPage = () => {
    const hasLoading = document.getElementById('global_loading_page');
    if (hasLoading) {
      return;
    }

    const loadingElement = document.createElement('div');
    const loader = document.createElement('div');
    loadingElement.setAttribute('id', 'global_loading_page');
    loader.setAttribute('class', 'loader ');
    loadingElement.appendChild(loader);
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
