class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  try {
    const fetchResult = await fetch(url);
    if (fetchResult.status == 200) {
      return fetchResult.json();
    } else {
      throw new HttpError(fetchResult);
    }
  } catch (err) {
    console.log(
      "There was an eror on trying loading the json file.",
      err.name,
      err.message
    );
  }
}

async function demoGithubUser() {
  let name = prompt("Enter a name?", "M-oliveda");
  try {
    const user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Full name: ${user.name}.`);
    return user;
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      alert("No such user, please reenter.");
      return demoGithubUser();
    } else {
      throw err;
    }
  }
}
