// Function for choosing the most right element 
function getMostRightElement(elements) {
    if (!Array.isArray(elements)) {
      elements = [elements];
    }
  
    let mostRightElement = null;
    let mostRightXPosition = -Infinity;
  
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const elementRect = element.getBoundingClientRect();
      const elementRightX = elementRect.right;
  
      if (elementRightX > mostRightXPosition) {
        mostRightXPosition = elementRightX;
        mostRightElement = element;
      }
    }
  
    return mostRightElement;
  }

  // Function for choosing the most right element by xpath
  function getMostRightElementByXpath(xpath) {
    const xpathResult = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
  
    let mostRightElement = null;
    let mostRightXPosition = -Infinity;
  
    for (let i = 0; i < xpathResult.snapshotLength; i++) {
      const element = xpathResult.snapshotItem(i);
      const elementRect = element.getBoundingClientRect();
      const elementRightX = elementRect.right;
  
      if (elementRightX > mostRightXPosition) {
        mostRightXPosition = elementRightX;
        mostRightElement = element;
      }
    }
  
    return mostRightElement;
  }