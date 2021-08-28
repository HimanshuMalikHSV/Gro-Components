export default function(editor, opt = {}) {
    const c = opt;
    let bm = editor.BlockManager;
    const cats = c.blockCategories;
    const blocks = c.blocks;
    const labels = c.labels;
    if (cats.saasTemplate) {
      blocks.saaTemplate_2 &&
        bm.add('saaTemplate_2', {
          label:
            "<img src='https://grorapidassets.s3.amazonaws.com/images/sass%20template3/SaasTemplate1.png' />",
          category: labels.categorySaasTemplate,
          content:

            `

            `
        })
    }
}