const FORM_KEYS = {
   name: 'contact_name',
   firstName: 'contact_first_name',
   lastName: 'contact_last_name',
   email: 'contact_email',
   phone: 'contact_phone',
   companyName: 'contact_company',
   jobTitle: 'contact_title',
   country: 'contact_country',
   AGREEMENT: 'agreement',
 };

export default function(editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;
  const cats = c.blockCategories;
  const { blocks } = c;
  const { labels } = c;
  if (cats.banner) {
     
    blocks.webinar_theme_banner_1 &&
      bm.add('webinar_theme_banner_1', {
        label:
          "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/Webinari%20Intro%201-min.png' />",
        category: labels.categoryBanner,
        content: `
        <style>
        * {
          box-sizing: border-box;
        }
        body{
                  --theme_primary : #2F80ED;
                  --theme_light : #F9FAFB;
                  --theme_text_primary : #222222;
                  --theme_text_secondary : #4F4F4F;
                  --theme_text_tertiary : #B0B0B0;
                  --font_family : Open Sans, sans-serif ;
                }
              
      </style>
        <section class="grpd-wrapper grpd-background-color-theme_light grpd-font-weight-400">
            <div class="grpd-container-xxl grpd-mx-auto">
              <div class="grpd-row grpd-py-72">
                <div class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-px-lg-72 grpd-px-md-72   grpd-mt-18 grpd-ml-md-10 grpd-ml-lg-0 grpd-ml-xs-0 grpd-px-xs-24 grpd-display-flex grpd-justify-content-center grpd-flex-column">
                  <h2 class=" grpd-h2">
                    Your Webinar  <span class="grpd-text-color-theme_primary grpd-white-space-no-wrap"> Video Title </span> 
                </h2>
    
                    <p class="grpd-p grpd-text-color-text_secondary grpd-py-16">Short description of your offer and its key benifits.
                        Here is what this webinar is about and why it is useful for your target audience
                    </p>
                    
                    <div class=" grpd-py-8">
                        <i class="far fa-calendar grpd-text-color-theme_primary" aria-hidden="true"></i>
                        <span class="grpd-pl-4 grpd-p grpd-font-weight-500">20 May 2020</span>
                      </div>
                      <div class=" grpd-py-8">
                        <i class="far fa-clock grpd-text-color-theme_primary" aria-hidden="true"></i>
                        <span class="grpd-pl-4 grpd-p grpd-font-weight-500  grpd-text-color-text_primary">4:00 p.m. – 5:00 p.m. IST</span>
                      </div>
                      
                      <div class="grpd-py-48">
                        <a href="#" class="grpd-button-secondary-theme_primary grpd-border-color-theme_primary  grpd-text-color-theme_primary grpd-border grpd-border-radius-4  grpd-font-weight-600 grpd-py-12 grpd-px-32 grpd-text-align-center">Learn More</a>
                      </div>
    
                  </div>
                <div class="grpd-col-lg-6 grpd-col-md-12 grpd-display-flex grpd-justify-content-center grpd-mt-18 ">
                  <div class="default-card-outline">
                    <div class="">
                      <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/Introduction/Webinar/webinar1.png"
                      alt="" class="   grpd-width-100" />
                 </div>
                  <form method="POST" idf="65795283142108630" formstate="normal" class="grpd-border-radius-4 grpd-my-auto grpd-background-color-white grpd-mx-auto grpd-width-lg-100 grpd-width-md-80 grpd-width-sm-100 grpd-width-xs-90 grpd-px-32 grpd-pt-32">
                 
                  
                    <div class="grpd-form-group">
                      <input type="email" name="email" placeholder="Email" required class="grpd-form-input-control grpd-border grpd-border-color-text_secondary grpd-border-radius-4 grpd-font-weight-400"/>
                    </div>
                    <div class="grpd-form-group">
                      <input type="password" name="contact_phone" placeholder="Password" class="grpd-form-input-control grpd-border grpd-border-color-text_secondary grpd-border-radius-4 grpd-font-weight-400"/>
                    </div>
                    <div class="grpd-form-group">
                    <button role="button" type="submit" class="grpd-button-primary-theme_primary  grpd-border grpd-border-color  grpd-width-100 grpd-px-32 grpd-py-12 grpd-font-weight-500">Register Now</button>
                  </div>
                 
                </form>
              </div>
                </div>
              </div>
            </div>
          </section>
      `,
      });

    blocks.webinar_theme_banner_2 &&
      bm.add('webinar_theme_banner_2', {
        label:
       "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/Webinari%20Intro%202-min.png' />",
        category: labels.categoryBanner,
        content: `
        <style>
    * {
      box-sizing: border-box;
    }
    body{
              --theme_primary : #5D5FEF;
              --theme_light : #F9FAFB;
              --theme_text_primary : #222222;
              --theme_text_secondary : #4F4F4F;
              --theme_text_tertiary : #B0B0B0;
              --font_family : Open Sans, sans-serif ;
            }
          
  </style>
    <section class="grpd-wrapper   grpd-font-weight-400">
        <div class="grpd-container-xxl  grpd-mx-auto">
          <div class="grpd-row grpd-py-32">
            <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12 grpd-pr-lg-100 grpd-py-32  grpd-pr-md-72 grpd-display-flex  grpd-flex-column">
            
                <div class=" grpd-py-2">
                    <span class="grpd-pl-4 grpd-h5 grpd-font-weight-600 grpd-text-color-theme_primary ">When:</span>
                    <span class="grpd-pl-4 grpd-h5 grpd-font-weight-700">24 jan,2019</span>
                  </div>
                  <div class=" grpd-py-2">
                    <span class="grpd-pl-4 grpd-h5 grpd-font-weight-600 grpd-text-color-theme_primary ">Hour:</span>
                    <span class="grpd-pl-4 grpd-h5 grpd-font-weight-700">11:00 AM</span>
                  </div>
                  <h2 class=" grpd-h2 grpd-pt-32">
                    Don’t miss this <span class="grpd-text-color-theme_primary">  amazing </span>  webinar! 
            </h2>

                <p class="grpd-p  grpd-py-16">Short description of your offer and its key benefits.
                    Here is what this webinar is about and why it is useful for your target audience
                </p>
                
                <div class="grpd-py-16">
                    <h4 class="grpd-font-weight-600" >Webinar starts in:</h4>
                </div>
                <div class="grpd-row ">
                    <div class="grpd-col-lg-2   grpd-col-md-2 grpd-col-xs-2 grpd-px-8 grpd-px-xs-4 grpd-display-flex grpd-flex-column">
                      <div class="grpd-border grpd-background-color-white  grpd-border-color-theme_primary grpd-py-10">
                          <h3 class="grpd-h3-med grpd-mb-0 grpd-text-align-center grpd-text-color-theme_primary ">00</h3>
                      </div>
                      <div>
                          <p class="grpd-body1 grpd-text-color-text_secondary grpd-font-weight-500 grpd-text-align-center">Days</p>
                      </div>
                    </div>   
                    <div class="grpd-col-lg-2   grpd-col-md-2 grpd-col-xs-2 grpd-px-12 grpd-px-xs-4 grpd-display-flex grpd-flex-column">
                      <div class="grpd-border grpd-background-color-white grpd-border-color-theme_primary grpd-py-10">
                          <h3 class="grpd-h3-med grpd-mb-0 grpd-text-align-center grpd-text-color-theme_primary ">08</h3>
                      </div>
                      <div>
                          <p class="grpd-body1 grpd-text-color-text_secondary grpd-font-weight-500 grpd-text-align-center">Hours</p>
                      </div>
                    </div>  
                    <div class="grpd-col-lg-2   grpd-col-md-2 grpd-col-xs-2 grpd-px-8 grpd-px-xs-4 grpd-display-flex grpd-flex-column">
                      <div class="grpd-border grpd-background-color-white grpd-border-color-theme_primary grpd-py-10">
                          <h3 class="grpd-h3-med grpd-mb-0 grpd-text-align-center grpd-text-color-theme_primary ">33</h3>
                      </div>
                      <div>
                          <p class="grpd-body1 grpd-text-color-text_secondary grpd-font-weight-500 grpd-text-align-center">Minutes</p>
                      </div>
                    </div>  
                    <div class="grpd-col-lg-2   grpd-col-md-2 grpd-col-xs-2 grpd-px-8 grpd-px-xs-4 grpd-display-flex grpd-flex-column">
                      <div class="grpd-border grpd-background-color-white grpd-border-color-theme_primary grpd-py-10">
                          <h3 class="grpd-h3-med grpd-mb-0 grpd-text-align-center grpd-text-color-theme_primary ">35</h3>
                      </div>
                      <div>
                          <p class="grpd-body1 grpd-text-color-text_secondary grpd-font-weight-500 grpd-text-align-center">Seconds</p>
                      </div>
                    </div>  
                  </div>
                
              </div>
              <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12  grpd-display-flex grpd-justify-content-center grpd-mt-18 ">
                <img src="https://grorapidassets.s3.amazonaws.com/images/Webinar/Introduction/Webinar/webinar2.png"
                  class="grpd-width-lg-80 grpd-width-100"  />
              </div>
          </div>
        </div>
      </section>
      `,
      });

    blocks.webinar_theme_banner_3 &&
      bm.add('webinar_theme_banner_3', {
        label:
       "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/Webinari%20Intro%203-min.png' />",
        category: labels.categoryBanner,
        content: `
        <style>
        * {
          box-sizing: border-box;
        }
        body{
                  --theme_primary : #2F80ED;
                  --theme_light : #F9FAFB;
                  --theme_text_primary : #222222;
                  --theme_text_secondary : #4F4F4F;
                  --theme_text_tertiary : #B0B0B0;
                  --font_family : Open Sans, sans-serif ;
                }
              
      </style>
        <section class="grpd-wrapper grpd-background-color-theme_light grpd-font-weight-400">
            <div class="grpd-container-xxl grpd-mx-auto">
              <div class="grpd-row grpd-py-72">
                <div class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-px-lg-72 grpd-px-md-72   grpd-mt-18 grpd-ml-md-10 grpd-ml-lg-0 grpd-ml-xs-0 grpd-px-xs-24 grpd-display-flex grpd-justify-content-center grpd-flex-column">
                  <h2 class=" grpd-h2">
                    Your Webinar  <span class="grpd-text-color-theme_primary grpd-white-space-no-wrap"> Video Title </span> 
                </h2>
    
                    <p class="grpd-p grpd-text-color-text_secondary grpd-py-16">Short description of your offer and its key benifits.
                        Here is what this webinar is about and why it is useful for your target audience
                    </p>
                    
                    <div class=" grpd-py-8">
                        <i class="far fa-calendar grpd-text-color-theme_primary" aria-hidden="true"></i>
                        <span class="grpd-pl-4 grpd-p grpd-font-weight-500">Essential Features</span>
                      </div>
                      <div class=" grpd-py-8">
                        <i class="far fa-clock grpd-text-color-theme_primary" aria-hidden="true"></i>
                        <span class="grpd-pl-4 grpd-p grpd-font-weight-500  grpd-text-color-text_primary">4:00 p.m. – 5:00 p.m. IST</span>
                      </div>
                      
                      <div class="grpd-py-48">
                        <a href="#" class="grpd-button-secondary-theme_primary grpd-border-color-theme_primary  grpd-text-color-theme_primary grpd-border grpd-border-radius-4  grpd-font-weight-600 grpd-py-12 grpd-px-32 grpd-text-align-center">Learn More</a>
                      </div>
    
                  </div>
                <div class="grpd-col-lg-6 grpd-col-md-12 grpd-display-flex grpd-justify-content-center grpd-mt-18 ">
                 
                    
                  <form method="POST" idf="65795283142108630" formstate="normal" class="grpd-border-radius-4 grpd-my-auto grpd-background-color-white grpd-mx-auto grpd-width-lg-70 grpd-width-md-80 grpd-width-sm-100 grpd-width-xs-90 grpd-px-32 grpd-py-32">
                 
                      <div class="grpd-col-lg-8 grpd-py-24">
                        <h3 class="grpd-h3-med grpd-text-color-theme_primary">Register for the webinar</h3>
                      </div>
                    <div class="grpd-form-group">
                      <input type="email" name="email" placeholder="Email" required class="grpd-form-input-control grpd-border grpd-border-color-text_secondary grpd-border-radius-4 grpd-font-weight-400"/>
                    </div>
                    <div class="grpd-form-group">
                      <input type="password" name="contact_phone" placeholder="Password" class="grpd-form-input-control grpd-border grpd-border-color-text_secondary grpd-border-radius-4 grpd-font-weight-400"/>
                    </div>
                    <div class="grpd-form-group">
                    <button role="button" type="submit" class="grpd-button-primary-theme_primary  grpd-border grpd-border-color  grpd-width-100 grpd-px-32 grpd-py-12 grpd-font-weight-500">Register Now</button>
                  </div>
                 
                </form>
            
                </div>
              </div>
            </div>
          </section>
      `,
      });

    blocks.webinar_theme_banner_4 &&
      bm.add('webinar_theme_banner_4', {
        label:
    "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/Webinari%20Intro%204-min.png' />",
        category: labels.categoryBanner,
        content: `
         <style>
     
 body{
              --theme_primary : #2F80ED;
              --theme_light : #F9FAFB;
              --theme_text_primary : #222222;
              --theme_text_secondary : #4F4F4F;
              --theme_text_tertiary : #B0B0B0;
              --font_family : Open Sans, sans-serif ;
            }
    
    </style>
    <section class="grpd-wrapper grpd-background-color-theme_light grpd-font-weight-400">
    <div class="grpd-container-xxl  grpd-mx-auto">
      <div class="grpd-row grpd-py-32 grpd-justify-content-center grpd-mx-auto grpd-align-items-center">
        <div
          class="grpd-col-lg-7 grpd-col-md-12 grpd-col-xs-12  grpd-align-items-center grpd-justify-content-center  grpd-display-flex grpd-flex-column ">

          <img src="https://grorapidassets.s3.amazonaws.com/images/theme1/Gallery_nightHill.png"
            class="grpd-width-10 grpd-border-circle grpd-justify-content-center" />
          <h6 class="grpd-text-color-theme_primary grpd-pt-18 grpd-font-weight-600 ">Hope Rubin presents...</h6>
        </div>
        <div class="grpd-col-lg-8 grpd-col-md-12 grpd-col-xs-12 grpd-text-align-center grpd-align-items-center grpd-justify-content-center  ">
          <h2 class=" grpd-h2 ">
            Don’t miss this <span class="grpd-text-color-theme_primary"> amazing </span> webinar!
          </h2>

          <p class="grpd-p grpd-text-color-text_secondary grpd-py-16">Short description of your offer and its key
            benifits.
            Here is what this webinar is about and why it is useful for your target audience
          </p>
        </div>
        <div class="grpd-col-lg-8 grpd-col-md-12 grpd-col-xs-12 grpd-text-align-center grpd-pb-18 grpd-align-items-center grpd-justify-content-center">
          <h5 class="grpd-text-color-text_primary grpd-font-weight-600" >Wednesday, Nov. 18th @ 5PM PT</h5>
        </div>
        <div class="grpd-col-lg-5 grpd-col-md-12 grpd-col-xs-12  grpd-align-items-center grpd-justify-content-center  ">
          <div class="grpd-row grpd-text-align-center grpd-justify-content-center grpd-align-items-center ">
            <div
              class="grpd-col-lg-2   grpd-col-md-2 grpd-col-xs-2 grpd-px-8 grpd-px-xs-4 grpd-display-flex grpd-flex-column">
              <div class=" grpd-py-4">
                <h3 class="grpd-h3-med grpd-mb-0 grpd-text-align-center grpd-text-color-theme_primary ">00</h3>
              </div>
              <div>
                <p class="grpd-body1 grpd-text-color-text_secondary grpd-font-weight-500 grpd-text-align-center">Days
                </p>
              </div>
            </div>
            <div
              class="grpd-col-lg-2   grpd-col-md-2 grpd-col-xs-3 grpd-px-8 grpd-px-xs-4 grpd-display-flex grpd-flex-column">
              <div class=" grpd-py-4">
                <h3 class="grpd-h3-med grpd-mb-0 grpd-text-align-center grpd-text-color-theme_primary ">08</h3>
              </div>
              <div>
                <p class="grpd-body1 grpd-text-color-text_secondary grpd-font-weight-500 grpd-text-align-center">Hours
                </p>
              </div>
            </div>
            <div
              class="grpd-col-lg-2   grpd-col-md-2 grpd-col-xs-3 grpd-px-8 grpd-px-xs-4 grpd-display-flex grpd-flex-column">
              <div class=" grpd-py-4">
                <h3 class="grpd-h3-med grpd-mb-0 grpd-text-align-center grpd-text-color-theme_primary ">33</h3>
              </div>
              <div>
                <p class="grpd-body1 grpd-text-color-text_secondary grpd-font-weight-500 grpd-text-align-center">Minutes
                </p>
              </div>
            </div>
            <div
              class="grpd-col-lg-2   grpd-col-md-2 grpd-col-xs-3 grpd-px-8 grpd-px-xs-4 grpd-display-flex grpd-flex-column">
              <div class=" grpd-py-4">
                <h3 class="grpd-h3-med grpd-mb-0 grpd-text-align-center grpd-text-color-theme_primary ">35</h3>
              </div>
              <div>
                <p class="grpd-body1 grpd-text-color-text_secondary grpd-font-weight-500 grpd-text-align-center">Seconds
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grpd-col-lg-8 grpd-col-md-12 grpd-col-xs-12 grpd-text-align-center grpd-py-24 grpd-align-items-center grpd-justify-content-center">
          <a href="#" class="grpd-button-secondary-theme_primary grpd-text-color-white grpd-background-color-theme_primary grpd-py-10 grpd-px-24  ">Claim your spot now</a>
        </div>
      </div>
    </div>
  </section>
      `,
      });
   
   
  }
}
