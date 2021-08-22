export default function(editor, opt = {}) {
    const c = opt;
    let bm = editor.BlockManager;
    const cats = c.blockCategories;
    const blocks = c.blocks;
    const labels = c.labels;
    if (cats.blog){
      blocks.webinarwhatwillyoulearn_1 &&
        bm.add('webinar-theme_whatwillyoulearn_1', {
          label:
            "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/What%20you%20will%20learn%201-min.png' />",
          category: labels.categorywhatwillyoulearn,
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
  <section class="grpd-wrapper grpd-font-weight-400 grpd-py-64">
      <div class="grpd-container-xxl grpd-mx-auto">
        <div class="grpd-row" id="iar8">
          <div class="grpd-col-lg-5 grpd-col-md-10 grpd-col-xs-12 grpd-px-16  grpd-text-align-center grpd-mx-auto">
            <h3 class="grpd-h3  grpd-text-color-text_primary ">What Will You Learn?
            </h3>
            <p class="grpd-p grpd-text-color-text_secondary  ">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
        </div>
        <div class="grpd-row">
          <div class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-px-lg-32  grpd-px-16 grpd-py-32">
            <div>
              <div class="grpd-border-circle grpd-border grpd-border-color-theme_primary grpd-height-px-56 grpd-width-px-56 grpd-background-color-theme_primary grpd-px-16 grpd-py-16 grpd-display-flex grpd-justify-content-center">
                <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png" alt=""/>
              </div>
              <h5 class="grpd-h5 grpd-font-weight-600  grpd-mt-16">Benifit 1
              </h5>
              <p class="grpd-p grpd-text-color-text_secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
          <div class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-px-lg-32  grpd-px-16  grpd-py-32">
              <div>
                <div class="grpd-border-circle grpd-border grpd-border-color-theme_primary grpd-height-px-56 grpd-width-px-56 grpd-background-color-theme_primary grpd-px-16 grpd-py-16 grpd-display-flex grpd-justify-content-center">
                  <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png" alt=""/>
                </div>
                <h5 class="grpd-h5 grpd-font-weight-600  grpd-mt-16">Benifit 1
                </h5>
                <p class="grpd-p grpd-text-color-text_secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <div class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12  grpd-px-lg-32  grpd-px-16 grpd-py-32">
              <div>
                <div class="grpd-border-circle grpd-border grpd-border-color-theme_primary grpd-height-px-56 grpd-width-px-56 grpd-background-color-theme_primary grpd-px-16 grpd-py-16 grpd-display-flex grpd-justify-content-center">
                  <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png" alt=""/>
                </div>
                <h5 class="grpd-h5 grpd-font-weight-600  grpd-mt-16">Benifit 1
                </h5>
                <p class="grpd-p grpd-text-color-text_secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <div class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-px-lg-32  grpd-px-16 grpd-py-32">
              <div>
                <div class="grpd-border-circle grpd-border grpd-border-color-theme_primary grpd-height-px-56 grpd-width-px-56 grpd-background-color-theme_primary grpd-px-16 grpd-py-16 grpd-display-flex grpd-justify-content-center">
                  <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png" alt=""/>
                </div>
                <h5 class="grpd-h5 grpd-font-weight-600  grpd-mt-16">Benifit 1
                </h5>
                <p class="grpd-p grpd-text-color-text_secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
      `,
        });
      blocks.webinar-theme_whatwillyoulearn_2 &&
        bm.add('webinar-theme_whatwillyoulearn_2', {
          label:
            "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/What%20you%20will%20learn%202-min.png' />",
          category: labels.categorywhatwillyoulearn,
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
<section class="grpd-wrapper grpd-background-color-theme_light grpd-font-weight-400 grpd-py-32">
  <div class="grpd-container-xxl grpd-mx-auto">
    <div class="grpd-row">
      <div class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-text-align-center grpd-mx-auto">
        <h3 class="grpd-h3 grpd-text-color-text_primary">What Will You Learn?
        </h3>
      </div>
    </div>
    <div class="grpd-row grpd-mt-24">
      <div class="grpd-col-lg-4 grpd-col-md-6 grpd-col-xs-12 grpd-px-24 grpd-py-24">
        <div class="grpd-border default-card-outline grpd-background-color-white grpd-px-24 grpd-py-18 grpd-border-radius-10 grpd-border-color-gray5">
          <h1 class="grpd-h1-med grpd-text-color-theme_primary">01
          </h1>
          <h3 class="grpd-h5 grpd-font-weight-600 grpd-mt-16">
            UX Design
          </h3>
          <p class="grpd-text-color-text_primary grpd-font-weight-300">
            Mobile App, Website
          </p>
          <p class="grpd-p grpd-text-color-text_secondary grpd-mb-0">
            Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
            Accumsan sed faucibu s faucibus augue. Cras ut.
          </p>
        </div>
      </div>
      <div class="grpd-col-lg-4 grpd-col-md-6 grpd-col-xs-12 grpd-px-24 grpd-py-24">
        <div class="grpd-border default-card-outline grpd-background-color-white grpd-px-24 grpd-py-18 grpd-border-radius-10 grpd-border-color-gray5">
          <h1 class="grpd-h1-med grpd-text-color-theme_primary">02
          </h1>
          <h3 class="grpd-h5 grpd-font-weight-600 grpd-mt-16">
            Game Design
          </h3>
          <p class="grpd-text-color-text_primary grpd-font-weight-300">
            Mobile App, Website
          </p>
          <p class="grpd-p grpd-text-color-text_secondary grpd-mb-0">
            Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
            Accumsan sed faucibu s faucibus augue. Cras ut.
          </p>
        </div>
      </div>
      <div class="grpd-col-lg-4 grpd-col-md-6 grpd-col-xs-12 grpd-px-24 grpd-py-24">
        <div class="grpd-border default-card-outline grpd-background-color-white grpd-px-24 grpd-py-18 grpd-border-radius-10 grpd-border-color-gray5">
          <h1 class="grpd-h1-med grpd-text-color-theme_primary">03
          </h1>
          <h3 class="grpd-h5 grpd-font-weight-600 grpd-mt-16">
            Graphic Design
          </h3>
          <p class="grpd-text-color-text_primary grpd-font-weight-300">
            Mobile App, Website
          </p>
          <p class="grpd-p grpd-text-color-text_secondary grpd-mb-0">
            Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
            Accumsan sed faucibu s faucibus augue. Cras ut.
          </p>
        </div>
      </div>
      <div class="grpd-col-lg-4 grpd-col-md-6 grpd-col-xs-12 grpd-px-24 grpd-py-24">
        <div class="grpd-border default-card-outline grpd-background-color-white grpd-px-24 grpd-py-18 grpd-border-radius-10 grpd-border-color-gray5">
          <h1 class="grpd-h1-med grpd-text-color-theme_primary">04
          </h1>
          <h3 class="grpd-h5 grpd-font-weight-600 grpd-mt-16">
            Web Design
          </h3>
          <p class="grpd-text-color-text_primary grpd-font-weight-300">
            Mobile App, Website
          </p>
          <p class="grpd-p grpd-text-color-text_secondary grpd-mb-0">
            Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
            Accumsan sed faucibu s faucibus augue. Cras ut.
          </p>
        </div>
      </div>
      <div class="grpd-col-lg-4 grpd-col-md-6 grpd-col-xs-12 grpd-px-24 grpd-py-24">
        <div class="grpd-border default-card-outline grpd-background-color-white grpd-px-24 grpd-py-18 grpd-border-radius-10 grpd-border-color-gray5">
          <h1 class="grpd-h1-med grpd-text-color-theme_primary">05
          </h1>
          <h3 class="grpd-h5 grpd-font-weight-600 grpd-mt-16">
            App Development
          </h3>
          <p class="grpd-text-color-text_primary grpd-font-weight-300">
            Mobile App, Website
          </p>
          <p class="grpd-p grpd-text-color-text_secondary grpd-mb-0">
            Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
            Accumsan sed faucibu s faucibus augue. Cras ut.
          </p>
        </div>
      </div>
      <div class="grpd-col-lg-4 grpd-col-md-6 grpd-col-xs-12 grpd-px-24 grpd-py-24">
        <div class="grpd-border default-card-outline grpd-background-color-white grpd-px-24 grpd-py-18 grpd-border-radius-10 grpd-border-color-gray5">
          <h1 class="grpd-h1-med grpd-text-color-theme_primary">06
          </h1>
          <h3 class="grpd-h5 grpd-font-weight-600 grpd-mt-16">
            Digital Marketing
          </h3>
          <p class="grpd-text-color-text_primary grpd-font-weight-300">
            Mobile App, Website
          </p>
          <p class="grpd-p grpd-text-color-text_secondary grpd-mb-0">
            Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
            Accumsan sed faucibu s faucibus augue. Cras ut.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      `,
        });
        blocks.webinar-theme_whatwillyoulearn_3 &&
        bm.add('webinar-theme_whatwillyoulearn_3', {
          label:
            "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/What%20you%20will%20learn%203-min.png' />",
          category: labels.categorywhatwillyoulearn,
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
              --font_family : Open Sans, sans-serif;
            }
    </style>
<section class="grpd-wrapper grpd-background-color-white grpd-font-weight-400 grpd-py-64">
  <div class="grpd-container-xxl grpd-py-16 grpd-mx-auto">
    <div class="grpd-row grpd-justify-content-center">
      <div class="grpd-col-lg-6 grpd-col-md-10 grpd-col-xs-12 grpd-text-align-center grpd-mx-auto">
        <h3 class="grpd-h3 grpd-text-color-text_primary">
          What Will You Learn?
        </h3>
      </div>
      <div class="grpd-row grpd-justify-content-center">
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-10 grpd-py-xs-16 grpd-px-md-24 grpd-py-md-24">
          <div class="grpd-px-24 grpd-pb-32 grpd-text-align-center">
          <div class=" grpd-px-20 grpd-py-18 grpd-height-px-56 grpd-width-px-56 grpd-border-circle grpd-mx-auto  grpd-b grpd-display-flex grpd-justify-content-center  ">
                  <img class="" src="https://grorapidassets.s3.amazonaws.com/images/theme1/BlueGrowth.png" 
                      alt="icon">
              </div>
            <h5 class="grpd-h5 grpd-font-weight-700 grpd-py-18">
              Benifit 1
            </h5>
            <p class="grpd-p grpd-text-color-text_secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Maiores impedit perferendis suscipit eaque,
            </p>
          </div>
        </div>
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-10 grpd-py-xs-16 grpd-px-md-24 grpd-py-md-24 grpd-border-left grpd-border-right grpd-border-color-theme_light ">
          <div class="grpd-px-24 grpd-pb-32 grpd-text-align-center">
            <div class=" grpd-px-20 grpd-py-18 grpd-height-px-56 grpd-width-px-56 grpd-border-circle grpd-mx-auto grpd-b  grpd-display-flex grpd-justify-content-center  ">
                  <img class="" src="https://grorapidassets.s3.amazonaws.com/images/theme1/BlueGrowth.png" 
                      alt="icon">
              </div>
            <h5 class="grpd-h5 grpd-font-weight-700 grpd-py-18">
              Benifit 2
            </h5>
            <p class="grpd-p grpd-text-color-text_secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Maiores impedit perferendis suscipit eaque,
            </p>
          </div>
        </div>
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-10 grpd-py-xs-16 grpd-px-md-24 grpd-py-md-24">
          <div class="grpd-px-24 grpd-pb-32 grpd-text-align-center">
             <div class=" grpd-px-20 grpd-py-18 grpd-height-px-56 grpd-width-px-56 grpd-border-circle grpd-mx-auto grpd-background-color-theme_light  grpd-display-flex grpd-justify-content-center  ">
                  <img class="" src="https://grorapidassets.s3.amazonaws.com/images/theme1/BlueGrowth.png" 
                      alt="icon">
              </div>
            <h5 class="grpd-h5 grpd-font-weight-700 grpd-py-18">
              Benifit 3
            </h5>
            <p class="grpd-p grpd-text-color-text_secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Maiores impedit perferendis suscipit eaque,
            </p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>
      `,
        });
        blocks.webinar-theme_whatwillyoulearn_4 &&
        bm.add('webinar-theme_whatwillyoulearn_4', {
          label:
            "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/What%20you%20will%20learn%204-min.png' />",
          category: labels.categorywhatwillyoulearn,
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
  <section class="grpd-wrapper grpd-background-color-white grpd-font-weight-400 grpd-py-64">
    <div class="grpd-container-xxl grpd-mx-auto">
      <div class="grpd-row">
        <div class="grpd-col-lg-5 grpd-col-md-10 grpd-col-xs-12 grpd-text-align-center grpd-mx-auto">
          <h3 class="grpd-h3 grpd-py-16  grpd-text-color-text_primary">
            What Will You Learn?
          </h3>
          <p class="grpd-text-color-text_secondary">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
      <div class="grpd-row grpd-mt-24 grpd-justify-content-center">
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-10 grpd-py-xs-32 grpd-py-xs-16 grpd-px-md-24 grpd-py-md-24">
          <div class="grpd-position-relative grpd-background-color-theme_light grpd-px-24 grpd-pb-32 grpd-border-radius-10 grpd-text-align-center">
            <div class="grpd-top-m2 grpd-left-0 grpd-right-0 grpd-position-absolute grpd-px-16 grpd-py-16 grpd-height-px-56 grpd-width-px-56 grpd-border-radius-10 grpd-mx-auto grpd-border grpd-border-color-theme_primary grpd-background-color-theme_primary grpd-display-flex grpd-justify-content-center">
              <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png" alt="" class="img-fluid"/>
            </div>
            <h4 class="grpd-h4 grpd-font-weight-600 grpd-pt-48">
              Benifit 1
            </h4>
            <p class="grpd-p grpd-pt-16 grpd-text-color-text_secondary">
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-10 grpd-py-xs-32 grpd-py-xs-16 grpd-px-md-24 grpd-py-md-24">
          <div class="grpd-position-relative grpd-background-color-theme_light grpd-px-24 grpd-pb-32 grpd-border-radius-10 grpd-text-align-center">
            <div class="grpd-top-m2 grpd-left-0 grpd-right-0 grpd-position-absolute grpd-px-16 grpd-py-16 grpd-height-px-56 grpd-width-px-56 grpd-border-radius-10 grpd-mx-auto grpd-border grpd-border-color-theme_primary grpd-background-color-theme_primary grpd-display-flex grpd-justify-content-center">
              <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png" alt="" class="img-fluid"/>
            </div>
            <h4 class="grpd-h4 grpd-font-weight-600 grpd-pt-48">
              Benifit 1
            </h4>
            <p class="grpd-p grpd-pt-16 grpd-text-color-text_secondary">
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-10 grpd-py-xs-32 grpd-py-xs-16 grpd-px-md-24 grpd-py-md-24">
          <div class="grpd-position-relative grpd-background-color-theme_light grpd-px-24 grpd-pb-32 grpd-border-radius-10 grpd-text-align-center">
            <div class="grpd-top-m2 grpd-left-0 grpd-right-0 grpd-position-absolute grpd-px-16 grpd-py-16 grpd-height-px-56 grpd-width-px-56 grpd-border-radius-10 grpd-mx-auto grpd-border grpd-border-color-theme_primary grpd-background-color-theme_primary grpd-display-flex grpd-justify-content-center">
              <img src="https://rapidtech.s3.amazonaws.com/assets/p_assets/grorapid-saas-theme/growth%201.png" alt="" class="img-fluid"/>
            </div>
            <h4 class="grpd-h4 grpd-font-weight-600 grpd-pt-48">
              Benifit 1
            </h4>
            <p class="grpd-p grpd-pt-16 grpd-text-color-text_secondary">
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
       
      </div>
    </div>
  </section>
      `,
        });
        blocks.webinar-theme_whatwillyoulearn_5 &&
        bm.add('webinar-theme_whatwillyoulearn_5', {
          label:
            "<img src='https://grorapidassets.s3.amazonaws.com/images/WebinarLabel/What%20you%20will%20learn%205-min.png' />",
          category: labels.categorywhatwillyoulearn,
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
  <section class="grpd-wrapper grpd-background-color-theme_light grpd-font-weight-400 grpd-py-64">
    <div class="grpd-container-xxl grpd-mx-auto">
      <div class="grpd-row">
        <div class="grpd-col-lg-11 grpd-col-md-7 grpd-col-xs-11  grpd-mx-auto">
          <h3 class="grpd-h3 grpd-text-color-text_secondary">During This Training, 
          </h3>
          <h3 class="grpd-h3 grpd-text-color-text_secondary">You’ll Learn
          </h3>
        </div>
      </div>
      <div class="grpd-row grpd-mt-24 grpd-justify-content-evenly">
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-16 grpd-py-xs-16">
          <div class="grpd-background-color-white grpd-px-18 grpd-py-16 default-card-shadow-radius grpd-border-radius-4">
            
            <h5 class="grpd-h5 grpd-font-weight-600 grpd-py-16">
              Benefit 1
            </h5>
    
            <p class="grpd-p grpd-text-color-text_secondary">
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-16 grpd-py-xs-16">
          <div class="grpd-background-color-white grpd-px-18 default-card-shadow-radius grpd-py-16 grpd-border-radius-4">
            
            <h5 class="grpd-h5 grpd-font-weight-600 grpd-py-16">
              Benefit 1
            </h5>
    
            <p class="grpd-p grpd-text-color-text_secondary">
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
            </p>
          </div>
        </div>
        <div class="grpd-col-lg-4 grpd-col-md-8 grpd-col-xs-12 grpd-px-lg-32 grpd-py-lg-36 grpd-px-xs-16 grpd-py-xs-16">
          <div class="grpd-background-color-white grpd-px-18 default-card-shadow-radius grpd-py-16 grpd-border-radius-4">
            
            <h5 class="grpd-h5 grpd-font-weight-600 grpd-py-16">
              Benefit 1
            </h5>
    
            <p class="grpd-p grpd-text-color-text_secondary">
              Lorem ipsum dolor sit amet, consec tet ur adipiscing elit.
              Accumsan sed faucibu s faucibus augue. Cras ut.
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