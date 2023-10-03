async function ambilDataUserAsnyc() {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const users = await response.json();
      return console.log(users.data);;
    } catch (error) {
      console.error("Error occured:", error);
    }
  }
export default ambilDataUserAsnyc;