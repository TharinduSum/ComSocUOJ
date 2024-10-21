const btnRegistration = document.getElementById("registration");
const btnImportantDates = document.getElementById("importantDates");
const btnVenue = document.getElementById("venue");
const btnDetailed = document.getElementById("detailProgramme");

const content = document.getElementById("content");

const registration = () => {
  content.innerHTML = `
  <h1>Registration</h1>
          
            <h3>Registration</h3>

<p class="my-4">
  Deadline For Applications: 1 November 2024
</p>
<p class="my-4">
  Students will be notified of application decisions by 22 November 2024 via email. 
</p>
<p>
  <a href="https://www.comsoc.org/education-training/ieee-comsoc-school-series/2025-ieee-comsoc-school-series-jaffna-sri-lanka-event" style="color: #2C74B3; text-decoration: underline;">Click here to register</a>
</p>

            <hr class="my-8" style="width:100%;">
            
          
  
  `;
};

const important = () => {
  content.innerHTML = `
    <h1>Important Dates</h1>
    <table class="important-dates mt-8">
    <tr>
    <td>Call For Applications</td>
      <td>01 Nov 2024</td>
    </tr>
    <tr>
    <td>Deadline For Applications</td>
      <td></td>
    </tr>
    <tr>
      <td>Deadline For Registration</td>
        <td></td>
      </tr>
      <tr>
      <td></td>
        <td></td>
      </tr>
    </table>
    
    `;
};

const venue = () => {
  content.innerHTML = `
    <h1>Venue</h1>
        
        
    <p class="mt-8 color-black">
    Auditorium, <br/>Department of Electrical and Electronic Engineering,
    <br/>
Faculty of Engineering,
<br/>
University of Jafna,
<br/>
Jaffna.
<br/>
<br/>
<b>Location:</b><br/>
Araviyal Nagar, Thirumurukandy, Jaffna.
    
    </p>

    <div class="map-holder"></br>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.187723631857!2d80.40004067463013!3d9.316628584421057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe96901581421d%3A0x3d3557c67d291156!2sFaculty%20Of%20Engineering%2C%20University%20of%20Jaffna!5e0!3m2!1sen!2slk!4v1729543564325!5m2!1sen!2slk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>    
    `;
};

const detailed = () => {
  content.innerHTML = `
    <h1>Detailed Programme <p style="font-size:1rem"></p></h1>
    <p> Upload soon.....</p>
        
<hr style="width:40%;height:.5rem;margin:2rem auto;margin-top:4rem"/>

    `;
};
const initial = (loadContent) => {
  switch (loadContent) {
    case "registration":
      registration();
      break;
    case "importantDates":
      important();
      break;
    case "venue":
      venue();
      break;
    case "detailedProgramme":
      detailed();
      break;
    default:
      registration();
  }
};
btnRegistration.addEventListener("click", registration);
btnImportantDates.addEventListener("click", important);
btnDetailed.addEventListener("click", detailed);
btnVenue.addEventListener("click", venue);
initial(window.location.search.split("?p=")[1]);
