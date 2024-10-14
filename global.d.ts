declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css'; // For regular CSS files
