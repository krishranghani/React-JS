1.What is HTML? HTML (HyperText Markup Language) is the standard markup language used to create and design documents on the web. It structures content using elements like headings, paragraphs, links, and images.

What are HTML elements? HTML elements are building blocks of a webpage. An element usually consists of a start tag, content, and an end tag, e.g., <p>This is a paragraph.</p>.

What are HTML attributes? Attributes provide additional information about HTML elements and are always included in the opening tag, e.g., <a href="https://www.example.com">Example</a>.

What are the different types of lists in HTML? HTML supports three types of lists:

Ordered List (<ol>): A list with a sequence (numbers or letters).
Unordered List (<ul>): A list with bullet points.
Definition List (<dl>): A list of terms and their descriptions.
How do you create a hyperlink in HTML? A hyperlink is created using the <a> tag with the href attribute, e.g., <a href="https://www.example.com">Visit Example</a>.

What is the difference between an ordered list and an unordered list? An ordered list (<ol>) displays items in a numbered sequence, while an unordered list (<ul>) displays items with bullet points.

What is the purpose of the alt attribute in an <img> tag? The alt attribute provides alternative text for an image if it cannot be displayed. It also helps with accessibility and improves SEO.

How do you create a table in HTML? A table is created using the <table> element, with rows (<tr>) and cells (<td> for data, <th> for headers), e.g.,

html
Copy code
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
What are semantic HTML elements? Semantic HTML elements clearly describe their meaning in a human- and machine-readable way, e.g., <header>, <article>, <section>, <footer>.

How do you create a form in HTML? A form is created using the <form> tag, with various input elements like <input>, <textarea>, and <button>, e.g.,

html
Copy code
<form action="/submit">
    <input type="text" name="name" placeholder="Enter your name">
    <button type="submit">Submit</button>
</form>
What is the difference between the <div> and <span> tags? <div> is a block-level element used for grouping content, while <span> is an inline element used for styling or grouping small pieces of content within a line.

How do you include a comment in HTML? Comments are added using <!-- comment --> syntax. They are not rendered by the browser, e.g., <!-- This is a comment -->.

What is the purpose of the <!DOCTYPE> declaration in HTML? The <!DOCTYPE> declaration defines the document type and version of HTML. It helps browsers to render the page correctly.

What are void elements in HTML? Void elements are self-closing and do not have closing tags, e.g., <img>, <br>, <hr>, <input>.

How do you embed a video in an HTML document? You can embed a video using the <video> tag, e.g.,

html
Copy code
<video controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
What is the difference between the <section> and <article> tags? <section> is a generic section of content, often with a heading, while <article> is a self-contained piece of content, like a blog post or news article.

How do you create a hyperlink that opens in a new tab? Use the target="_blank" attribute in the <a> tag, e.g., <a href="https://www.example.com" target="_blank">Open in new tab</a>.

What is the meta tag used for in HTML? The <meta> tag provides metadata about the HTML document, such as character set, author, and viewport settings. It’s placed in the <head> section.

How do you include an external CSS file in an HTML document? Use the <link> tag within the <head> section, e.g.,

html
Copy code
<link rel="stylesheet" href="styles.css">
What is the viewport meta tag, and why is it important? The viewport meta tag controls the layout on mobile browsers by setting the width and scale of the viewport, e.g.,

html
Copy code
<meta name="viewport" content="width=device-width, initial-scale=1.0">
How do you create a responsive image in HTML? Use the srcset attribute in the <img> tag to provide different image sizes for different screen resolutions, e.g.,

html
Copy code
<img src="small.jpg" srcset="medium.jpg 768w, large.jpg 1024w" alt="Responsive Image">
What is the purpose of the data- attributes in HTML5? data- attributes are used to store custom data in HTML elements. They allow you to embed extra information that can be used with JavaScript.

How do you create a navigation bar in HTML? A navigation bar is typically created using the <nav> element with a list of links, e.g.,

html
Copy code
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
What is the difference between block-level and inline elements? Block-level elements (e.g., <div>, <p>) occupy the entire width of their parent container, whereas inline elements (e.g., <span>, <a>) only take up as much width as needed.

What is the purpose of the <header> and <footer> tags? The <header> tag is used for introductory content or navigation links at the beginning of a section, while the <footer> tag is used for content at the bottom of a section, like copyright or links.

How do you create a checkbox in HTML? Use the <input type="checkbox"> element, e.g.,

html
Copy code
<input type="checkbox" id="subscribe" name="subscribe">
<label for="subscribe">Subscribe to newsletter</label>
What are the new form elements introduced in HTML5? HTML5 introduced several new input types: date, email, number, range, search, tel, url, color, datetime-local, month, week, and others.

