//function to set about
var base_url = "https://icircles.app/";
let username = "";
let authorImgUrl = "";
aboutRender = (about) => {
  username = about.username; //for globally access

  //user tab name
  username = about.username;
  document.getElementById("tabName").innerHTML = `${about.username}`;

  //Background Image
  authorImgUrl = base_url + about.thumb;
  document.getElementById(
    "backgroundImg"
  ).style.backgroundImage = `url(${authorImgUrl})`;

  //Left side bar
  document.getElementById("aboutImage").src = base_url + about.thumb;
  let fName = about.firstname;
  let lName = about.lastname;
  let fullName = fName.concat(" ", lName);
  const nameLength = fullName.length;
  if (nameLength > 16) {
    document.getElementById("fullName").style.fontSize = "15px";
  }
  document.getElementById("fullName").innerHTML = `${fullName}`;
  document.getElementById("userDesignation").innerHTML = `${about.designation}`;

  //about full name
  document.getElementById("aboutFullName").innerHTML = `I’m ${fullName}! `;

  //About description
  let htmlText = "";
  const strShort = about.about_me;
  const strlong = about.about_me;
  // 👇️ First 25 words
  const shortDescription = strShort.split(" ").slice(0, 30).join(" ");
  const longDescription = strlong.split(" ").slice(31, 100).join(" ");

  if (shortDescription.length < 50) {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("homeUserAboutDiv").innerHTML = `${about.about_me}`;
  } else {
    htmlText = `
    <div><span id="shortTitle">${shortDescription}</span><span id="dots"> ... </span></div>
    <div id="more">${longDescription}</div>
    `;
    document.getElementById("homeUserAboutDiv").innerHTML = htmlText;
  }

  //about image
  document.getElementById("aboutProfileImage").src = base_url + about.thumb;

  //Social Icons
  let socialIcon = ``;
  if (about.facebook) {
    socialIcon += `<li><a href="#" style="color: #1872ef;"><i class="fa-brands fa-facebook"></i></a></li>`;
  }
  if (about.twitter) {
    socialIcon += `<li><a href="#" style="color: #00c0ff;"><i class="fa-brands fa-twitter"></i></a></li>`;
  }
  if (about.instagram) {
    socialIcon += `<li><a href="#" style="color: #ff2d95;"><i class="fa-brands fa-instagram"></i></a></li>`;
  }
  if (about.linkedin) {
    socialIcon += `<li><a href="#" style="color: #0170c7;"><i class="fa-brands fa-linkedin-in"></i></a></li>`;
  }
  if (about.github) {
    socialIcon += `<li><a href="#" style="color: #333333;"><i class="fa-brands fa-github"></i></a></li>`;
  }
  if (about.whatsapp) {
    socialIcon += `<li><a href="#" style="color: #333333;"><i class="fa-brands fa-whatsapp"></i></a></li>`;
  }
  if (about.skype) {
    socialIcon += `<li><a href="#" style="color: #0170c7;"><i class="fa-brands fa-skype"></i></a></li>`;
  }
  document.getElementById("socilaMediaIcons").innerHTML = socialIcon;

  //About
  let details = ``;
  if (about.email) {
    details += `
    <li><a href="#"><span><i class="fa-solid fa-envelope-open"></i></span>${about.email}</a></li>`;
  }
  if (about.phone) {
    details += `
    <li><a href="#"><span><i class="fa-brands fa-whatsapp"></i></span>${about.phone}</li>`;
  }
  if (about.country) {
    details += `
    <li><a href="#"><span><i class="fa-solid fa-location"></i></span>${about.country}</a></li>`;
  }
  if (about.city) {
    details += `
    <li><a href="#"><span><i class="fa-solid fa-location-dot"></i></span>${about.city}</a></li>`;
  }
  if (about.address) {
    details += `
    <li><a href="#"><span><i class="fa-solid fa-map-location"></i></span>${about.address}</a></li>`;
  }
  if (about.mobile) {
    details += `
    <li><a href="#"><span><i class="fa-solid fa-phone"></i></span>${about.mobile}</a></li>`;
  }
  if (about.web_site) {
    details += `
    <li><a href="#"><span><i class="fa-solid fa-link"></i></span>${about.web_site}</a></li>`;
  }

  document.getElementById("aboutDetails").innerHTML = details;

  // Resume url
  document.getElementById("ResumeUrl").href = base_url + about.resume;

  //skill photo
  document.getElementById("skillPhoto").innerHTML = `
   <div class="col-lg-12">
   <div class="skill_img1">
        <img src=${authorImgUrl} alt="">
   </div>
</div>
   `;

   //footer
   document.getElementById("footer").innerHTML = `
   <h4>© 2022, ${about.firstname} ${about.lastname}. All Rights Reserved.</h4>
   `;
};

