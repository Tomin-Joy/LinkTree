function fill_data() {
  var data = {
    projects: [
      {
        name: "Asthra-8.0",
        URL: "https://asthra8.vercel.app",
        description:
          "A webapp to showcase and manage various events, workshops and competition of Asthra 8.0",
        deployed: true,
        public: false,
      },
      {
        name: "QR Code Generator",
        URL: "https://simple-qr-maker.netlify.app/",
        description: "An add-free simple QR code generator",
        deployed: true,
        public: true,
        cUrl: "https://github.com/Tomin-Joy/qr_generator",
      },
      {
        name: "MedLab",
        URL: "https://medlab-mini.netlify.app/",
        description: "MedLab - A patient tracking system for doctors",
        deployed: true,
        public: true,
        cUrl: "https://github.com/Project-minikuty/medlab",
      },

      {
        name: "ECSA",
        URL: "https://ecsa.sjcetpalai.ac.in/",
        description: "Landing page of ECSA, a student organisation",
        deployed: true,
        public: false,
        cUrl: "",
      },

      {
        name: "Asthra-7.0",
        URL: "https://asthra7.netlify.app/",
        description: "Asthra-7.0",
        deployed: true,
        public: false,
        cUrl: "",
      },
      {
        name: "KHM'22",
        URL: "https://khm2022.netlify.app/",
        description: "KHM'22 website, a landing page for event KHM'22",
        deployed: true,
        public: false,
        cUrl: "",
      },
      {
        name: "Sight SMP",
        URL: "https://sightsmp.netlify.app/",
        description:
          "Sight SMP website, a webpage to sent awarness about Student mentorship Program",
        deployed: true,
        public: true,
        cUrl: "https://github.com/IEEESJCET/SMP",
      },
      {
        name: "CovidSJCET",
        URL: "https://cipherguys.github.io/CovidSJCET/",
        description:
          "CovidSJCET, a webpage to get realtime covid statistics of SJCET",
        deployed: true,
        public: false,
        cUrl: "https://github.com/Tomin-Joy/CovidSJCET",
      },
      {
        name: "Attendance-Requirement Calculator",
        URL: "https://ktureqhrcalc.netlify.app/",
        description:
          "Calculates attendance requirements based on college rules",
        deployed: true,
        public: true,
        cUrl: "https://github.com/Tomin-Joy/Attendence-Requirement",
      },
      {
        name: "Experimental Portfolio",
        URL: "https://tominjoy2.netlify.app/",
        description: "An Experimental Portfolio",
        deployed: true,
        public: false,
        cUrl: "",
      },
      {
        name: "CTF Platform",
        URL: "https://ctf-asthra22.herokuapp.com/",
        description: "Platform for Capture the Flag competitions",
        deployed: false,
        public: true,
        cUrl: "https://github.com/cipherGUYS/Asthra22-CTF",
      },
      {
        name: "Jesus Youth Prayer Request",
        URL: "https://cipherguys.github.io/JY-prayerReq/",
        description: "Submit prayer requests for Jesus Youth",
        deployed: true,
        public: false,
        cUrl: "https://github.com/Tomin-Joy/JY-prayerReq",
      },
      {
        name: "Portfolio Rater",
        URL: "https://cipherguys.github.io/website-rater/",
        description: "Get feedback on your website design",
        deployed: true,
        public: true,
        cUrl: "https://github.com/Tomin-Joy/website-rater",
      },
    ],
  };
  var template = Handlebars.compile(
    document.querySelector("#template").innerHTML
  );
  var filled = template(data);
  document.querySelector("#prlinks").innerHTML = filled;
}
