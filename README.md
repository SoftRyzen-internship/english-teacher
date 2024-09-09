# Motivation School - English online for school-age children

![First image of the project](./public/assets/images/webp/main-page-screenshot.webp)

## About the Project

The **Motivation School** website presents a unique psychotherapy program that combines elements of bodywork and dance movements to resolve conflicts. The website also offers the possibility to book a consultation.

### Main Services:

- Assistance in building happy family relationships.
- Working with the psychological causes of physical problems.
- Psychological support in resolving anxiety and fears.
- Working with low self-esteem and lack of confidence.
- Dance classes for teenagers and adults with special needs.
- Dance classes for adults: Salsa, Bachata, Kizomba.

### Target Audience:

- Couples looking to improve their relationships and seeking advice.
- People facing crisis situations like depression, anxiety, eating disorders, and more.
- Teenagers and adults with special needs (autism, intellectual disabilities).
- Those who wish to develop communication skills with others.

### Therapy Stages:

1. **Application**: Submit an application and receive a 15-minute free consultation.
2. **Start**: Begin sessions that will be held 1-2 times a week.
3. **Tracking**: Follow recommendations, monitor and discuss results.
4. **Result**: Activate potential that leads to an improved quality of life.

## Let’s Get Acquainted

I am Serhiy Molchanov, a psychologist and psychotherapist. My mission is to be there in difficult times, help people understand themselves better, and find ways to overcome life’s challenges. My education and experience include body-oriented, dance movement, conflict-centered, and crisis therapy.

### Achievements:

- Order "For Assistance to the Army" from Zaluzhny for psychological help.
- Grand Prix at the national festival "Nova Nazva" in 2023 and 2024.
- Gratitude from Mayor B. Filatov as a psychology teacher.

## Frequently Asked Questions

1. **How do I book a consultation?** Fill out the form on the website.
2. **What services do you provide?** The full list of services can be found above.
3. **How does therapy work?** Therapy is carried out in several stages, starting with a free consultation.

## Getting Started

To start working with the project locally, follow these steps:

### Clone the Repository:

`git clone https://github.com/SoftRyzen-internship/molchanov-pchychoterapist`

### Install Dependencies:

**Using Yarn:**
`yarn install`

**Using npm:**
`npm run dev`

### Run the Application:

**Using Yarn:**
`yarn dev`

**Using npm:**
`npm install`

### Open in Your Browser:

[http://localhost:3000](http://localhost:3000)

## Technologies Used

1. **Next.js** - A React framework for building modern web applications with server-side rendering and efficient routing.
2. **Tailwind CSS** - A utility-first CSS framework that accelerates the design and styling of web interfaces.
3. **TypeScript** - A strict syntactical superset of JavaScript providing optional static typing for better code clarity.
4. **Swiper** - A mobile-friendly touch slider with hardware-accelerated transitions and smooth interactions.
5. **React Hook Form** - A library for managing form state in React applications.
6. **Sanity** - A headless CMS for managing content with a flexible API and powerful features like real-time collaboration.

## Design

The design layout was created in Figma. You can view it [here](https://www.figma.com/design/boyRGW6pbLeSH5XkC9fc7a/Molchanov-Pchychoterapist?node-id=1-2&t=0VXuA4Bfhb61jF5v-0).

## Component API

Each component in the project has its own API, which can be found in the corresponding component's folder.

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

- #### component Button

| Prop       | Type      | Description                                                                         |
| ---------- | --------- | ----------------------------------------------------------------------------------- |
| `type`     | string    | optional, determines the button type, defaults to 'submit'.                         |
| `children` | ReactNode | required, the content to be displayed inside the button, typically text or an icon. |

- #### component ErrorMessage

| Prop      | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| `message` | string | equired, the error message text to be displayed |

- #### component TextareaField

| Prop          | Type        | Description                                                               |
| ------------- | ----------- | ------------------------------------------------------------------------- |
| `id`          | string      | required, the unique identifier for the textarea.                         |
| `label`       | string      | required, the label text displayed above the textarea.                    |
| `name`        | string      | required, the name attribute for the textarea, used for form submission.  |
| `register`    | function    | required, function from `react-hook-form` to register the checkbox input. |
| `placeholder` | string      | required, placeholder text for the textarea.                              |
| `errors`      | FieldErrors | required, object containing form validation errors from react-hook-form.  |

- #### component InputField

| Prop           | Type        | Description                                                                                            |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `id`           | string      | required, unique identifier for the input field.                                                       |
| `label`        | string      | required, the label text to be displayed for the input field.                                          |
| `type`         | string      | required, the type of input (e.g., `text`, `email`, `tel`).                                            |
| `name`         | string      | required, name attribute for the input field.                                                          |
| `register`     | function    | required, function from `react-hook-form` to register the checkbox input.                              |
| `errors`       | FieldErrors | required, object containing error information from react-hook-form, used to display validation errors. |
| `placeholder`  | string      | optional, placeholder text for the input field.                                                        |
| `autoComplete` | string      | optional, autoComplete attribute for the input field.                                                  |
| `mask`         | string      | optional, defines the input mask (e.g., for phone numbers) when using act-input-mask-next.             |

- #### component CheckboxField

| Prop       | Type        | Description                                                               |
| ---------- | ----------- | ------------------------------------------------------------------------- |
| `id`       | string      | required, unique identifier for the checkbox input field.                 |
| `label`    | string      | required, the label text that will be displayed next to the checkbox.     |
| `type`     | string      | required, the type of input, should be `'checkbox'`.                      |
| `name`     | string      | required, the name attribute for the checkbox input.                      |
| `register` | function    | required, function from `react-hook-form` to register the checkbox input. |
| `errors`   | FieldErrors | required, object containing form validation errors from react-hook-form.  |

- #### component Slider

| Prop       | Type      | Description                                                                                        |
| ---------- | --------- | -------------------------------------------------------------------------------------------------- |
| `section`  | string    | required, specifies the section for slider settings. Possible values are `benefits` and `reviews`. |
| `children` | ReactNode | required, the content to be displayed inside the slider.                                           |