//function to set work experiences
workExperienceRender = (experiences) => {
  var length = experiences.length;
  if (length === 0) {
    document.getElementById("experienceTitle").style.display = "none";
    document.getElementById("experienceFullCard").style.display = "none";
  }

  let htmlText = "";
  experiences.map((expData) => {
    let end_date = expData.to_date.split("-");
    const thatYear = new Date(expData.from_date);
    const thisYear = new Date(expData.to_date);
    let toYear = thisYear.getFullYear();
    let year = thatYear.getFullYear();

    if (end_date[0] == "0000") {
      htmlText += `
      <div class="resume_container">
      <div class="card_head">
           <h4> <span><i class="fa-solid fa-circle-dot"></i></span>${expData.job_title}</h4>
           <h6><span><i class="fa-solid fa-calendar-days"></i></span> ${year} To
                Present</h6>
      </div>
      <h5>${expData.company_name}</h5>
      <p>${expData.details}</p>
 </div>
      `;
    } else {
      htmlText += `
      <div class="resume_container">
      <div class="card_head">
           <h4> <span><i class="fa-solid fa-circle-dot"></i></span>${expData.job_title}</h4>
           <h6><span><i class="fa-solid fa-calendar-days"></i></span> ${year} To  ${toYear}</h6>
      </div>
      <h5>${expData.company_name}</h5>
      <p>${expData.details}</p>
 </div>
      `;
    }
  });
  document.getElementById("experienceFullCard").innerHTML = htmlText;
};

// function to set user educations information
educationsRender = (educations) => {
  var length = educations.length;
  console.log("Education length" + length);
  if (length === 0) {
    document.getElementById("educationTitle").style.display = "none";
    document.getElementById("educationSectionData").style.display = "none";
  }

  let htmlText = "";
  educations.map((eduData) => {
    let end_date = eduData.to_date.split("-");
    const thisYear = new Date(eduData.to_date);
    let toYear = thisYear.getFullYear();
    const thatYear = new Date(eduData.from_date);
    let year = thatYear.getFullYear();

    if (end_date[0] == "0000") {
      htmlText += `
      <div class="resume_container">
      <div class="card_head">
           <h4> <span><i class="fa-solid fa-circle-dot"></i></span>${eduData.institution_name}</h4>
           <h6><span><i class="fa-solid fa-calendar-days"></i></span> ${year} To
                Present</h6>
      </div>
      <h5>${eduData.degree_name}</h5>
      <p>${eduData.details}</p>
 </div>
      `;
    } else {
      htmlText += `
      <div class="resume_container">
      <div class="card_head">
           <h4> <span><i class="fa-solid fa-circle-dot"></i></span>${eduData.institution_name}</h4>
           <h6><span><i class="fa-solid fa-calendar-days"></i></span> ${year} To  ${toYear}</h6>
      </div>
      <h5>${eduData.degree_name}</h5>
      <p>${eduData.details}</p>
 </div>
 `;
    }
  });
  document.getElementById("educationSectionData").innerHTML = htmlText;
};

