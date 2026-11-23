/**
 * Single constant for the Async Status & Decision Memo Pack listing URL.
 *
 * If the Gumroad permalink changes, edit OWN_PRODUCT_URL below.
 * HTML href attributes on a[data-own-product="async-memo"] use the same
 * URL as a no-JavaScript fallback; this script overwrites them so the
 * constant stays in one place after a swap. After you change this file,
 * also search-replace the old URL in the HTML fallbacks (and in build.py)
 * so no-JS visitors and crawlers see the new address.
 *
 * utm_source=notetakernotes is appended here, matching the other
 * Notetaker Notes Gumroad links on this site.
 */
(function () {
  const OWN_PRODUCT_URL = "https://dacatsu.gumroad.com/l/async-memo";
  const sep = OWN_PRODUCT_URL.indexOf("?") >= 0 ? "&" : "?";
  const href = OWN_PRODUCT_URL + sep + "utm_source=notetakernotes";
  document.querySelectorAll('a[data-own-product="async-memo"]').forEach(function (a) {
    a.setAttribute("href", href);
  });
})();
