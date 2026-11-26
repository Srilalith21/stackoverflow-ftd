export function getCurrentPath():string{
  type PathName = {
    pathname: string;
  };

  const currentPath: PathName = {
    pathname: window.location.pathname,
  };

  return currentPath.pathname;
}