How do you create a radio button group in HTML? Use multiple <input type="radio"> elements with the same name attribute, e.g.,

html
Copy code
<input type="radio" id="option1" name="options" value="1">
<label for="option1">Option 1</label>
<input type="radio" id="option2" name="options" value="2">
<label for="option2">Option 2</label>
What is the purpose of the srcset attribute in an <img> tag? The srcset attribute specifies multiple image sources for different screen resolutions or sizes, allowing for responsive images.

How do you create a file upload field in an HTML form? Use the <input type="file"> element, e.g.,

html
Copy code
<form>
    <input type="file" name="upload">
    <button type="submit">Upload</button>
</form>
What is the difference between the <b> and <strong> tags? The <b> tag is used for bold text without emphasizing its importance, while <strong> indicates that the enclosed text is of greater importance and also renders as bold.

How do you create a text area in an HTML form? Use the <textarea> element, e.g.,

html
Copy code
<textarea name="comments" rows="5" cols="30"></textarea>
What are the global attributes in HTML? Global attributes can be applied to any HTML element. Examples include class, id, style, title, data-*, hidden, tabindex, accesskey, and others.

How do you create a multi-column layout in HTML5? Multi-column layouts can be created using CSS with flexbox, grid, or column-count. HTML5 doesn’t have specific elements for multi-column layouts but works with CSS.

How do you create a tooltip in HTML? Use the title attribute to create a tooltip, e.g., <a href="#" title="This is a tooltip">Hover over me</a>.

What is the purpose of the <canvas> element in HTML5? The <canvas> element is used to draw graphics on the web page via JavaScript, like images, shapes, and animations.

How do you create a progress bar in HTML? Use the <progress> element, e.g.,

html
Copy code
<progress value="70" max="100">70%</progress>
What is the difference between the <i> and <em> tags? The <i> tag is used for italic text without conveying emphasis, while <em> adds emphasis to the text and is also italicized.

How do you create an ordered list that starts from a specific number? Use the start attribute in the <ol> tag, e.g.,

html
Copy code
<ol start="5">
    <li>Item 1</li>
    <li>Item 2</li>
</ol>
What is the lang attribute used for in an HTML document? The lang attribute specifies the language of the document or a specific element, e.g., <html lang="en">.

How do you include JavaScript in an HTML document? JavaScript can be included using the <script> tag, either inline or by linking an external file, e.g.,

html
Copy code
<script src="script.js"></script>
What is the accesskey attribute in HTML? The accesskey attribute specifies a shortcut key to activate or focus an element, e.g., <button accesskey="s">Submit</button>.

How do you create a table with merged cells in HTML? Use the colspan or rowspan attributes in the <td> or <th> elements, e.g.,

html
Copy code
<table>
    <tr>
        <td colspan="2">Merged Cell</td>
    </tr>
</table>
What is the purpose of the <figure> and <figcaption> tags? The <figure> tag is used for self-contained content like images or diagrams, and <figcaption> provides a caption or description for it.

How do you create a form that supports file uploads in HTML? Use the <input type="file"> element within a form and set the enctype attribute to multipart/form-data, e.g.,

html
Copy code
<form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit">Upload</button>
</form>
What are the differences between HTML4 and HTML5? HTML5 introduced new elements (<header>, <footer>, <article>, <section>, etc.), new form input types, audio/video support, the <canvas> element, better error handling, and is more mobile-friendly compared to HTML4.

What is the placeholder attribute in HTML5? The placeholder attribute provides a hint or example text that appears within an input field until the user enters a value.

How do you create a hidden field in an HTML form? Use the <input type="hidden"> element, e.g.,

html
Copy code
<input type="hidden" name="userID" value="12345">
What is the purpose of the <label> element in HTML forms? The <label> element is used to associate a label with a form control, improving accessibility and usability.

How do you create an email input field in HTML5? Use the <input type="email"> element, e.g.,

html
Copy code
<input type="email" name="email" placeholder="Enter your email">
What is the required attribute in HTML5 forms? The required attribute ensures that the user must fill out a field before submitting the form.

How do you use the <datalist> element in HTML5? The <datalist> element provides an autocomplete dropdown for an <input> field, e.g.,

html
Copy code
<input list="browsers" name="browser">
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
</datalist>
What is the novalidate attribute in HTML5 forms? The novalidate attribute prevents the form from being validated when submitted.

How do you create a telephone input field in HTML5? Use the <input type="tel"> element, e.g.,

html
Copy code
<input type="tel" name="phone" placeholder="123-456-7890">
What is the purpose of the <time> element in HTML5? The <time> element represents a specific time, date, or both, e.g., <time datetime="2023-08-24">August 24, 2023</time>.

