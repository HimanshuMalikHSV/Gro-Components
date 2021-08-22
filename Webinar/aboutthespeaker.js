const FORM_KEYS = {
  name: "contact_name",
  firstName: "contact_first_name",
  lastName: "contact_last_name",
  email: "contact_email",
  phone: "contact_phone",
  subject: "subject",
  companyName: "contact_company",
  jobTitle: "contact_title",
  country: "contact_country",
  message: "contact-message",
  AGREEMENT: "agreement",
};

export default function (editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;
  const cats = c.blockCategories;
  const { blocks } = c;
  const { labels } = c;
  if (cats.aboutthespeaker) {
   
      blocks.webinar_theme_aboutthespeaker_1 &&
      bm.add("webinar_theme_aboutthespeaker_1", {
        label:
          "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/About%20Speaker%201-min.png' />",
        category: labels.categoryaboutthespeaker,
        content: `
        <style>
    * {
      box-sizing: border-box;
    }

    body {
      --theme_primary: #2F80ED;
      --theme_light: #F9FAFB;
      --theme_text_primary: #222222;
      --theme_text_secondary: #4F4F4F;
      --theme_text_tertiary: #B0B0B0;
      --font_family: Open Sans, sans-serif;
    }
  </style>
  <section class="grpd-wrapper  grpd-font-weight-400">
    <div class="grpd-container-xxl grpd-mx-auto">
      <div class="grpd-row grpd-py-16 grpd-flex-column-reverse grpd-flex-lg-row">
        <div
          class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-py-32 grpd-px-lg-72  grpd-px-md-72  grpd-display-flex grpd-justify-content-center grpd-flex-column">
          <h2 class=" grpd-h2 grpd-py-16">
            Meet Your Host
          </h2>
          <h5 class="grpd-text-color-theme_primary">Nathan Salvator</h5>
          <p class="grpd-p grpd-text-color-text_secondary grpd-py-16">
            Nathan Salvator is an American businessman, investor, speaker, consultant, syndicated columnist, author, and
            television personality.Salvatore is a columnist for The Daily Review, and Redbook. He has written several
            books, and has been featured on Shark Tank, and CNN's Today show.</p>

          
          <div class=" grpd-display-flex grpd-py-4 ">
            <div
              class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
              <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
              </i>
            </div>
            <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
              <p class="grpd-p grpd-text-color-text_secondary grpd-font-weight-500">
                Point 1
              </p>
            </div>
          </div>
          <div class=" grpd-display-flex grpd-py-4 ">
            <div
              class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
              <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
              </i>
            </div>
            <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
              <p class="grpd-p grpd-text-color-text_secondary grpd-font-weight-500">
                Point 2
              </p>
            </div>
          </div>
          <div class=" grpd-display-flex  grpd-py-4 ">
            <div
              class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
              <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
              </i>
            </div>
            <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
              <p class="grpd-p  grpd-text-color-text_secondary grpd-font-weight-500">
                Point 3
              </p>
            </div>
          </div>
        </div>
        <div class="grpd-col-lg-6 grpd-col-md-12 grpd-display-flex grpd-justify-content-center grpd-mt-18 ">

          <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar1.png" alt=""
            class="grpd-width-lg-80 grpd-width-100" />
        </div>
      </div>
  </section>
        `,
      });
      blocks.webinar_theme_aboutthespeaker_2 &&
      bm.add("webinar_theme_aboutthespeaker_2", {
        label:
          "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/About%20Speaker%202-min.png' />",
        category: labels.categoryaboutthespeaker,
        content: `
        <style>
    * {
      box-sizing: border-box;
    }

    body {
      --theme_primary: #2F80ED;
      --theme_light: #F9FAFB;
      --theme_text_primary: #222222;
      --theme_text_secondary: #4F4F4F;
      --theme_text_tertiary: #B0B0B0;
      --font_family: Open Sans, sans-serif;
    }
  </style>


  <section class="grpd-wrapper grpd-py-16 grpd-font-weight-400 ">
    <div class="grpd-container-xxl grpd-py-12 grpd-mx-auto">
      <div class="grpd-row grpd-align-items-center ">
        <div class="grpd-col-lg-5 grpd-col-md-12 grpd-col-xs-12 grpd-justify-content-center ">
          <div class="grpd-pl-48 grpd-pr-32 grpd-pl-lg-0 grpd-pr-lg-0   grpd-pt-100">
            <figure class="grpd-position-relative grpd-justify-content-center">

              <figcaption class="grpd-position-absolute set_img grpd-bottom-0 grpd-left-40 grpd-top-m6">
                <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar2.png" id="icvbt-2"
                  class="grpd-width-75 grpd-width-lg-100 grpd-width-md-115 " />
              </figcaption>
              <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar2_back.png"
                id="icvbt-2" class="  grpd-width-55 grpd-width-lg-45 " />

            </figure>
          </div>
        </div>
        <div
          class="grpd-col-lg-7 grpd-col-md-12 grpd-col-xs-12 grpd-py-md-32 grpd-py-xs-32 grpd-px-lg-56 grpd-display-flex grpd-justify-content-center grpd-flex-column">
          <h3 class="grpd-h3 grpd-text-color-text_primary grpd-mt-8 grpd-py-16">
            Meet Your Host
          </h3>
          <h5 class="grpd-text-color-theme_primary">Nathan Salvator</h5>
          <p class="grpd-p grpd-py-16 grpd-text-color-text_secondary">
            Nathan Salvator is an American businessman, investor, speaker, consultant, syndicated columnist, author, and television personality.Salvatore is a columnist for The Daily Review, and Redbook. He has written several books, and has been featured on Shark Tank, and CNN's Today show.
          </p>
          <div class="grpd-py-32">
            <a href="#"
              class="grpd-button-secondary-theme_primary grpd-border grpd-border-color-theme_primary grpd-py-12 grpd-px-24 "><span
                class="grpd-font-weight-500">Start your free trial</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
        `,
      });
      blocks.webinar_theme_aboutthespeaker_3 &&
      bm.add("webinar_theme_aboutthespeaker_3", {
        label:
          "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/About%20Speaker%203-min.png' />",
        category: labels.categoryaboutthespeaker,
        content: `
        <style>
    * {
      box-sizing: border-box;
    }

    body {
      --theme_primary: #2F80ED;
      --theme_light: #F9FAFB;
      --theme_text_primary: #222222;
      --theme_text_secondary: #4F4F4F;
      --theme_text_tertiary: #B0B0B0;
      --font_family: Open Sans, sans-serif;
    }
  </style>


  <section class="grpd-wrapper grpd-py-32 grpd-font-weight-400 ">
    <div class="grpd-container-xxl grpd-py-12 grpd-mx-auto">

      <div class=" grpd-pl-32">
        <h2 class="grpd-h2 grpd-text-color-text_secondary">Webinar Speakers</h2>
      </div>

      <div class="grpd-row grpd-align-items-center ">
        
          <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12 grpd-px-32 grpd-py-32">
            <div class="grpd-row grpd-border-radius-4 grpd-justify-content-between grpd-align-items-center  ">
              <div class="grpd-col-lg-5 grpd-col-xs-12 ">
                <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar4.png" class="grpd-width-100"/>
              </div>
              <div class="grpd-col-lg-7 grpd-col-xs-12 grpd-pl-lg-36 grpd-pl-md-36 grpd-px-2 grpd-py-16">
                <h5 class="grpd-h4 grpd-text-color-theme_primary grpd-font-weight-500">Nathan Salvator
                </h5>
                <h6 class="grpd-body1 grpd-text-color-text_secondary ">CEO, Company name</h6>
               
                <p class="grpd-p  grpd-pt-8 grpd-text-color-text_secondary   ">
                  Nathan Salvator is an American businessman, investor, speaker, consultant, syndicated columnist, author, and television personality.
                </p>
                <div class="">   
                  <h4>
                  <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-facebook-square">
                  </i></a>
                
                <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-instagram">
                  </i></a>
                  <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-twitter">
                  </i></a>
                </h4>
              </div>
             
              </div>
            </div>
          </div>  
          <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12 grpd-px-32 grpd-py-32">
            <div class="grpd-row grpd-border-radius-4 grpd-justify-content-between grpd-align-items-center  ">
              <div class="grpd-col-lg-5 grpd-col-xs-12 ">
                <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar4.png" class="grpd-width-100"/>
              </div>
              <div class="grpd-col-lg-7 grpd-col-xs-12 grpd-pl-lg-36 grpd-pl-md-36 grpd-px-2 grpd-py-16">
                <h5 class="grpd-h4 grpd-text-color-theme_primary grpd-font-weight-500">Nathan Salvator
                </h5>
                <h6 class="grpd-body1 grpd-text-color-text_secondary ">CEO, Company name</h6>
               
                <p class="grpd-p  grpd-pt-8 grpd-text-color-text_secondary   ">
                  Nathan Salvator is an American businessman, investor, speaker, consultant, syndicated columnist, author, and television personality.
                </p>
                <div class="">   
                  <h4>
                  <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-facebook-square">
                  </i></a>
                
                <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-instagram">
                  </i></a>
                  <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-twitter">
                  </i></a>
                </h4>
              </div>
             
              </div>
             </div>
            </div>      
          </div>     
      </div>
  </section>
        `,
      });
      blocks.webinar_theme_aboutthespeaker_4 &&
      bm.add("webinar_theme_aboutthespeaker_4", {
        label:
          "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/About%20Speaker%204-min.png' />",
        category: labels.categoryaboutthespeaker,
        content: `
        <style>
    * {
      box-sizing: border-box;
    }

    body {
      --theme_primary: #2F80ED;
      --theme_light: #F9FAFB;
      --theme_text_primary: #222222;
      --theme_text_secondary: #4F4F4F;
      --theme_text_tertiary: #B0B0B0;
      --font_family: Open Sans, sans-serif;
    }
  </style>


  <section class="grpd-wrapper grpd-py-32 grpd-font-weight-400 ">
    <div class="grpd-container-xxl grpd-py-12 grpd-mx-auto">

      <div class=" grpd-py-32">
        <h2 class="grpd-h2 grpd-text-color-text_secondary">Webinar Speakers</h2>
      </div>       
            <div class="grpd-row grpd-border-radius-4 grpd-align-items-center grpd-justify-content-center ">
              <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12 ">
                <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar4.png" class="grpd-width-lg-80 grpd-width-100   "/>
              </div>
              <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12   ">
                <h5 class="grpd-h3 grpd-pt-32 grpd-text-color-theme_primary grpd-font-weight-500">Nathan Salvator
                </h5>
                <p class="grpd-p grpd-text-color-text_secondary ">CEO, Company name</p>
               
                <p class="grpd-p  grpd-pt-8 grpd-text-color-text_secondary   ">
                  Nathan Salvator is an American businessman, investor, speaker, consultant, syndicated columnist, author, and television personality.Salvatore is a columnist for The Daily Review, and Redbook. He has written several books, and has been featured on Shark Tank, and CNN's Today show. author, and television personality.Salvatore is a columnist for The Daily Review
                  author, and television personality.Salvatore is a columnist for 
                </p>
                <div class="grpd-py-32">   
                  <h4>
                  <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-facebook-square">
                  </i></a>
                
                <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-instagram">
                  </i></a>
                  <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-twitter">
                  </i></a>
                </h4>
              </div>
              <div class="">
                <a href="#" class="grpd-button-secondary-theme_primary grpd-text-color-white grpd-background-color-theme_primary grpd-py-16 grpd-px-32  ">Register Now</a>
              </div>
              </div>
            </div>
      </div>
   
  </section>
        `,
      });
      blocks.webinar_theme_aboutthespeaker_5 &&
      bm.add("webinar_theme_aboutthespeaker_5", {
        label:
          "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/About%20Speaker%205-min.png' />",
        category: labels.categoryaboutthespeaker,
        content: `
        <style>
    * {
      box-sizing: border-box;
    }

    body {
      --theme_primary: #2F80ED;
      --theme_light: #F9FAFB;
      --theme_text_primary: #222222;
      --theme_text_secondary: #4F4F4F;
      --theme_text_tertiary: #B0B0B0;
      --font_family: Open Sans, sans-serif;
    }
  </style>
  <section class="grpd-wrapper  grpd-font-weight-400">
    <div class="grpd-container-xxl grpd-mx-auto">
      <div class="grpd-row grpd-py-16 grpd-flex-column-reverse grpd-flex-lg-row">
        <div
          class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-py-32 grpd-pr-lg-72  grpd-pr-md-72  grpd-display-flex grpd-justify-content-center grpd-flex-column">
          <h2 class=" grpd-h2 grpd-py-16">
            Meet Your Host
          </h2>
          <h5 class="grpd-text-color-theme_primary">Nathan Salvator</h5>
          <p class="grpd-p grpd-text-color-text_secondary grpd-py-16">
            Nathan Salvator is an American businessman, investor, speaker, consultant, syndicated columnist, author, and
            television personality.Salvatore is a columnist for The Daily Review, and Redbook. He has written several
            books, and has been featured on Shark Tank, and CNN's Today show.</p>

          
          <div class=" grpd-display-flex grpd-py-4 ">
            <div
              class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
              <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
              </i>
            </div>
            <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
              <p class="grpd-p grpd-text-color-text_secondary grpd-font-weight-500">
                Point 1
              </p>
            </div>
          </div>
          <div class=" grpd-display-flex grpd-py-4 ">
            <div
              class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
              <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
              </i>
            </div>
            <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
              <p class="grpd-p grpd-text-color-text_secondary grpd-font-weight-500">
                Point 2
              </p>
            </div>
          </div>
          <div class=" grpd-display-flex  grpd-py-4 ">
            <div
              class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
              <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
              </i>
            </div>
            <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
              <p class="grpd-p  grpd-text-color-text_secondary grpd-font-weight-500">
                Point 3
              </p>
            </div>
          </div>
        </div>
        <div class="grpd-col-lg-6 grpd-col-md-12 grpd-display-flex grpd-justify-content-center grpd-mt-18 ">

          <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar5.png" alt=""
            class="grpd-widt grpd-width-100" />
        </div>
      </div>
  </section>
        `,
      });
      blocks.webinar_theme_aboutthespeaker_6 &&
      bm.add("webinar_theme_aboutthespeaker_6", {
        label:
          "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/About%20Speaker%206-min.png' />",
        category: labels.categoryaboutthespeaker,
        content: `
        <style>
    * {
      box-sizing: border-box;
    }

    body {
      --theme_primary: #2F80ED;
      --theme_light: #F9FAFB;
      --theme_text_primary: #222222;
      --theme_text_secondary: #4F4F4F;
      --theme_text_tertiary: #B0B0B0;
      --font_family: Open Sans, sans-serif;
    }
  </style>


  <section class="grpd-wrapper grpd-py-48 grpd-font-weight-400 ">
    <div class="grpd-container-xxl grpd-py-12 grpd-mx-auto">

  
      <div class="grpd-row grpd-border-radius-4 grpd-align-items-center grpd-justify-content-center ">

        <div class="grpd-col-lg-7 grpd-col-md-12 grpd-col-xs-12 grpd-py-48 grpd-pr-lg-72 ">
          <div class=" ">
            <h3 class="grpd-h3 grpd-text-color-theme_primary">Meet The Host</h2>
          </div>
          <h5 class="grpd-h4 grpd-pt-32 grpd-text-color-theme_primary grpd-font-weight-500">Nathan Salvator
          </h5>
          <p class="grpd-p grpd-text-color-text_secondary">CEO, Company name</p>

          <p class="grpd-p  grpd-pt-8 grpd-text-color-text_secondary   ">
            Nathan Salvator is an American businessman, investor, speaker, consultant, syndicated columnist, author, and
            television personality.Salvatore is a columnist for The Daily Review, and Redbook. He has written several
            books, and has been featured on Shark Tank, and CNN's Today show. author, and television
            personality.Salvatore is a columnist for The Daily Review
            author, and television personality.Salvatore is a columnist for
          </p>
          <div class="grpd-py-32">
            <h4>
              <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-facebook-square">
                </i></a>

              <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-instagram">
                </i></a>
              <a href="#" class="grpd-text-color-theme_primary grpd-p-sm grpd-mx-8"><i class="fab fa-twitter">
                </i></a>
            </h4>
          </div>
         
        </div>
        <div
          class="grpd-col-lg-5 grpd-col-md-12 grpd-col-xs-12  grpd-display-flex grpd-align-items-center grpd-justify-content-center ">
          <div class="  ">
            <figure class="grpd-position-relative ">

              <figcaption class="grpd-position-absolute set_img grpd-bottom-0 grpd-left-40 grpd-top-48">
                <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar6.png" id="icvbt-2"
                  class="grpd-width-100 grpd-width-lg-100 grpd-width-md-100  " />
              </figcaption>
              <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar6_back.png"
                id="icvbt-2" class="  grpd-width-85 grpd-width-lg-90  grpd-width-md-90" />

            </figure>
          </div>
        </div>
      </div>
    </div>

  </section>
        `,
      });
      blocks.webinar_theme_aboutthespeaker_7 &&
      bm.add("webinar_theme_aboutthespeaker_7", {
        label:
          "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/About%20Speaker%207-min.png' />",
        category: labels.categoryaboutthespeaker,
        content: `
        <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          --theme_primary: #2F80ED;
          --theme_light: #F9FAFB;
          --theme_text_primary: #222222;
          --theme_text_secondary: #4F4F4F;
          --theme_text_tertiary: #B0B0B0;
          --font_family: Open Sans, sans-serif;
        }
      </style>
      <section class="grpd-wrapper  grpd-font-weight-400">
        <div class="grpd-container-xxl grpd-mx-auto">
          <div class="grpd-row grpd-py-16 ">
           
            <div class="grpd-col-lg-6 grpd-col-md-12 grpd-display-flex grpd-justify-content-center grpd-mt-18 ">
    
              <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/ATS/webniar/webinar5.png" alt=""
                class="grpd-width-100 grpd-width-lg-80" />
            </div>
            <div
            class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-py-32 grpd-pl-lg-72  grpd-pr-md-72  grpd-display-flex grpd-justify-content-center grpd-flex-column">
            <h2 class=" grpd-h2 grpd-py-16">
              Meet Your Host
            </h2>
            <h5 class="grpd-text-color-theme_primary">Nathan Salvator</h5>
            <p class="grpd-p grpd-text-color-text_secondary grpd-py-16">
              Nathan Salvator is an American businessman, investor, speaker, consultant, syndicated columnist, author, and
              television personality.Salvatore is a columnist for The Daily Review, and Redbook. He has written several
              books, and has been featured on Shark Tank, and CNN's Today show.</p>
    
            
            <div class=" grpd-display-flex grpd-py-4 ">
              <div
                class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
                <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
                </i>
              </div>
              <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
                <p class="grpd-p grpd-text-color-text_secondary grpd-font-weight-500">
                  Point 1
                </p>
              </div>
            </div>
            <div class=" grpd-display-flex grpd-py-4 ">
              <div
                class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
                <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
                </i>
              </div>
              <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
                <p class="grpd-p grpd-text-color-text_secondary grpd-font-weight-500">
                  Point 2
                </p>
              </div>
            </div>
            <div class=" grpd-display-flex  grpd-py-4 ">
              <div class="grpd-width-px-28 grpd-px-10 grpd-display-inline-flex grpd-justify-content-center grpd-align-items-center grpd-height-px-28 grpd-mr-16 grpd-border grpd-border-circle grpd-background-color-theme_primary">
                <i aria-hidden="true" class="fa fa-check grpd-text-color-white">
                </i>
              </div>
              <div class="grpd-col-lg-10 grpd-col-md-12 grpd-col-xs-12">
                <p class="grpd-p  grpd-text-color-text_secondary grpd-font-weight-500">
                  Point 3
                </p>
              </div>
            </div>
          </div>
          </div>
      </section>
        `,
      });
      

  }
}