//function to set skill video
profileVideoRender = (portfolioVideo) => {
  const videoLength = portfolioVideo.length;
  let htmlText = "";

  if (videoLength <= 0) {
    document.getElementById("skillVideo").style.display = "none";
  }

  portfolioVideo.map((videoData) => {
    htmlText += `
        <a  href="https://icircles.app/uploads/user/${username}/${videoData.video}"> <i class="fa-solid fa-play"></i></a>
      `;
  });

  document.getElementById("skillVideo").innerHTML = htmlText;
};

//function to set Skills
skillRender = (skills) => {
  var length = skills.length;
  if (length === 0) {
    document.getElementById("skillSection").style.display = "none";
  }

  let htmlText = "";
  skills.map((skills) => {
    if (skills.skill_level == "Advanced") {
      htmlText += `
      <div class="progress_wrapeer">
            <h6>${skills.name}</h6>
            <a href="#"><span class="counter">95</span> %</a>
      </div>
      <div class="progress">
            <div class="progress-value value_2"></div>
      </div>
     
            `;
    }
    if (skills.skill_level == "Intermediate") {
      htmlText += `
      <div class="progress_wrapeer">
            <h6>${skills.name}</h6>
            <a href="#"><span class="counter">85</span> %</a>
      </div>
      <div class="progress">
            <div class="progress-value value_3"></div>
      </div>
   
            `;
    }
    if (skills.skill_level == "Beginner") {
      htmlText += `
      <div class="progress_wrapeer">
        <h6>Digital Marketing</h6>
         <a href="#"><span class="counter">40</span>%</a>
      </div>
      <div class="progress">
        <div class="progress-value value_4"></div>
      </div>
     
            `;
    }
  });
  document.getElementById("skillsId").innerHTML = htmlText;
};

//function to set services
serviceRender = (services) => {
  var length = services.length;
  if (length === 0) {
    document.getElementById("serviceSection").style.display = "none";
  }

  let htmlText = "";
  services.map((serviceData) => {
    const str = serviceData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 20).join(" ");

    htmlText += ` 
    <div class="col-md-6 col-lg-3">
          <div class="service_item text-center">
              <img class="pt-2" src="${base_url}/${serviceData.thumb}" alt="">
              <h3>${serviceData.service_name}</h3>
              <p>${shortDescription}</p>
          </div>
    </div>
    `;
  });
  document.getElementById("servicesId").innerHTML = htmlText;
};

//functions to set testimonials
testimonialRender = (testimonial) => {
  var length = testimonial.length;
  if (length === 0) {
    document.getElementById("clientAndTestimonial").style.display = "none";
  }

  let htmlText = "";
  testimonial.map((testimonialData) => {
    const str = testimonialData.feedback;

    // 👇️ First 25 words
    const shortFeedback = str.split(" ").slice(0, 25).join(" ");
    // console.log(shortFeedback);
    htmlText += `
    <div class="slider_item">
    <div class="text_item">
         <p>${testimonialData.feedback}</p>
         <p>${shortFeedback}... <strong></strong></p>
    </div>
    <div class="client_profile text-center">
         <div class="profile_img">
         <img src="${base_url}/${testimonialData.image}" alt="" width="100px" height="100px">
         </div>
         <div class="client_info">
              <h4>${testimonialData.client_name}</h4>
         </div>
    </div>
</div>
                                  
    `;
  });
  document.getElementById("sliderId").innerHTML = htmlText;
};

