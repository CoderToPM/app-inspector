export function boundsSize(bounds) {
  const [
    x,
    y,
    width,
    height
  ] = bounds;
  return width * height;
};

export function compareBoundsSize(rectA, rectB) {
  return boundsSize(rectA) > boundsSize(rectB);
};

export function compareText(bestText, thisText) {
  return bestText.length > thisText.length;
};

export function isInRect(x, y, bounds) {
  const [
    _x,
    _y,
    width,
    height
  ] = bounds;

  return x >= _x
    && x <= _x + width
    && y >= _y
    && y <= _y + height;
};

export function getNodePathByXY(tree, isIOS, x, y) {
  let bestBounds = null;
  let bestPath = null;

  function walk(node, path) {
    let bounds = node.bounds;
    let inRect = isInRect(x, y, bounds);

    if (inRect) {
      if (!bestBounds || compareBoundsSize(bestBounds, bounds)) {
        bestBounds = bounds;
        bestPath = path;
      }

      if (node.nodes) {
        node.nodes.forEach((child, index) => {
          walk(child, path.concat([index]));
        });
      }
    }
  }

  walk(tree, []);

  return bestPath;
};

export function getNodePathByText(tree, isIOS, text) {
  let bestText = null;
  let bestPath = null;
  function walk(node, path) {
    let thisText = node.text;
    let contains = thisText && thisText.indexOf(text) !== -1;

    if (contains) {
      if (!bestText || compareText(bestText, thisText)) {
        bestText = thisText;
        bestPath = path;
      }
    }
    if (node.nodes) {
      node.nodes.forEach((child, index) => {
        walk(child, path.concat([index]));
      });
    }
  }

  walk(tree, []);

  return bestPath;
};

export function getNodePathByResourceId(tree, isIOS, resourceId) {
  let bestId = null;
  let bestPath = null;

  function walk(node, path) {
    let thisId = node["resource-id"];
    let contains = thisId && thisId.indexOf(resourceId) !== -1;

    if (contains) {
      if (!bestId || compareText(bestId, thisId)) {
        bestId = thisId;
        bestPath = path;
      }
    }
    if (node.nodes) {
      node.nodes.forEach((child, index) => {
        walk(child, path.concat([index]));
      });
    }
  }
  walk(tree, []);

  return bestPath;
};
