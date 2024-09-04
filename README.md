This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- #### component Logo

| Prop        | Default  | Description                                                              |
| ----------- | -------- | ------------------------------------------------------------------------ |
| `className` | `string` | optional, additional CSS classes for customizing the component's styles. |

- #### component ScrollButton

| Prop           | Type      | Description                                                                                               |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------- |
| `href`         | string    | required, unique identifier used to pinpoint sections of a page that need to be scrolled to.              |
| `className`    | string    | optional, additional classes for custom styling.                                                          |
| `children`     | ReactNode | required, button content, can be text or element.                                                         |
| `colorButton`  | boolean   | optional, determines whether the button has a colored border and background with hover and focus effects. |
| `borderButton` | boolean   | optional, applies a solid border and color styling to the button with hover and focus effects.            |

- #### component SocialLinks

| Prop      | Type   | Description                                                                   |
| --------- | ------ | ----------------------------------------------------------------------------- |
| `section` | string | optional, determines the style and layout depending on which page section is. |

- #### component SocialLink

| Prop          | Type                                    | Description                                                                       |
| ------------- | --------------------------------------- | --------------------------------------------------------------------------------- |
| `icon`        | React.FC<React.SVGProps<SVGSVGElement>> | required, the SVG icon component for the social media platform.                   |
| `link`        | string                                  | required, the URL to the social media page.                                       |
| `ariaLabel`   | string                                  | required, the ARIA label for the link, used for accessibility purposes.           |
| `displayText` | string                                  | optional, the text to display alongside the icon, used in the 'contacts' section. |
| `section`     | string                                  | optional, defines which section (e.g., 'contacts', 'footer') affects styling.     |

- #### component Modal

| Prop        | Type      | Description                                                                   |
| ----------- | --------- | ----------------------------------------------------------------------------- |
| `children`  | ReactNode | required, the content to be displayed inside the modal.                       |
| `isOpen`    | boolean   | required, controls whether the modal is open or closed.                       |
| `setIsOpen` | function  | required, function to set the modal's open/closed state.                      |
| `reviews`   | boolean   | optional, applies specific styles and behavior for reviews modal when `true`. |

- #### component ReviewCard

| Prop     | Type   | Description                                                          |
| -------- | ------ | -------------------------------------------------------------------- |
| `author` | string | required, the name of the author of the review.                      |
| `text`   | string | required, the review content that will be displayed inside the card. |