//function to set languages
languageRender = (languages) => {
  var length = languages.length;
  if (length === 0) {
    document.getElementById("languageSection").style.display = "none";
  }

  let htmlText = "";
  languages.map((languages) => {
    if (languages.level == "Advanced") {
      htmlText += `
    
      <div class="col-6 col-md-6 col-lg-2">
           <div class="circle">
                <div class="text">
                     <span class="counter"> 100</span> %
                </div>
                <svg>
                     <circle class="bg" cx="57" cy="57" r="52"></circle>
                     <circle class="progress Bangla" cx="57" cy="57" r="52"></circle>
                </svg>
           </div>
           <div class="cercle_title text-center">
                <h4>${languages.title}</h4>
           </div>
      </div>
           
            `;
    }
    if (languages.level == "Intermediate") {
      htmlText += `
      <div class="col-6 col-md-4 col-lg-2">
      <div class="circle">
           <div class="text">
                <span class="counter">80</span> %
           </div>
           <svg>
                <circle class="bg" cx="57" cy="57" r="52"></circle>
                <circle class="progress freanch" cx="57" cy="57" r="52"></circle>
           </svg>
      </div>
      <div class="cercle_title text-center">
           <h4>${languages.title}</h4>
      </div>
 </div>
        
            `;
    }
    if (languages.level == "Beginner") {
      htmlText += `
      <div class="col-6 col-md-4 col-lg-2">
        <div class="circle">
          <div class="text">
            <span class="counter">80</span></div>
               <svg>
                 <circle class="bg" cx="57" cy="57" r="52"></circle>
                 <circle class="progress freanch" cx="57" cy="57" r="52"></circle>
                </svg>
            </div>
          <div class="cercle_title text-center">
            <h4>${languages.title}</h4>
              </div>
          </div>
            
            `;
    }
  });
  document.getElementById("languageId").innerHTML = htmlText;
};

//function to set portfolio
portfolioRender = (portfolios) => {
  var length = portfolios.length;
  if (length === 0) {
    document.getElementById("portfolioSection").style.display = "none";
  }

  let htmlText = "";
  const keys = Object.keys(portfolios);
  keys.map((key, index) => {
    portfolios[key].map((item, index) => {
      htmlText += `
      <div class="col-lg-4">
          <div class="port_img">
               <img src="${base_url + "/" + item.image}" alt="">
               <div class="portfolio_overly">
                     <span><i class="fa-solid fa-camera"></i></span>
                     <h4>${item.project_name}</h4>
               </div>
           </div>
     </div>
      
    `;
    });
  });

  document.getElementById("portfolioCards").innerHTML = htmlText;
};

//function to set blogs or journal
blogRender = (blogs) => {
  var length = blogs.length;
  if (length === 0) {
    document.getElementById("blogSection").style.display = "none";
  }

  let htmlText = "";
  const keys = Object.keys(blogs);
  keys.map((key) => {
    blogs[key].map((item) => {
      const thatYear = new Date(item.created_date);
      let year = thatYear.getFullYear();
      let day = thatYear.toLocaleString("en-US", { weekday: "long" }); // Monday
      let month = thatYear.toLocaleString("en-us", {
        month: "long",
      }); /* June */
      let date = thatYear.getDate(); /* 9 */

      const str = item.description;
      // 👇️ First 25 words
      const shortDescription = str.split(" ").slice(0, 30).join(" ");
      const longtDescription = str.split(" ").slice(46, 120).join(" ");
      htmlText += `
      <div class="col-lg-4 col-md-6 list-element mb-3">
      <div class="news_wrap">
           <div class="news_img">
                <img src=${base_url+"/"+item.image} alt="">
           </div>
           <div class="news_text text-center">
                <h5>${item.title}</h5>
                <p>${shortDescription}</p>
                <a href="#">Read More <span><i
                class="fa-solid fa-right-long"></i></span></a>
           </div>
         </div>
      </div>
      `;
    });
  });
  document.getElementById("blogId").innerHTML = htmlText;
};

//function to set awards
awardRender = (awards) => {
  var length = awards.length;
  if (length === 0) {
    document.getElementById("awardSection").style.display = "none";
  }

  let htmlText = "";
  awards.map((awardData) => {
    const thatYear = new Date(awardData.created_date);
    let year = thatYear.getFullYear();
    const str = awardData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 25).join(" ");
    htmlText += `
    <div class="col-md-6 col-lg-4 mt-3 mb-3">
      <div class="award_wrap">
              <div class="awrad_img">
                    <img src="images/award.png" alt="">
              </div>
              <div class="award_info">
                    <h4>${awardData.title}</h4>
                    <p>${shortDescription} ...</p>
              </div>
          </div>
    </div>
    `;
  });
  document.getElementById("awardId").innerHTML = htmlText;
};


