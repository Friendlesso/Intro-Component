# Intro Component with Sign-Up Form

## A responsive layout combining introductory content with an interactive form

This project implements an intro section paired with a sign-up form, designed to balance informational content and user interaction. The layout places a title and supporting text on the left, while the right side contains a form for collecting user details, including first name, last name, email, and password.

The form emphasizes usability and feedback, providing real-time validation, visual cues for errors, and interactive enhancements to guide the user through the sign-up process.

### Screenshots

#### Image of the Desktop Design

![](./public/PageDesktop.png)

#### Image of the Mobile Design

![](./public/PageMobile.png)

### Dynamic Input Component

The first name, last name, and email fields are implemented using a reusable input component. This approach centralizes validation logic and keeps the form scalable and maintainable.

The input component is used as follows:
      
      <Input
        type={"text"}
        validation={FIRST_NAME_REGEX}
        label={'First Name'}
        id={'FirstNameInput'}
        value={firstName}
        setValue={setFirstName}
        minLength={1}
      />

This setup:

- Enables consistent validation across multiple fields
- Reduces duplication in form logic
- Makes it easy to extend the form with additional inputs

### Password Features & Validation Feedback

The password field includes enhanced interaction and feedback mechanisms:

- Show / Hide Password toggle for improved usability
- Password Rules List displayed when requirements are not met
- Live Password Strength Indicator that updates as the user types

These features help users understand requirements clearly and create stronger passwords.

### Built with

- [React](https://react.dev/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - type superset of JS
- [Tailwindcss](https://tailwindcss.com/) - utility-first CSS framework

## Author

- Website - [Mihailo Djurovic](portfolio-miahilo.vercel.app)
