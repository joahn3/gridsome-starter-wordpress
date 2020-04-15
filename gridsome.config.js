module.exports = {
  siteName: 'Chic Roumaine',
  siteDescription: 'Ii Romanesti Autentice',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.WORDPRESS_URL, // required
        apiBase: 'wp-json',
        typeName: 'WordPress', // GraphQL schema name (Optional)
        perPage: 100,
        concurrent: 10
      }
    }
  ]
}


