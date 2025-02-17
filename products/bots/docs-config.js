const productIconKey = "bots";

module.exports = {
  product: "Bots",
  pathPrefix: "/bots",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/bots",
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M40.4877 15.8633H25.4997V11.5275C26.0716 11.1973 26.5186 10.6876 26.7714 10.0775C27.0241 9.46736 27.0684 8.79089 26.8975 8.15299C26.7266 7.51509 26.3499 6.95141 25.826 6.54938C25.3021 6.14736 24.6601 5.92944 23.9997 5.92944C23.3393 5.92944 22.6974 6.14736 22.1734 6.54938C21.6495 6.95141 21.2729 7.51509 21.1019 8.15299C20.931 8.79089 20.9754 9.46736 21.2281 10.0775C21.4808 10.6876 21.9278 11.1973 22.4997 11.5275V15.8633H7.51172L6.01172 17.3633V40.4445L7.51172 41.9445H40.4877L41.9877 40.4445V17.3633L40.4877 15.8633ZM38.9877 38.9445H9.01172V18.8633H38.9877V38.9445Z" /><path d="M17.0075 28.5435C18.3831 28.5435 19.4982 27.426 19.4982 26.0475C19.4982 24.669 18.3831 23.5515 17.0075 23.5515C15.6319 23.5515 14.5167 24.669 14.5167 26.0475C14.5167 27.426 15.6319 28.5435 17.0075 28.5435Z" /><path d="M30.992 28.5435C32.3676 28.5435 33.4827 27.426 33.4827 26.0475C33.4827 24.669 32.3676 23.5515 30.992 23.5515C29.6164 23.5515 28.5012 24.669 28.5012 26.0475C28.5012 27.426 29.6164 28.5435 30.992 28.5435Z" /><path d="M28.742 31.749H19.2582V34.749H28.742V31.749Z" /></svg>',
  externalLinks: [
    {
      title: "Bot Management home",
      url: "https://www.cloudflare.com/products/bot-management",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:bots"]' },
  },
  siteMetadata: {
      title: "Cloudflare bot solutions docs",
      description: "Cloudflare’s bot solutions identify and mitigate automated traffic to protect your domain from bad bots.",
      author: "@cloudflare",
      url: "https://developers.cloudflare.com/bots",
      image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