//function to set the whole ui
render = (data) => {
  aboutRender(data.about);
  workExperienceRender(data.experiences);
  educationsRender(data.educations);
  profileVideoRender(data.profile_video);
  skillRender(data.subskills);
  serviceRender(data.services);
  testimonialRender(data.testimonials);
  languageRender(data.languages);
  portfolioRender(data.portfolios);
  blogRender(data.blogs);
  awardRender(data.awards);
};

//Fetch api
var url = document.URL;
let usrnm = url.split("/");
fetch(
  "https://icircles.app/api/profile/usermicrosite/" + usrnm[usrnm.length - 1]
)
  .then((responsse) => responsse.json())
  .then((data) => {
    console.log(data);
    render(data);
  });

//Get dynamic aside ul list
fetch(
  "https://icircles.app/api/profile/usermicrosite/" + usrnm[usrnm.length - 1]
)
  .then((responsse) => responsse.json())
  .then((data) => {
    //Get all the field length
    const experienceLength = data.experiences.length;
    const subskillsLength = data.subskills.length;
    const servicesLength = data.services.length;
    const educationsLength = data.educations.length;
    const languagesLength = data.languages.length;
    const referencesLength = data.references.length;
    const clientsLength = data.clients.length;
    const interestsLength = data.interests.length;
    const awardsLength = data.awards.length;
    const portfoliosLength = Object.keys(data.portfolios).length;
    const blogsLength = Object.keys(data.blogs).length;
    const testimonialsLength = data.testimonials.length;

    let asideUl = ``;
    if (data.user_id) {
      asideUl += `
      <li> <a href="#home">Home</a> </li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li> <a href="#about">About</a> </li>
        `;
    }
    if (experienceLength >= 1) {
      asideUl += `
      <li> <a href="#resume">Experience</a> </li>
        `;
    }
    if (educationsLength >= 1) {
      asideUl += `
      <li> <a href="#resume">Education</a> </li>
        `;
    }
    if (subskillsLength >= 1) {
      asideUl += `
      <li> <a href="#skillSection">Skills</a> </li>
        `;
    }
    if (servicesLength >= 1) {
      asideUl += `
      <li> <a href="#serviceSection">Services</a> </li>
        `;
    }
    if (languagesLength >= 1) {
      asideUl += `
      <li> <a href="#languageSection">Languages</a> </li>
        `;
    }
    if (portfoliosLength >= 1) {
      asideUl += `
      <li> <a href="#portfolioSection">Portfolio</a> </li>
        `;
    }
    if (awardsLength >= 1) {
      asideUl += `
      <li> <a href="#awardSection">Awards</a> </li>
        `;
    }
    // if (interestsLength >= 1) {
    //   asideUl += `
    //   <li> <a href="#home">Interest</a> </li>
    //     `;
    // }
    if (clientsLength >= 1) {
      asideUl += `
      <li> <a href="#clientAndTestimonial">Clients</a> </li>
        `;
    }
    if (blogsLength >= 1) {
      asideUl += `
      <li> <a href="#blogSection">Blogs</a> </li>
        `;
    }
    if (testimonialsLength >= 1) {
      asideUl += `
      <li> <a href="#clientAndTestimonial">Testimonial</a> </li>
        `;
    }
    // if (referencesLength >= 1) {
    //   asideUl += `
    //   <li> <a href="#home">References</a> </li>
    //     `;
    // }
    if (data.user_id) {
      asideUl += `
      <li> <a href="#appointmentSection">Appointment</a> </li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li> <a href="#contact">Contact</a> </li>
        `;
    }

    document.getElementById("navBarList").innerHTML = asideUl;
    document.getElementById("headerNavbar").innerHTML = asideUl;
    document.getElementById("navMenuList").innerHTML = asideUl;
  });
