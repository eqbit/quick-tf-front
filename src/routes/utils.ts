import { routes } from './routes';

export const getRoute = (name: string = '') => {
  if (!name) {
    return null;
  }

  const parsedUrl = name.split('.');
  let currentDepth = 0;
  let currentNode = routes.find(route => route.name === parsedUrl[currentDepth]);

  while (currentNode && currentDepth < parsedUrl.length) {
    if (currentNode.name === parsedUrl[parsedUrl.length - 1]) {
      return currentNode;
    }

    if (currentNode.children) {
      currentDepth += 1;
      // eslint-disable-next-line no-loop-func
      currentNode = currentNode.children.find(route => route.name === parsedUrl[currentDepth]);
    } else {
      return null;
    }
  }
};
