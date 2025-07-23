const Page = () => (
  <div>
    <p>This is a test of components for this website.</p>
    <h1>Level 1 Header</h1>
    <h2>Level 2 Header</h2>
    <h3>Level 3 Header</h3>
    <h4>Level 4 Header</h4>
    <h5>Level 5 Header</h5>
    <h6>Level 6 Header</h6>
    <p>Paragraph</p>
    <a
      href="https://youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      This is a link to YouTube
    </a>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <ol>
      <li>Ordered item 1</li>
      <li>Ordered item 2</li>
      <li>Ordered item 3</li>
    </ol>
    <blockquote>Blockquote text</blockquote>
    <pre>
      {`for i in range(1, 101):
        if i % 15 == 0:
                print("FizzBuzz")
        elif i % 3 == 0:
                print("Fizz")
        elif i % 5 == 0:
                print("Buzz")
        else:
                print(i)`}
    </pre>
    <code>const example = 'This is a code snippet'; // Example code</code>
    <div>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Sample Unsplash Photo"
        width={300}
        height={200}
      />
    </div>
    <hr />
    <p>
      This is <em>emphasized text</em> and this is <strong>strong text</strong>.
    </p>
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
      </tbody>
    </table>
    <p>LaTeX support for Math Formula?</p>
  </div>
);

export default Page;
