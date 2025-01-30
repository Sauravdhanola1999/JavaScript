document.getElementById("id").addEventListener("click", fetchData);

const fetchData = async () => {
  try {
    const response = await fetch("");
    if (!response.ok) {
      console.log("Error");
    }
    const data = await response.json();
    console.log(data);

    document.getElementById("id").innerHTML = `   <h3>${data.title}</>
      <p>${data.body}</p>`;
  } catch (error) {
    console.log(error);
     document.getElementById('dataContainer').textContent = 'Failed to load data.'
  }
};
