// function Box(props) {
function Box({ title, content }) {
  return (
    <div>
      {/* <h2>{props.title}</h2>
      <p>{props.content}</p> */}
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default function ShowAndDestruct() {
  const array = [1, null, true, NaN, [], 'string', false, undefined];

  return (
    <>
      <div>{JSON.stringify(array)}</div>
      <Box title="Box-title" content="Box-string" />
    </>
  );
}
