# How to Test the Connect Modal

## Quick Test (Immediate)

Open your browser console and run:

```javascript
// Force show the modal immediately (for testing)
sessionStorage.removeItem('healops_connect_modal_shown');
// Then reload the page and the modal will appear after 20 seconds
```

## Skip the 20 Second Wait (Development Only)

If you want to test faster during development:

1. Open `components/marketing/connect-modal.tsx`
2. Find line ~27 with the setTimeout
3. Temporarily change `20000` to `2000` (2 seconds)
4. Save and test
5. **Remember to change it back to 20000 before deploying!**

```typescript
// FOR TESTING ONLY - Change back to 20000 for production!
setTimeout(() => {
  setIsOpen(true);
  // ...
}, 2000); // ⚠️ TESTING ONLY - Use 20000 in production
```

## Test the Full Flow

1. **Open the website** in incognito mode (clean session)
2. **Wait 20 seconds** (or 2 seconds if you changed the timer)
3. **Modal should appear** with blur backdrop
4. **Test interactions**:
   - Click "Book a Demo" → Should open Calendly
   - Click "Send Email" → Should go to /contact page
   - Click X button → Modal closes
   - Click outside modal → Modal closes
5. **Check GA4 Realtime** for events:
   - `connect_modal_shown`
   - `connect_modal_demo_clicked` or `connect_modal_email_clicked`

## Verify Session Behavior

1. After modal appears and you close it
2. Navigate to another page on the site
3. Wait 20+ seconds
4. Modal should NOT appear again (same session)
5. Open a new tab (new session)
6. Modal SHOULD appear again after 20 seconds

## Mobile Testing

1. Open on mobile device or resize browser
2. Modal should be fully responsive
3. All buttons should be tappable
4. Text should be readable
5. No horizontal scrolling

## Clear Session to Retest

```javascript
// In browser console:
sessionStorage.clear();
// Then reload page
```

## Expected Appearance

The modal will:
- ✅ Blur the background
- ✅ Center on screen
- ✅ Animate in smoothly (zoom effect)
- ✅ Show two columns (desktop) or stack (mobile)
- ✅ Have gradient background on left side
- ✅ Show metrics with colored icons
- ✅ Have two prominent CTA buttons

## Production Checklist

Before deploying, verify:
- [ ] Timer is set to 20000 (20 seconds)
- [ ] Calendly link is correct
- [ ] Contact page link works
- [ ] GA4 tracking is firing
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Session storage working

---

**Ready to test! Start your dev server and wait 20 seconds (or modify the timer for faster testing).** 🚀

