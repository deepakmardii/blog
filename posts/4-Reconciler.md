---
title: "Understanding the Reconciler"
subtitle: "A Deep Dive into Virtual DOM Manipulation in JavaScript."
date: "14 Feb, 2024"
---

Before delving into reconciliation, it’s essential to grasp the concept of the Virtual DOM. In traditional web development, changes to the user interface (UI) prompt a direct manipulation of the Document Object Model (DOM). However, this process can be resource-intensive and result in suboptimal performance, especially when dealing with dynamic content and frequent updates.

The Virtual DOM acts as a lightweight copy of the actual DOM, residing in memory. When changes occur in the application state, a new Virtual DOM is created to represent the updated UI. This virtual representation is then compared with the previous one to identify the specific changes that need to be applied to the actual DOM.

## The Need for Reconciliation

Virtual DOM reconciliation is the process of determining the minimal set of changes required to synchronize the Virtual DOM with the actual DOM efficiently. When a user interacts with a web application, various events trigger updates to the UI. Without reconciliation, updating the entire DOM for every change can lead to unnecessary rendering and adversely impact performance.

The key objective of reconciliation is to identify the differences between the current and previous Virtual DOM states and apply only the necessary updates to the actual DOM. This selective approach significantly reduces the computational load and ensures a more responsive user experience.

## How Reconciliation Works

1. **irtual DOM Diffing**: When an event triggers a UI update, a new Virtual DOM is generated. The Virtual DOM library then performs a process known as “diffing,” where it compares the new Virtual DOM with the previous one. This step involves identifying the added, modified, or removed elements and attributes.
2. **Patch Generation**: Once the differences are identified, a set of instructions or patches is generated. These patches represent the minimal changes required to bring the Virtual DOM in sync with the actual DOM.
3. **Updating the Actual DOM**: The generated patches are then applied to the actual DOM, selectively updating only the affected elements. This targeted approach avoids unnecessary rendering and enhances the overall performance of the web application.

![images/nes_controller](/images/reconciler.jpg)

## Benefits of Virtual DOM Reconciliation

1. **Optimized Performance**: By updating only the necessary parts of the DOM, reconciliation minimizes the computational overhead, resulting in faster rendering times.
2. **Reduced Repaints and Reflows**: Selective updates help in minimizing browser repaints and reflows, reducing visual glitches and enhancing the perceived speed of the application.
3. **Consistent User Experience**: Virtual DOM reconciliation ensures a consistent and responsive user experience, even in the face of dynamic content and frequent updates.
4. Facilitates Declarative Programming: Reconciliation aligns well with the declarative programming paradigm, where developers focus on describing the desired UI state rather than imperative updates.

## Step-by-Step Guide to Building Your Reconciler

In this step-by-step guide, we’ll create a basic reconciler for dynamic updates in the DOM using a virtual document. Here’s a breakdown of the process with practical steps.

Get Full Code here: [fullCode](https://github.com/deepakmardii/reconciler)

1. Initialize Virtual Document: Start with an empty array to represent the virtual document.

```
let virtualDocument = [];
```

2. Update DOM Elements: Create a function that compares the current virtual document with the existing one, updating the real DOM accordingly.

```
function createDomElements(existingDOM, currentDOM) {
  var parentElement = document.getElementById("mainArea");

  let added = 0, deleted = 0, updated = 0;

  // Now, we'll compare our new vDOM to our old vDOM
  currentDOM.forEach(function(item) {
    // Check if an element with this ID already exists in the old vDOM
    var existingItem = existingDOM.find(function(oldItem) {
      return oldItem.id === item.id;
    });

    if (existingItem) {
      updated++;
      // If it exists, update it
      var existingChild = document.querySelector(`[data-id='${item.id}']`);
      existingChild.children[0].innerHTML = item.title;
      existingChild.children[1].innerHTML = item.description;
    } else {
      added++;
      // If it doesn't exist in the DOM, create it
      var childElement = document.createElement("div");
      childElement.dataset.id = item.id; // Store the ID on the element for future lookups

      var grandChildElement1 = document.createElement("span");
      grandChildElement1.innerHTML = item.title;

      var grandChildElement2 = document.createElement("span");
      grandChildElement2.innerHTML = item.description;

      var grandChildElement3 = document.createElement("button");
      grandChildElement3.innerHTML = "Delete";
      grandChildElement3.setAttribute("onclick", "deleteTodo(" + item.id + ")");

      childElement.appendChild(grandChildElement1);
      childElement.appendChild(grandChildElement2);
      childElement.appendChild(grandChildElement3);
      parentElement.appendChild(childElement);
    }
  });

  // Any item left in the existingDOM array no longer exist in the data, so remove them
  existingDOM.forEach(function(oldItem) {
    if (!currentDOM.some(item => item.id === oldItem.id)) {
      deleted++;
      var childToRemove = document.querySelector(`[data-id='${oldItem.id}']`);
      parentElement.removeChild(childToRemove);
    }
  });

  console.log(added);
  console.log(updated);
  console.log(deleted);
}
```

3. Handle DOM Updates: Utilize a function to manage the addition, modification, and removal of DOM elements based on changes in the virtual document.

```
function updateVirtualDom(data) {
  let existingDOM = [...vDOM]; // Save the existing state of vDOM
  vDOM = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      description: item.description
    };
  });
  createDomElements(existingDOM, vDOM); // Pass the old and new vDOM to createDomElements
}
```

4. Set Interval for Dynamic Updates: Periodically invoke the update function to simulate dynamic data changes.

```
window.setInterval(() => {
  let todos = [];
  for (let i = 0; i<Math.floor(Math.random() * 100); i++) {
    todos.push({
      title: "Go to gym",
      description: "Go to gym from 5",
      id: i+1
    })
  }

  updateVirtualDom(todos);
}, 5000);
```
