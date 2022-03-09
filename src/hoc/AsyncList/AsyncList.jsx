export default function AsyncList({ status, children }) {
  if (status === "error") {
    return <>Error</>;
  } else if (status === "loading") {
    return <>Loading</>;
  }

  return <>{children}</>;
}