How do you create a date picker input field in HTML5? Use the <input type="date"> element, e.g.,

html
Copy code
<input type="date" name="birthday">
What is the formaction attribute in HTML5? The formaction attribute overrides the form's action attribute for a specific <button> or <input type="submit">.

How do you use the <output> element in HTML5 forms? The <output> element displays the result of a calculation, often used with JavaScript, e.g.,

html
Copy code
<output name="result" for="a b">0</output>
What is the min and max attribute in HTML5 input elements? The min and max attributes specify the minimum and maximum values for numeric input types, e.g.,

html
Copy code
<input type="number" name="quantity" min="1" max="10">
How do you create a range input field in HTML5? Use the <input type="range"> element, e.g.,

html
Copy code
<input type="range" name="volume" min="0" max="100">
What is the multiple attribute in HTML5 input elements? The multiple attribute allows a user to select multiple values in file input or email input fields, e.g.,

html
Copy code
<input type="file" name="files" multiple>
How do you create a color picker input field in HTML5? Use the <input type="color"> element, e.g.,

html
Copy code
<input type="color" name="favcolor">
What is the purpose of the <mark> element in HTML5? The <mark> element is used to highlight or mark text, e.g.,

html
Copy code
<p>This is <mark>important</mark> text.</p>
How do you create a search input field in HTML5? Use the <input type="search"> element, e.g.,

html
Copy code
<input type="search" name="query" placeholder="Search...">
What is the autocomplete attribute in HTML5? The autocomplete attribute suggests previously entered values based on the input's name or type, e.g.,

html
Copy code
<input type="text" name="username" autocomplete="username">
How do you create a keygen element in HTML5? The <keygen> element was used to generate a key pair for secure authentication. However, it has been deprecated and is no longer supported in HTML5.

What is the step attribute in HTML5 input elements? The step attribute specifies the legal number intervals for an input field, e.g.,

html
Copy code
<input type="number" name="points" step="10">
How do you use the <progress> element in HTML5? The <progress> element displays a progress bar, e.g.,

html
Copy code
<progress value="70" max="100"></progress>
What is the dirname attribute in HTML5? The dirname attribute, when used with a <textarea> or <input> element, sends the text directionality (ltr or rtl) along with the form submission.

How do you create a number input field in HTML5? Use the <input> element with the type="number" attribute. This allows users to enter numeric values and provides built-in validation. You can also set min, max, and step attributes to define the range and increment.
html
Copy code
<input type="number" name="quantity" min="1" max="100" step="1">
How do you use the <summary> element in HTML5? The <summary> element provides a heading or summary for a <details> element. When clicked, it reveals or hides the content within the <details> tag.
html
Copy code
<details>
    <summary>More Information</summary>
    <p>This is additional content that can be shown or hidden.</p>
</details>
How do you use the <details> element in HTML5? The <details> element creates a widget from which users can obtain additional information or controls. It is typically used with the <summary> element to provide a toggleable summary.
html
Copy code
<details>
    <summary>Click to expand</summary>
    <p>Additional details that are initially hidden.</p>
</details>
What is the translate attribute in HTML5? The translate attribute specifies whether the content of an element should be translated when the page is localized. It can be set to yes (default) or no.
html
Copy code
<p translate="no">This text will not be translated.</p>
How do you use the <aside> element in HTML5? The <aside> element is used for content that is tangentially related to the content around it, such as sidebars or additional information.
html
Copy code
<aside>
    <h2>Related Articles</h2>
    <ul>
        <li><a href="#">Article 1</a></li>
        <li><a href="#">Article 2</a></li>
    </ul>
</aside>
What is the hidden attribute in HTML5? The hidden attribute indicates that an element is not relevant or should not be displayed. It is a boolean attribute that, when present, hides the element.
html
Copy code
<div hidden>This content is hidden from view.</div>
How do you use the <main> element in HTML5? The <main> element represents the dominant content of the <body>, excluding headers, footers, and sidebars. It should only be used once per page.
html
Copy code
<main>
    <h1>Main Content</h1>
    <p>This is the main content of the document.</p>
</main>
What is the download attribute in HTML5? The download attribute on an <a> tag specifies that the linked file should be downloaded rather than opened in the browser. It can also specify a default file name.
html
Copy code
<a href="file.pdf" download="newfile.pdf">Download PDF</a>
How do you use the <nav> element in HTML5? The <nav> element represents a section of navigation links. It helps in grouping navigational links together and improves accessibility.
html
Copy code
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
How do you create a link to a specific part of the same page in HTML? Use the <a> tag with an href attribute that points to the id of the target element. The target element must have the corresponding id attribute.
html
Copy code
<a href="#section1">Go to Section 1</a>

<h2 id="section1">Section 1</h2>