export function NotFoundError({ resource }) {
  return (
    <>
      <h2>Error 404</h2>
      <h3>Uh oh! The {resource} you're looking for does not exist</h3>
    </>
  );
}
