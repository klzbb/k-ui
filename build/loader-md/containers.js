const container = require('markdown-it-container')

module.exports = md => {
  console.log("klz===", md.renderer.rules)
  md
    .use(...createContainer('tip', 'TIP'))
    .use(...createContainer('warning', 'WARNING'))
    .use(...createContainer('danger', 'WARNING'))
    .use(...createContainer('html', 'HTML'))
    // explicitly escape Vue syntax
    .use(container, 'v-pre', {
      render: (tokens, idx) => tokens[idx].nesting === 1
        ? `<div v-pre>\n`
        : `</div>\n`
    })
    .use(container, 'demo', {
      // validate (params) {
      //   return params.trim().match(/^demo\s*(.*)$/);
      // },
      render (tokens, idx) {
        console.count("kkk")
        console.log("idx===", idx)
        console.log(tokens)
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        // console.log("m====", m)

        if (tokens[idx].nesting === 1) {
          const description = m && m.length > 1 ? m[1] : '';
          console.log("description====", description)


          const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
          // console.log("content====", content)

          return `<demo-block>
          ${description ? `<div>${md.render(description)}</div>` : ''}
          <!--element-demo: ${content}:element-demo-->
          `;
        }
        return '</demo-block>';
      }
    })
}

function createContainer (klass, defaultTitle) {
  return [container, klass, {
    render (tokens, idx) {
      const token = tokens[idx]
      const info = token.info.trim().slice(klass.length).trim()
      if (token.nesting === 1) {
        return `<div class="${klass} custom-block"><p class="custom-block-title">${info || defaultTitle}</p>\n`
      } else {
        return `</div>\n`
      }
    }
  }]
}