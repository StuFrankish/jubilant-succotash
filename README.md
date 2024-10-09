# jubilant-succotash
Exercise to duplicate the look and feel of the GitHub markdown editor.
The editor has the basic look and feel of the Github component with some of the basic features.

### Why?
I've seen multiple projects that use 3 or 4 WYSIWYG editors embedded on the same page to provide (technical) users with the ability add notes, comments and other such like. The performance impact of having multiple instances of these freely available editors however was dragging page performance through the mud and driving user friction through the roof. Given the sum total usage of the editors was very basic text formatting, why not use markdown?

So here I am, "up late, again" as is the norm, writing one from scratch that looks and feels like one most technical folks are familiar with, something that could hopefully be embedded in a form as a drop in replacement for a textarea control and behave all the same.

Don't mind the repo name... "jubilant-succotash" was Githubs idea and I don't have any better ones!

### Technical Bits
- Built on a dotnet8 backend with MVC (quick and dirty project setup).
- Uses embedded Font Awesome (free) icons.
- Markdown "renderer" features are very minimal and all done in javascript while in POC stages.
- Switching between the "Write" and "Preview" modes is the current trigger for rendering the output, though this will be updated later to include a server-side renderer for more complex features.

### Cloning Instructions
The project runs a super-standard dotnet 8 web application. Clone the repo as you normally would;
```bash
git clone https://github.com/StuFrankish/jubilant-succotash.git
```
Run the commands to build and run the project;
```bash
cd jubilant-succotash

dotnet build
dotnet run
```

### To-Do
- Clean up the CSS and Javascript.
- Swap out the javascript "markdown engine" for something that will actually do some complex rendering.

### The Basic Editor
![image](https://github.com/user-attachments/assets/1c58b65d-f74b-4b27-a2b6-978159181f82)