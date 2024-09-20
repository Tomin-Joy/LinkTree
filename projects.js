function fill_data() {
  var data = {
    projects: [
      {
        name: "Asthra-8.0",
        URL: "https://asthra.sjcetpalai.ac.in/",
        description:
          "A webapp to showcase and manage various events, workshops and competition of Asthra 8.0",
      },
      {
        name: "QR Code Generator",
        URL: "https://simple-qr-maker.netlify.app/",
        description: "An add-free simple QR code generator",
      },
      {
        name: "Experimental Portfolio",
        URL: "https://tominjoy2.netlify.app/",
        description: "An Experimental Portfolio",
      },
      {
        name: "ECSA",
        URL: "https://ecsa.sjcetpalai.ac.in/",
        description: "Landing page of ECSA, a student organisation",
      },
      {
        name: "MedLab",
        URL: "https://medlab-mini.netlify.app/",
        description: "MedLab - A patient tracking system for doctors",
      },
      {
        name: "Asthra-7.0",
        URL: "https://asthra7.netlify.app/",
        description: "Asthra-7.0",
      },
      {
        name: "KHM'22",
        URL: "https://khm2022.netlify.app/",
        description: "KHM'22 website, a landing page for event KHM'22",
      },
      {
        name: "Sight SMP",
        URL: "https://sightsmp.netlify.app/",
        description:
          "Sight SMP website, a webpage to sent awarness about Student mentorship Program",
      },
      {
        name: "CovidSJCET",
        URL: "https://cipherguys.github.io/CovidSJCET/",
        description:
          "CovidSJCET, a webpage to get realtime covid statistics of SJCET",
      },
      {
        name: "Attendance-Requirement Calculator",
        URL: "https://ktureqhrcalc.netlify.app/",
        description:
          "Calculates attendance requirements based on college rules",
      },
      {
        name: "CTF Platform",
        URL: "https://ctf-asthra22.herokuapp.com/",
        description: "Platform for Capture the Flag competitions",
      },
      {
        name: "Jesus Youth Prayer Request",
        URL: "https://cipherguys.github.io/JY-prayerReq/",
        description: "Submit prayer requests for Jesus Youth",
      },
      {
        name: "Portfolio Rater",
        URL: "https://cipherguys.github.io/website-rater/",
        description: "Get feedback on your website design",
      },
    ],
  };
  var template = Handlebars.compile(
    document.querySelector("#template").innerHTML
  );
  var filled = template(data);
  document.querySelector("#prlinks").innerHTML = filled;
}
