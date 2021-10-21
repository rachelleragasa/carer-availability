# Carer Availability

React web application that will handle the following user scenarios:

- As a user I want to see all carers available with their current available slots.
- As a user I want to check the carer availability and be able to schedule a slot.
- As a user I want to see the current time and have it updating in real time.

## Folder Structure

The application is broken down into the below structure:

Example:

```
|-- src
    |-- index.js
    |-- assets                          # Images etc.
    |-- components                      # React Components
    |   |-- App
    |   |-- |-- App.js
    |   |-- Carers
    |   |-- |-- Carers.js
    |-- styles                          # Generic Styles & Tailwind
    |   |-- breakpoints.js              # Reusable function to access `min-width` from styled-components
    |   |-- global.js                   # Global styles go here
```

## Tech Stack

- React
- Axios
- Tailwind CSS
- Styled Components

## Responsive Design

Though the provided designs were only for 1440px, I also implemented what it would look like across mobile and tablet trying to keep it as close as possible to the original designs provided.

## Improvements

### TypeScript

I am still learning TypeScript and due to the time constraints, I decided to not use it. However, I would have liked to include it and I am extremely keen to learn more and upskill in TypeScript.

### Images

I was having a bit of difficulty positioning the images and tried to fix it using `object-fit` as some of the images have differing heights. I tried to explore using `react-imgix` as I saw in the API there are some parameters being passed i.e. `fit` and `crop` but didn't work. Definitely keen to learn more about image optimisation.

### Unit Tests

I have added a very basic unit test on the button `Button` and attempted to test the `Carers` component. I would have liked to have completed this unit test and also add more tests. I am still learning and very much looking to be able to work more with it.
