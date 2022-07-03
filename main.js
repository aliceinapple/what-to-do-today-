let dataWrapper = document.getElementById("data-wrapper");

const func = (data) => {
  return `
  <div class="data-item">
    <div>${data.activity}</div>
  </div>
  `;
};

fetch("http://www.boredapi.com/api/activity/")
  .then((response) => response.json())
  .then((data) => {
    dataWrapper.innerHTML += func(data)
  });


  