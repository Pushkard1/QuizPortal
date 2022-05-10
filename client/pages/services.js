export async function Services() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQdXNoMTIzIiwiZXhwIjoxNjUyMjAwNzAwLCJpYXQiOjE2NTIxNjQ3MDB9.LUnElS0_gIhrrz1JZHktIxO2qF-KBYAny5QvgBus4lA"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const CurrentUser = await fetch(
    "http://localhost:8081/current-user",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
    console.log("CurrentUser : ", CurrentUser)
  return CurrentUser;
}
