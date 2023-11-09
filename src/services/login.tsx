export const postlogin = (formData: any) => {
  return fetch("http://localhost:4000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((data) => {
      data.json();
    })
    .catch((error: any) => {
      error.json();
    });
};
