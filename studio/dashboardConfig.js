export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '603d55e4aff7281570494418',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-og13pwzd',
                  apiId: 'ba729821-754e-48dc-9290-16b2ac46ca1a'
                },
                {
                  buildHookId: '603d55e5f67cfa19a132c61a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d7xnvpr2',
                  apiId: 'a2ee1de7-0bf8-44d6-8a42-469c96c24d8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/msfragala/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d7xnvpr2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
