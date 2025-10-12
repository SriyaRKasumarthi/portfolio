# Resume PDF Location

## Where to Add Your Resume

Place your resume PDF in the `/public/` folder at the root level:

```
/public/
  ├── resume.pdf          ← Add your resume here
  ├── images/
  ├── favicon.svg
  └── ...
```

## File Naming

The current code references: `/resume.pdf`

You can either:
1. **Name it exactly `resume.pdf`** (recommended - no code changes needed)
2. Or use a custom name and update the link in `Intro.jsx`

## How to Add

### Option 1: Direct Copy (Recommended)
Simply drag and drop your PDF file into:
```
/Users/sriyakasumarthi/cursor_portfolio/portfolio/public/resume.pdf
```

### Option 2: Custom Filename
If you want to use a different name like `Sriya_Kasumarthi_Resume.pdf`:

1. Add your PDF to `/public/Sriya_Kasumarthi_Resume.pdf`
2. Update `Intro.jsx` line 156:
   ```jsx
   onClick={() => handleLinkClick('/Sriya_Kasumarthi_Resume.pdf')}
   ```

## Current Implementation

In `Intro.jsx`, the Resume button code is:
```jsx
<motion.button
  onClick={() => handleLinkClick('/resume.pdf')}
  // ... rest of button code
>
```

The `handleLinkClick` function opens the file in a new tab:
```jsx
const handleLinkClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
```

## File Recommendations

- **Format**: PDF (required)
- **File Size**: < 2MB (ideally < 500KB)
- **Naming**: Use lowercase, no spaces (use hyphens or underscores)
  - ✅ Good: `resume.pdf`, `sriya-kasumarthi-resume.pdf`
  - ❌ Bad: `Resume (Final) 2024.pdf`, `My Resume.pdf`

## After Adding Your Resume

1. Add the file to `/public/resume.pdf`
2. No rebuild needed for local dev (just refresh browser)
3. For deployment: I'll ask before pushing any changes

## Testing

Once added, you can test locally:
1. Run `npm run dev` (currently at http://localhost:3001/)
2. Click the "Resume" button in the intro section
3. Your PDF should open in a new tab

---

**Next Step**: Add your `resume.pdf` file to the `/public/` folder and it will work automatically!

