const RouteLoadingBar = () => (
  <div className="fixed left-0 top-0 z-50 h-[3px] w-full overflow-hidden bg-np-muted dark:bg-np-muted-night">
    <div className="h-full w-1/3 animate-loading-bar bg-np-accent dark:bg-np-accent-night" />
  </div>
);

export default RouteLoadingBar;
