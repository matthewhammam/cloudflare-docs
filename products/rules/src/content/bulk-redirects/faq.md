---
title: FAQ
order: 9
pcx-content-type: faq
---

# FAQ — Bulk Redirects

Below you will find answers to the most commonly asked questions regarding Bulk Redirects. 

## What happens if the same source URL appears in two different Bulk Redirect Lists?

In this situation, Cloudflare will use the URL Redirect of the first rule that triggers. This will be determined by the order of the Bulk Redirect Rules enabling each Bulk Redirect List in the `http_request_redirect` phase entry point ruleset.

## How many URL Redirects can I have in a single Bulk Redirect List?

Each account has a maximum number of URL Redirects across all lists which depends on your Cloudflare plan. If you wish, you can use all the URL Redirects available in your plan in a single Bulk Redirect List, but you will not be able to create any other URL Redirects in a different list. Refer to [Availability](/bulk-redirects#availability) for more information.

## How can I redirect based on the non-normalized version of a URL?

Use the `raw.http.request.full_uri` field both in the rule expression and in the key, instead of the default field `http.request.full_uri`. This will take the raw version of the URL into account, that is, the URL that Cloudflare received at the edge before applying normalization. Refer to [Concepts: Bulk Redirect Rules](/bulk-redirects/concepts#bulk-redirect-rules) for more information on using a custom rule expression and a custom key.

## Do Bulk Redirects take precedence over Page Rules?

Yes. Bulk Redirects take precedence over Page Rules redirects.
