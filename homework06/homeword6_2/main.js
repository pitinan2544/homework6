document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.getElementById("appContainer");
    const addCounterButton = document.getElementById("addCounterBtn");
    const sumCounterElement = document.getElementById("SumCounter");
    let totalCounter = 0;

    addCounterButton.addEventListener("click", function () {
      const stepValue = parseInt(document.getElementById("step").value);
      const counterWrapper = document.createElement("div");
      counterWrapper.className = "Counter";

      const counterHeader = document.createElement("div");
      counterHeader.className = "counter-header";

      const counterHeading = document.createElement("h3");
      counterHeading.textContent = `Counter : 0`;

      const rightContainer = document.createElement("div");
      rightContainer.className = "right";

      const stepHeading = document.createElement("h4");
      stepHeading.textContent = `Step : ${stepValue}`;

      const updateButton = document.createElement("button");
      updateButton.textContent = "Update";

      rightContainer.appendChild(stepHeading);
      rightContainer.appendChild(updateButton);

      counterHeader.appendChild(counterHeading);
      counterHeader.appendChild(rightContainer);

      const plusButton = document.createElement("button");
      plusButton.textContent = "+";
      plusButton.addEventListener("click", function () {
        let counterValue = parseInt(counterHeading.textContent.split(" ")[2]);
        counterValue += stepValue;
        counterHeading.textContent = `Counter : ${counterValue}`;
        updateTotalCounter();
      });

      const zeroButton = document.createElement("button");
      zeroButton.textContent = "0";
      zeroButton.addEventListener("click", function () {
        counterHeading.textContent = `Counter : 0`;
        updateTotalCounter();
      });

      const minusButton = document.createElement("button");
      minusButton.textContent = "-";
      minusButton.addEventListener("click", function () {
        let counterValue = parseInt(counterHeading.textContent.split(" ")[2]);
        counterValue -= stepValue;
        counterHeading.textContent = `Counter : ${counterValue}`;
        updateTotalCounter();
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", function () {
        counterWrapper.remove();
        updateTotalCounter();
      });

      counterWrapper.appendChild(counterHeader);
      counterWrapper.appendChild(plusButton);
      counterWrapper.appendChild(zeroButton);
      counterWrapper.appendChild(minusButton);
      counterWrapper.appendChild(deleteButton);

      appContainer.appendChild(counterWrapper);

      function updateTotalCounter() {
        totalCounter = Array.from(document.querySelectorAll(".Counter h3"))
          .map((counter) => parseInt(counter.textContent.split(" ")[2]))
          .reduce((acc, val) => acc + val, 0);

        sumCounterElement.textContent = `Sum Counter : ${totalCounter}`;
      }
    });
  });