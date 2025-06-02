function sendEmail() {
  var params = {
    name: prompt("Your name"),
    email: prompt("Your email"),
    message: prompt("Message you want to send"),
  };

  const serviceID = "service_9nw7mir";
  const templateID = "template_8b5k7y4";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
