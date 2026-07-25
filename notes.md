### new things i learned-->

- we use Lottie pags and Lottie library for animated icons. Refer to NavBar.jsx for the application

- watch() is a function react-hook-form gives you (destructured from useForm()) that lets you subscribe to and read the live current value(s) of your form fields, triggering a re-render whenever they change — this is what makes real-time UI updates (like your strength indicator) possible.

- const { register, watch } = useForm();
  const passwordValue = watch("password", "");

- install lottie library with "npm i lottie-react".