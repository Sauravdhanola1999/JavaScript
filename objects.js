const fetchData = async () => {
  try {
    const [uPosts, uComments, uResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);
    const [uP, uC, uR] = await Promise.all([
      uPosts.json(),
      uComments.json(),
      uResponse.json(),
    ]);
    console.log(uP, uC, uR);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
