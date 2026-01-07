# Google Search Console Manual Tasks

This document contains detailed instructions for manual tasks that must be performed in Google Search Console to fix critical SEO issues.

## Task 0.4: Identify Redirect Issues

**Priority:** CRITICAL - Must be done first

### Steps:
1. Log into [Google Search Console](https://search.google.com/search-console)
2. Select your HealOps property (healops.com)
3. Navigate to: **Indexing** > **Pages**
4. Click on "Why pages aren't indexed" section
5. Look for "Page with redirect" (currently shows 2 pages)
6. Document the exact URLs causing redirects
7. Check if redirects are 301 (permanent) or 302 (temporary)

### What to Look For:
- URLs that redirect to other pages
- Redirect type (301 vs 302)
- Redirect chain length
- Final destination URL

### Action Required:
Document all findings and share with development team to fix redirect issues.

---

## Task 0.5: Fix Redirect Pages

**Depends on:** Task 0.4

### Option A (Recommended):
1. Update all internal links to point directly to final URLs (no redirects)
2. Remove redirect pages from sitemap
3. Ensure consistency across all navigation elements
4. Re-request indexing in GSC

### Option B (If Redirects are Necessary):
1. Ensure all redirects are 301 (permanent), not 302 (temporary)
2. Check that robots.txt isn't blocking the final URLs
3. Verify final pages don't have noindex meta tag
4. Ensure redirect chains are minimal (1 hop maximum)

### Files to Check:
- All internal links in components (navbar, footer, etc.)
- Hardcoded links in marketing pages
- Blog post internal links

---

## Task 0.6: Fix "Crawled but Not Indexed" Page

**Priority:** HIGH

### Steps:
1. In GSC, go to **Indexing** > **Pages**
2. Identify which page shows "Crawled - currently not indexed"
3. Click on the URL to see details

### Common Causes & Fixes:
- **Low-quality content:** Add 300-500+ words of original, valuable content
- **Duplicate content:** Make content unique or use canonical tags
- **Thin content:** Add more detailed information, examples, or media
- **No internal links:** Add links from other pages to this page

### Quality Checklist:
- [ ] Page has 300+ words of unique content
- [ ] Content provides value to users
- [ ] Page has proper meta title and description
- [ ] No noindex tag in page source
- [ ] At least 2-3 internal links pointing to this page
- [ ] Proper heading structure (H1, H2, etc.)

### After Fixing:
1. Use URL Inspection tool in GSC
2. Click "Request Indexing"
3. Wait 1-7 days for re-crawl

---

## Task 0.7: Remove Unused Verification Token

**Priority:** MEDIUM (Security)

### Steps:
1. In GSC, go to **Settings** (gear icon in bottom left)
2. Click **Verification details**
3. Review all verification methods listed
4. Delete any unused or duplicate verification tokens
5. Keep only your current primary verification method

### Why This Matters:
- Unused tokens are security vulnerabilities
- Someone with access to an old token could gain control
- Cleaner verification setup is easier to manage

---

## Task 0.8: Submit Pages to GSC for Re-Indexing

**Depends on:** All code changes from Phase 0 must be deployed first

### Priority Pages to Submit:
1. `https://healops.com/` (Homepage)
2. `https://healops.com/pricing`
3. `https://healops.com/docs`
4. `https://healops.com/blog`
5. `https://healops.com/about`
6. `https://healops.com/contact`

### Steps for Each URL:
1. Copy the full URL
2. Paste into the search bar at top of GSC
3. Wait for inspection results
4. Click **Request Indexing**
5. Wait for confirmation

### Expected Timeline:
- Desktop indexing: 1-3 days
- Mobile indexing: 3-7 days
- Full re-crawl: 1-2 weeks

### Monitoring Progress:
1. Check GSC every 3 days
2. Go to **Indexing** > **Pages**
3. Monitor the "Indexed" count increasing
4. Monitor "Not indexed" count decreasing

---

## Task 1.3: Configure GA4 Conversion Events

**After Phase 1 code is deployed**

### Steps:
1. Log into [Google Analytics 4](https://analytics.google.com)
2. Select your HealOps property
3. Navigate to: **Admin** > **Events**
4. Find these events in the list:
   - `book_demo`
   - `form_submit`
   - `start_free_clicked`
   - `pricing_cta_clicked`

### Mark as Conversions:
1. Toggle "Mark as conversion" for each event
2. Wait 24 hours for data to populate
3. Verify conversions appear in Reports > Engagement > Conversions

### Set Up Custom Event Parameters:
1. Navigate to **Admin** > **Custom definitions**
2. Add custom dimensions:
   - `cta_location` (Event-scoped)
   - `cta_text` (Event-scoped)
   - `integration_name` (Event-scoped)
   - `form_type` (Event-scoped)

---

## Task 7.4: Set Up Custom GA4 Dashboard

**After Phase 7 tracking is live**

### Steps:
1. Log into GA4
2. Navigate to **Explore** > **Create new exploration**
3. Choose "Free form" template

### Metrics to Include:
- Demo booking rate (conversions / sessions)
- Pricing page conversion rate
- CTA click-through rate by location
- Traffic source performance
- Time on page by device
- Bounce rate by landing page

### Set Up Weekly Report:
1. Click **Share** icon in exploration
2. Choose **Schedule email**
3. Set frequency to **Weekly**
4. Add recipients
5. Choose day and time

---

## Expected Success Metrics

### Week 1-2:
- [ ] All redirect issues identified and fixed
- [ ] "Crawled but not indexed" page fixed
- [ ] All main pages submitted for re-indexing
- [ ] Breadcrumb schema deployed

### Week 3-4:
- [ ] Indexed pages: 4+ (up from 1)
- [ ] Not indexed pages: 0 (down from 3)
- [ ] Web search clicks: 20-30 (up from 6)
- [ ] 0 "Page with redirect" errors

### Week 5-8:
- [ ] Web search clicks: 50+ 
- [ ] Organic traffic increase: 10-20x
- [ ] All pages have breadcrumb schema showing in search results
- [ ] Improved search rankings for target keywords

---

## Troubleshooting

### If Pages Still Not Indexed After 2 Weeks:
1. Check GSC for new errors
2. Verify robots.txt isn't blocking
3. Check for server errors (500s)
4. Ensure sitemap is accessible
5. Verify pages are linked from homepage

### If Redirect Errors Persist:
1. Use Chrome DevTools Network tab
2. Check response codes
3. Verify .htaccess or next.config.ts rules
4. Check for client-side redirects (JavaScript)

### If Conversion Tracking Not Working:
1. Open Chrome DevTools > Console
2. Check for gtag errors
3. Use GA Debugger Chrome extension
4. Verify GA4 measurement ID is correct

---

## Contact Information

For urgent issues or questions:
- Technical questions: Check code implementation in files
- GSC access issues: Contact admin
- GA4 setup questions: Refer to Google Analytics documentation

**Last Updated:** January 2026

