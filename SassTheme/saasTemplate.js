export default function(editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  const cats = c.blockCategories;
  const blocks = c.blocks;
  const labels = c.labels;
  if (cats.saasTemplate) {
    blocks.saaTemplate_1 &&
      bm.add('saaTemplate_1', {
        label:
          "<img src='https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Saas.jpg' />",
        category: labels.categorySaasTemplate,
        content: `
        <style>
        body {
            --theme_primary: #2f80ed;
            --theme_light: #f5f9fe;
            --theme_text_primary: #333333;
            --theme_text_secondary: #828282;
            --font_family: Lexend, sans-serif;
        }
      </style>
        <section class="grpd-wrapper saas-template-background " id="saaTemplate_section_1">
        <div class="grpd-container-xl grpd-mx-auto grpd-px-0">
          <div class="grpd-row">
              <div class="grpd-col-md-12">
                  <div class="grpd-display-flex grpd-justify-content-center grpd-align-items-center grpd-flex-column grpd-pt-lg-160 grpd-pb-192 grpd-px-16 grpd-text-align-center" >
                      <h3 class="grpd-text-color-white grpd-px-lg-100 grpd-py-16 grpd-h1">Launch Your App with Confidance & Creativity</h3>
                      <p class="grpd-text-color-white  grpd-py-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                      <a href="#" class="grpd-button- grpd-py-12 grpd-px-32 grpd-border grpd-border-color-white grpd-text-color-template1_color_1 grpd-background-color-template1_color_2 grpd-border-radius-4 grpd-font-weight-500 grpd-text-align-center">Get Started</a>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <section class="grpd-wrapper grpd-position-relative grpd-top-m6" id="saaTemplate_section_2">
        <div class="grpd-container-xxl grpd-mx-auto grpd-px-0">
          <div class="grpd-display-flex grpd-justify-content-center">
            <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/WebPreview1.png" alt="" class="grpd-width-80 object-fit-cover">
          </div>
        </div>
      </section>
      <section class="grpd-wrapper" id="saaTemplate_section_3">
        <div class="grpd-container-xxl grpd-mx-auto grpd-px-0">
          <div class="grpd-mx-auto grpd-display-flex grpd-justify-content-center grpd-flex-column grpd-pb-64">
            <div class="grpd-row grpd-display-flex grpd-justify-content-center grpd-align-items-center">
              <div class="grpd-align-items-center grpd-px-32 grpd-py-10">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Airbnb%20Logo.png" class="grpd-width-16"/>
              </div>
              <div class="grpd-align-items-center grpd-px-32 grpd-py-10">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Hubspot%20Logo.png" class="grpd-width-16"/>
              </div>
              <div class="grpd-align-items-center grpd-px-32 grpd-py-10">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Google%20Logo.png" class="grpd-width-16"/>
              </div>
              <div class="grpd-align-items-center grpd-px-32 grpd-py-10">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Microsoft%20Logo.png" class="grpd-width-16"/>
              </div>
              <div class="grpd-align-items-center grpd-px-32 grpd-py-10">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Walmart%20Logo.png" class="grpd-width-16"/>
              </div>
              <div class="grpd-align-items-center grpd-px-32 grpd-py-10">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/FedEx%20Logo.png" class="grpd-width-16"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="grpd-wrapper" id="saaTemplate_section_4">
        <div class="grpd-container-xxl grpd-mx-auto grpd-px-0">
          <div class="grpd-row grpd-py-16 grpd-display-flex grpd-justify-content-between">
            <div class="grpd-col-lg-5 grpd-col-md-12 grpd-col-xs-12 grpd-display-flex grpd-justify-content-center grpd-align-items-start grpd-flex-column grpd-px-16 grpd-py-24">
              <h3 class="grpd-h2-med">Why You should choose us</h3>
              <p class="grpd-p">Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim eusde consulatu percipitur</p>
               <p class="grpd-p">meis dolor comprehensam at vij. Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq nusquam.
              </p>
              <br>
                <a href="#" class="grpd-button-1 grpd-border-color-template1_color_1 grpd-background-color-template1_color_1 grpd-text-color-template1_color_2 grpd-border grpd-border-radius-4  grpd-font-weight-500 grpd-py-16 grpd-px-24 grpd-text-align-center">Download Now</a>
              
            </div>
            <div class="grpd-col-lg-7 grpd-col-md-12 grpd-col-xs-12 ">
              <div class="grpd-row grpd-display-flex grpd-justify-content-around ">
                <div class="grpd-col-lg-5 grpd-col-md-6 grpd-col-xs-12   grpd-mx-12 grpd-my-8  grpd-display-flex grpd-justify-content-center grpd-align-items-start grpd-flex-column grpd-px-24 grpd-py-16 default-card-outline grpd-border-radius-10">
                    <div class=" grpd-py-4 grpd-px-4 icon1_bg grpd-my-18 icon1_bg grpd-border-circle grpd-sass-box-shadow-red">
                        <img class=" grpd-mx-16 grpd-my-16" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/biceps1.png"
                            alt="">
                    </div>
                    <h5 class=" grpd-h4 grpd-font-weight-600 grpd-text-color-black">Robust workflow</h5>
                    <p class="grpd-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                        semper ipsum
                        adipiscing vestibulum.</p>
                </div>
                <div class="grpd-col-lg-5 grpd-col-md-6 grpd-col-xs-12   grpd-mx-12 grpd-my-8 grpd-display-flex grpd-justify-content-center grpd-align-items-start grpd-flex-column  grpd-px-24 grpd-py-16  default-card-outline grpd-border-radius-10">
                    <div class="grpd-py-4 grpd-px-4 icon2_bg grpd-my-18 grpd-border-circle grpd-sass-box-shadow-blue">
                        <img class="l-vimg grpd-mx-16 grpd-my-16" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/flexibility1.png"
                            alt="">
                    </div>
                    <h5 class=" grpd-h4 grpd-font-weight-600 grpd-text-color-black">Flexibility</h5>
                    <p class="grpd-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                        semper ipsum
                        adipiscing vestibulum.</p>
                </div>
              </div>
              <div class="grpd-row grpd-display-flex grpd-justify-content-around  ">
                <div class=" grpd-col-lg-5 grpd-col-md-6 grpd-col-xs-12   grpd-mx-12 grpd-my-8 grpd-display-flex grpd-justify-content-center grpd-align-items-start grpd-flex-column  grpd-px-24 grpd-py-16  default-card-outline grpd-border-radius-10">
                  <div class="grpd-py-4 grpd-px-4 icon2_bg grpd-my-18  grpd-border-circle grpd-sass-box-shadow-orange">
                      <img class="l-vimg grpd-mx-16 grpd-my-16" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/user1.png"
                          alt="">
                  </div>
                  <h5 class=" grpd-h4 grpd-font-weight-600 grpd-text-color-black">User friendly</h5>
                  <p class="grpd-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                      semper ipsum
                      adipiscing vestibulum.
                  </p>
              </div>
                  <div class="grpd-col-lg-5 grpd-col-md-6 grpd-col-xs-12   grpd-mx-12 grpd-my-8  grpd-display-flex grpd-justify-content-center grpd-align-items-start grpd-flex-column grpd-px-24 grpd-py-16  default-card-outline grpd-border-radius-10">
                      <div class="grpd-py-4 grpd-px-4 icon3_bg grpd-my-18  grpd-border-circle grpd-sass-box-shadow-template1_color_1">
                          <img class=" grpd-mx-16 grpd-my-16" src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/layout1.png"
                              alt="">
                      </div>
                      <h5 class=" grpd-h4 grpd-font-weight-600 grpd-text-color-black">Multiple layouts</h5>
                      <p class="grpd-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dolor
                          semper ipsum
                          adipiscing vestibulum.</p>
                  </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="grpd-wrapper" id="saaTemplate_section_5">
        <div class="grpd-container-xxl grpd-mx-auto grpd-px-0">
          <div class="grpd-row grpd-py-72 grpd-display-flex justiy-content-between">
            <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12 grpd-display-flex grpd-justify-content-center">
              <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Web%20Preview.png" alt="" class="grpd-width-100 object-fit-cover">
            </div>
            <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12  grpd-display-flex grpd-justify-content-center grpd-align-items-start grpd-flex-column grpd-px-lg-48 grpd-px-16">
              <h1 class="grpd-h2-med grpd-text-align-start">
                Insight & resources to help you faster
              </h1>
              <p class="grpd-p grpd-text-align-start">
              Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim eusde consulatu percipitur
              </p>
              <p class="grpd-p grpd-text-align-start">meis dolor comprehensam at vij. Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq nusquam.                
              </p>
              <br>
              <a href="#" class="grpd-button-1 grpd-border-color-template1_color_1 grpd-background-color-template1_color_1 grpd-text-color-template1_color_2 grpd-border grpd-border-radius-4  grpd-font-weight-500 grpd-py-16 grpd-px-24 grpd-text-align-center">Download Now</a>
            </div>
          </div>
        </div>
      </section> 
      <section class="grpd-wrapper grpd-background-color-template1_color_2 grpd-py-64" id="saaTemplate_section_6">
        <div class="grpd-container-xxl grpd-mx-auto grpd-px-0">
          <div class="grpd-row grpd-display-flex grpd-justify-content-center grpd-px-lg-72 grpd-px-16">
            <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12 grpd-display-flex grpd-justify-content-start grpd-align-items-end grpd-flex-column">
              <div class="grpd-py-8">
                <h3 class="grpd-h3 grpd-text-color-black"> Real Stories from Real Customers</h3>
                <p class="grpd-p">Get inspired by these stories.</p>
              </div>
              <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12 saas-template-card2-background grpd-background-color-white grpd-px-24 grpd-py-16 grpd-border-rounded">
                <div class="grpd-py-8">
                  <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Hubspot%20Logo.png">
                </div>
                <div class="grpd-width-fit-content">
                  <p class="grpd-p">
                  <span class="grpd-h4 grpd-text-color-blue1">"</span>
                  To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.
                  </p>
                </div>
                <div>
                  <h5 class="grpd-h4">Floyd Miles</h5>
                  <p class="grpd-body1">Vice President, GoPro</p>
                </div>
              </div>
            </div>
            <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12 grpd-px-lg-24 grpd-px-0 grpd-py-32">
             <div class="grpd-col-lg-8 grpd-col-md-12 grpd-col-xs-12   grpd-py-32 saas-template-card2-background grpd-background-color-white grpd-px-24 grpd-py-16 grpd-border-rounded">
                <div class="grpd-py-8">
                  <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/Airbnb%20Logo.png">
                </div>
                <div class="grpd-width-fit-content">
                  <p class="grpd-p">
                  <span class="grpd-h4 grpd-text-color-blue1">"</span>
                    I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.                  
                  </p>
                </div>
                <div>
                  <h5 class="grpd-h4">Jane Cooper</h5>
                  <p class="grpd-body1">CEO, Airbnb</p>
                </div>
             </div>
             <div class="grpd-col-lg-6 grpd-col-md-12 grpd-col-xs-12   grpd-py-32 saas-template-card2-background grpd-background-color-white grpd-px-24 grpd-my-32 grpd-py-16 grpd-border-rounded">
                <div class="grpd-py-8">
                  <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/internalTemplates/BookMyShow%20Logo.png">
                </div>
                <div class="grpd-width-fit-content">
                  <p class="grpd-p">
                  <span class="grpd-h4 grpd-text-color-blue1">"</span>
                    Landify saved our time in designing my company page.
                  </p>
                </div>
                <div>
                  <h5 class="grpd-h4">Kristin Watson</h5>
                  <p class="grpd-body1">Co-Founder, BookMyShow</p>
                </div>
             </div>
            </div>
          </div>
        </div>
      </section>
      <section class="grpd-wrapper" id="saaTemplate_section_7">
        <div class="grpd-container-xxl grpd-mx-auto grpd-px-0">
          <div class="grpd-row grpd-display-flex grpd-justify-content-center grpd-flex-column grpd-py-48">
            <div class="col-md-12 grpd-py-40">
                <h2 class="grpd-text-color-black grpd-h2-med grpd-text-align-center">Pick The Plan that Works For You</h2>
            </div>
            <div class="grpd-row grpd-display-flex grpd-justify-content-evenly grpd-align-items-center">
              <div class="grpd-col-lg-3 grpd-col-md-5 grpd-col-xs-12 grpd-my-16 grpd-display-flex grpd-justify-content-center grpd grpd-align-items-center grpd-flex-column grpd-py-32 default-card-outline">
                <div class="grpd-text-align-center">
                  <h3 class="grpd-text-color-template1_color_1 grpd-h4">BASIC</h3>
                </div>
                <div class="grpd-text-align-center">
                  <h3 class="grpd-text-color-black grpd-h2">$19.9</h3>
                </div>
                <div class=" grpd-px-16 grpd-py-16 grpd-width-fit-content">
                  <div class="grpd-text-color-primary grpd-py-2">
                    <i class="fa fa-check grpd-text-color-template1_color_1 " aria-hidden="true"></i>
                    <span class="grpd-pl-4 grpd-text-color-template1_color_1">Essential Features</span>
                  </div>
                  <div class="grpd-text-color-primary grpd-py-2">
                      <i class="fa fa-check grpd-text-color-template1_color_1" aria-hidden="true"></i>
                      <span class="grpd-pl-4 grpd-text-color-template1_color_1">Marketing Campaign</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Published Pages</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Feedback Mode</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Basic Integrations</span>
                  </div>
                </div>
              
                <a href="#" class="grpd-button-1 grpd-border-color-template1_color_1 saas-template-background grpd-text-color-template1_color_2 grpd-border grpd-border-radius-4  grpd-font-weight-500 grpd-py-12 grpd-px-36 grpd-text-align-center">Try Now</a>
              </div>
              <div class="grpd-col-lg-3 grpd-col-md-5 grpd-col-xs-12 grpd-my-16 grpd-display-flex grpd-justify-content-center grpd grpd-align-items-center grpd-flex-column grpd-py-32 default-card-outline">
                <div class="grpd-text-align-center">
                  <h3 class="grpd-text-color-template1_color_1 grpd-h4">PLUS</h3>
                </div>
                <div class="grpd-text-align-center">
                  <h3 class="grpd-text-color-black grpd-h2">$29.9</h3>
                </div>
                <div class=" grpd-px-16 grpd-py-16 grpd-width-fit-content">
                  <div class="grpd-text-color-primary grpd-py-2">
                    <i class="fa fa-check grpd-text-color-template1_color_1" aria-hidden="true"></i>
                    <span class="grpd-pl-4 grpd-text-color-template1_color_1">Essential Features</span>
                  </div>
                  <div class="grpd-text-color-primary grpd-py-2">
                      <i class="fa fa-check grpd-text-color-template1_color_1" aria-hidden="true"></i>
                      <span class="grpd-pl-4 grpd-text-color-template1_color_1">Marketing Campaign</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Published Pages</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Feedback Mode</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Basic Integrations</span>
                  </div>              
                </div>
              
                <a href="#" class="grpd-button-1 grpd-border-color-template1_color_1 saas-template-background grpd-text-color-template1_color_2 grpd-border grpd-border-radius-4  grpd-font-weight-500 grpd-py-12 grpd-px-36 grpd-text-align-center">Try Now</a>
              </div>
              <div class="grpd-col-lg-3 grpd-col-md-5 grpd-col-xs-12 grpd-my-16 grpd-display-flex grpd-justify-content-center  grpd-align-items-center grpd-flex-column grpd-py-32 default-card-outline ">
                <div class="grpd-text-align-center">
                  <h3 class="grpd-text-color-template1_color_1 grpd-h4">PREMIUM</h3>
                </div>
                <div class="grpd-text-align-center">
                  <h3 class="grpd-text-color-black grpd-h2">$49.9</h3>
                </div>
                <div class=" grpd-px-16 grpd-py-16 grpd-width-fit-content">
                  <div class="grpd-text-color-primary grpd-py-2">
                    <i class="fa fa-check grpd-text-color-template1_color_1" aria-hidden="true"></i>
                    <span class="grpd-pl-4 grpd-text-color-template1_color_1">Essential Features</span>
                  </div>
                  <div class="grpd-text-color-primary grpd-py-2">
                      <i class="fa fa-check grpd-text-color-template1_color_1" aria-hidden="true"></i>
                      <span class="grpd-pl-4 grpd-text-color-template1_color_1">Marketing Campaign</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Published Pages</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Feedback Mode</span>
                  </div>
                  <div class="grpd-text-color-template1_color_4 grpd-py-2">
                      <i class="fa fa-times" aria-hidden="true"></i>
                      <span class="grpd-pl-4">Basic Integrations</span>
                  </div>               
                </div>
                <a href="#" class="grpd-button-1 grpd-border-color-template1_color_1 saas-template-background grpd-text-color-template1_color_2 grpd-border grpd-border-radius-4  grpd-font-weight-500 grpd-py-12 grpd-px-36 grpd-text-align-center">Try Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="grpd-wrapper saas-template-background grpd-py-48" id="saaTemplate_section_8">
        <div class="grpd-container-xxl grpd-mx-auto grpd-px-0">
          <div class="grpd-row grpd-px-lg-40 grpd-px-16 grpd-display-flex grpd-justify-content-center grpd-align-items-center grpd-flex-column">
            <div class=" grpd-col-md-10 grpd-display-flex  grpd-py-32 grpd-justify-content-center grpd-align-items-center flex-column">            
              <h3 class="grpd-h2-med grpd-text-color-white grpd-text-align-center"> Fasten your website creation process with Landify UI Kit </h3>
            </div>
            <a href="#" class="grpd-button-1 grpd-py-12 grpd-px-32 grpd-border grpd-border-color-white grpd-text-color-template1_color_1 grpd-background-color-template1_color_2 grpd-border-radius-4 grpd-font-weight-500 grpd-text-align-center">Download Now</a>
                   <div class="grpd-row grpd-display-flex grpd-justify-content-evenly grpd-py-16 grpd-grpd-align-items-center grpd-text-align-center grpd-py-24">
              <div class="grpd-col-lg-4 grpd-col-md-4 grpd-col-xs-12 grpd-my-10 grpd-text-color-white"><i class="fa fa-check-circle" aria-hidden="true"></i> Fully organized UI components</div>
              <div class="grpd-col-lg-4 grpd-col-md-4 grpd-col-xs-12 grpd-my-10 grpd-text-color-white"><i class="fa fa-check-circle" aria-hidden="true"></i> License to use on multiple projects</div>
              <div class="grpd-col-lg-4 grpd-col-md-4 grpd-col-xs-12 grpd-my-10 grpd-text-color-white"><i class="fa fa-check-circle" aria-hidden="true"></i> Clean, Minimal & Modern Design</div>              
            </div>
          </div>
        </div>
     </section>
    `,
      });
  }
}
