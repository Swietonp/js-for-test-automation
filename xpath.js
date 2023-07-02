// Function for getting web element based on xpath
function getElementByXPath(xpath) {
  const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  const element = result.singleNodeValue;
  return element;
}

// Function for getting first visible element based on xpath
function getFirstVisibleElementByXPath(xpath) {
  const result = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

  for (let i = 0; i < result.snapshotLength; i++) {
    const element = result.snapshotItem(i);

    // Check if the element is visible based on its offset parent
    if (element && element.offsetParent !== null) {
      return element;
    }
  }

  return null;
}

