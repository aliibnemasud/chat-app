export function createLinkElement(textWithLink) {
    const parts = textWithLink.split(" Source: ");
    const link = parts[1];
    const text = parts[0];
  
    const a = document.createElement("a");
    a.href = link;
    a.textContent = text;
  
    return a;
  }


  export function createLinkButton(textWithLink) {
    const parts = textWithLink.split(" Source: ");
    const link = parts[1];
    const text = parts[0];
  
    const button = document.createElement("button");
    button.textContent = text;
    button.onclick = function() {
      window.location.href = link;
    };
  
    return button;
  }