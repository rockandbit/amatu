# Amatu

Amatu is a Vite and React website hosted on Netlify. Its editable page content is managed through Decap CMS at `/admin/`.

## Local development

Use Node.js 20 to match the Netlify build environment.

```bash
npm ci
npm run dev
```

Run `npm run build` to create the production site in `dist/`.

## CMS publishing flow

Decap CMS publishes changes directly to the `master` branch through Netlify Git Gateway. A Git-connected Netlify site then builds and deploys the update automatically.

The CMS is configured in `public/admin/config.yml`. Its editable page data lives in `src/data/`, and uploaded images are saved in `public/uploads/`.

## Required Netlify setup

This setup deliberately uses Netlify Identity and Git Gateway as the only CMS authentication path.

1. In the Netlify project, enable **Identity**.
2. Set Identity registration to **Invite only**.
3. Invite each content editor from the Identity users page.
4. Enable **Git Gateway** under Identity services.
5. Leave Git Gateway roles unset so every invited Identity user can use the CMS.
6. In Identity invitation and password-recovery email templates, direct recipients to `/admin/` so they complete the flow in the CMS.

`/admin/` is publicly reachable as a page, but only authenticated Identity users with the permitted role can edit or publish content.
