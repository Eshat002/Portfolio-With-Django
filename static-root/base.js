function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
const csrfToken = getCookie("csrftoken");

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//toggle functionality
const toggle_circle = document.querySelector(".toggle-circle");
toggle_circle.onclick = function () {
toggle_circle.classList.toggle("dark-mode");

  if (toggle_circle.classList.contains("dark-mode")) {
      toggle_circle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
      </svg>`;

      document.querySelector("body").style.background = "black";
      document.querySelector(".side-navbar").style.backgroundColor = "#252B42";
      //section1
      document
        .querySelector(".section1")
        .querySelector(".container-fluid").style.backgroundColor = "#252B42";
      document.querySelector(".section1-headline").style.color = "#fff";
      document.querySelector(".section1-sub-headline").style.color = "#fff";
      document.querySelector(".section1-text").style.color = "#fff";
      document.querySelector(".section2-headline").style.color = "#fff";
      document.querySelector(".section2-text").style.color = "#fff";

      //section2

      const section2Cards = document.querySelectorAll(".section2-card");
      section2Cards.forEach((section2Card) => {
        section2Card.style.backgroundColor = "#252B42";
      });

      const section2CardSubTitles = document.querySelectorAll(
        ".section2-card-sub-title"
      );
      section2CardSubTitles.forEach((section2CardSubTitle) => {
        section2CardSubTitle.style.color = "#fff";
      });

      //section3
      document.querySelector(".section3-headline").style.color = "white";
      document.querySelector(".section3-sub-headline").style.color = "white";

      const section3Cards = document.querySelectorAll(".section3-card");
      section3Cards.forEach((section3Card) => {
        section3Card.style.backgroundColor = "#252B42";
      });

      const section3CardTitles = document.querySelectorAll(
        ".section3-card-title"
      );
      section3CardTitles.forEach((section3CardTitle) => {
        section3CardTitle.style.color = "#fff";
      });

      const prices = document.querySelectorAll(".section3-card-sub-title .price");
      prices.forEach((price) => {
        price.style.color = "#fff";
      });

      const hours = document.querySelectorAll(".section3-card-sub-title .hour");
      hours.forEach((hour) => {
        hour.style.color = "#fff";
      });

      const section3CardTexts = document.querySelectorAll(".section3-card-text");
      section3CardTexts.forEach((section3CardText) => {
        section3CardText.style.color = "#fff";
      });

      const paraOfSection3 = document.querySelectorAll(
        ".seciton3-card-sec-seg p"
      );

      paraOfSection3.forEach((para) => {
        para.style.color = "#fff";
      });

      //section4
      document.querySelector(".section4-headline").style.color = "white";
      document.querySelector(".section4-text").style.color = "white";

      const section4Cards = document.querySelectorAll(".section4-card");
      section4Cards.forEach((section4Card) => {
        section4Card.style.backgroundColor = "#252B42";
      });

      const section4CardTitles = document.querySelectorAll(
        ".section4-card-title"
      );
      section4CardTitles.forEach((section4CardTitle) => {
        section4CardTitle.style.color = "#fff";
      });

      const section4CardTexts = document.querySelectorAll(".section4-card-text");
      section4CardTexts.forEach((section4CardText) => {
        section4CardText.style.color = "#fff";
      });

      const section4CardNames = document.querySelectorAll(".section4-card .name");
      section4CardNames.forEach((section4CardName) => {
        section4CardName.style.color = "#fff";
      });

      const section4CardProfessions = document.querySelectorAll(
        ".section4-card .profession"
      );
      section4CardProfessions.forEach((section4CardProfession) => {
        section4CardProfession.style.color = "#fff";
      });
      //section5
      document.querySelector(".section5-headline").style.color = "white";
      document.querySelector(".section5-sub-headline").style.color = "white";

      const section5section2 = document.querySelector(".section5-section-2");
      section5section2.style.backgroundColor = "#252B42";
      positions = section5section2.querySelectorAll(".position");
      positions.forEach((position) => {
        position.style.color = "white";
      });

      const students = section5section2.querySelectorAll(".student");
      students.forEach((student) => {
        student.style.color = "white";
      });

      const certificateTitles =
        section5section2.querySelectorAll(".certificate-title");
      certificateTitles.forEach((certificateTitle) => {
        certificateTitle.style.color = "white";
      });

      const certificateDess =
        section5section2.querySelectorAll(".certificate-des");
      certificateDess.forEach((certificateDes) => {
        certificateDes.style.color = "white";
      });

      //section6
      document.querySelector(".section6-headline").style.color = "white";
      document.querySelector(".section6-sub-headline").style.color = "white";

      document.querySelector(".section6-headline").style.color = "white";

      const section6CardTitles = document.querySelectorAll(
        ".section6-card-title"
      );
      section6CardTitles.forEach((section6CardTitle) => {
        section6CardTitle.style.color = "white";
      });
      //section7
      document.querySelector(".section7-headline").style.color = "white";
      document.querySelector(".section7 .form-container").style.backgroundColor =
        "#252B42";

      const section7FormLabels = document.querySelectorAll(
        ".section7 .form-container label"
      );
      section7FormLabels.forEach((section7FormLabel) => {
        section7FormLabel.style.color = "white";
      });
      document.querySelector("footer .row").style.backgroundColor = "#252B42";
      document.querySelector("footer .row p").style.color = "white";
  } else {

        toggle_circle.innerHTML = `
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
        </svg>
      `;

        document.querySelector("body").style.background = "#F0F0F6";
        document.querySelector(".side-navbar").style.backgroundColor = "#fff";

        //section1
        document
          .querySelector(".section1")
          .querySelector(".container-fluid").style.backgroundColor = "#fff";
        document.querySelector(".section1-headline").style.color = "#000000";
        document.querySelector(".section1-sub-headline").style.color = "#000000";
        document.querySelector(".section1-text").style.color = "#767676";
        document.querySelector(".section2-headline").style.color = "black";
        document.querySelector(".section2-text").style.color = "black";

        //secdtion2
        const section2Cards = document.querySelectorAll(".section2-card");
        section2Cards.forEach((section2Card) => {
          section2Card.style.backgroundColor = "#fff";
        });
        const section2CardSubTitles = document.querySelectorAll(
          ".section2-card-sub-title"
        );
        section2CardSubTitles.forEach((section2CardSubTitle) => {
          section2CardSubTitle.style.color = "#767676";
        });
        //section3
        document.querySelector(".section3-headline").style.color = "black";
        document.querySelector(".section3-sub-headline").style.color = "#767676";

        const section3Cards = document.querySelectorAll(".section3-card");
        section3Cards.forEach((section3Card) => {
          section3Card.style.backgroundColor = "#fff";
        });

        const section3CardTitles = document.querySelectorAll(
          ".section3-card-title"
        );
        section3CardTitles.forEach((section3CardTitle) => {
          section3CardTitle.style.color = "#000000";
        });

        const prices = document.querySelectorAll(".section3-card-sub-title .price");
        prices.forEach((price) => {
          price.style.color = "#000000";
        });

        const hours = document.querySelectorAll(".section3-card-sub-title .hour");
        hours.forEach((hour) => {
          hour.style.color = "#000000";
        });

        const section3CardTexts = document.querySelectorAll(".section3-card-text");
        section3CardTexts.forEach((section3CardText) => {
          section3CardText.style.color = "#767676";
        });

        const paraOfSection3 = document.querySelectorAll(
          ".seciton3-card-sec-seg p"
        );

        paraOfSection3.forEach((para) => {
          para.style.color = "#000000";
        });

        //section4

        document.querySelector(".section4-headline").style.color = "black";
        document.querySelector(".section4-text").style.color = "#767676";

        const section4Cards = document.querySelectorAll(".section4-card");
        section4Cards.forEach((section4Card) => {
          section4Card.style.backgroundColor = "#fff";
        });

        const section4CardTitles = document.querySelectorAll(
          ".section4-card-title"
        );
        section4CardTitles.forEach((section4CardTitle) => {
          section4CardTitle.style.color = "black";
        });

        const section4CardTexts = document.querySelectorAll(".section4-card-text");
        section4CardTexts.forEach((section4CardText) => {
          section4CardText.style.color = "#767676";
        });

        const section4CardNames = document.querySelectorAll(".section4-card .name");
        section4CardNames.forEach((section4CardName) => {
          section4CardName.style.color = "black";
        });

        const section4CardProfessions = document.querySelectorAll(
          ".section4-card .profession"
        );
        section4CardProfessions.forEach((section4CardProfession) => {
          section4CardProfession.style.color = "black";
        });

        //section5

        document.querySelector(".section5-headline").style.color = "black";
        document.querySelector(".section5-sub-headline").style.color = "#767676";

        const section5section2 = document.querySelector(".section5-section-2");
        section5section2.style.backgroundColor = "#fff";
        positions = section5section2.querySelectorAll(".position");
        positions.forEach((position) => {
          position.style.color = "black";
        });

        const students = section5section2.querySelectorAll(".student");
        students.forEach((student) => {
          student.style.color = "black";
        });

        const certificateTitles =
          section5section2.querySelectorAll(".certificate-title");
        certificateTitles.forEach((certificateTitle) => {
          certificateTitle.style.color = "black";
        });

        const certificateDess =
          section5section2.querySelectorAll(".certificate-des");
        certificateDess.forEach((certificateDes) => {
          certificateDes.style.color = "#767676";
        });

        //section6
        document.querySelector(".section6-headline").style.color = "black";
        document.querySelector(".section6-sub-headline").style.color = "#767676";

        document.querySelector(".section6-headline").style.color = "black";

        const section6CardTitles = document.querySelectorAll(
          ".section6-card-title"
        );
        section6CardTitles.forEach((section6CardTitle) => {
          section6CardTitle.style.color = "black";
        });

        //section7
        document.querySelector(".section7-headline").style.color = "black";
        document.querySelector(".section7 .form-container").style.backgroundColor =
          "#fff";

        const section7FormLabels = document.querySelectorAll(
          ".section7 .form-container label"
        );
        section7FormLabels.forEach((section7FormLabel) => {
          section7FormLabel.style.color = "#767676";
        });

        document.querySelector("footer .row").style.backgroundColor = "white";
        document.querySelector("footer .row p").style.color = "black";
      }
};
// toggle_circle.classList.add("dark-mode")
