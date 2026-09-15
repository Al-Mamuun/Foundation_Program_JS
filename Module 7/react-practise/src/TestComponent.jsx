//* 1. File extension must be .jsx for React components
//* 2. React component names must start with a capital letter
//* 3. React components must be a default export
//* 4. React components must return a single JSX element (can be a fragment <> </>)

// const TestComponent = () => {
//     return <>
//     <h1>Test Component</h1>
//     <div>Mamun is the Good Boy</div>
//     <h2>This is a heading</h2>
//     </>
// };

// export default TestComponent;

// export default function TestComponent() {
//     return <>
//     <h1>Test Component</h1>
//     <div>Mamun is the Good Boy</div>
//     <h2>This is a heading</h2>
//     </>
// };


const name = "Mamun";
export default function TestComponent() {
  return (
    <>
      <div>
        <h1>Test Component</h1>
        <div>{name} is the Good Boy</div>
        <h2>This is a heading</h2>
        <span>I am from Bangladesh</span>
      </div>
      <div>
        <h1>Yepppp long way to Go</h1>
      </div>
    </>
  );
}
