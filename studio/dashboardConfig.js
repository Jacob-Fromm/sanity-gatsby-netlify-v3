export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6032e2d437d815d9ce2f0414',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-netlify-v-3-studio',
                  apiId: '5f0b1d5c-1051-4a9e-8fe2-cdfe361cafe9'
                },
                {
                  buildHookId: '6032e2d4b2938b26cc846f4b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-netlify-v-3',
                  apiId: 'e8b325c4-c20c-417c-9613-2dd619b4a071'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jacob-Fromm/sanity-gatsby-netlify-v3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-netlify-v-3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
