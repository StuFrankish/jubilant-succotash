# jubilant-succotash
Random exercise to duplicate the look and feel of the GitHub markdown editor.
The editor has the basic look and feel of the Github component with some of the basic features.

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
- Hide the tool buttons when ini "preview" mode.
- Swap out the javascript "markdown engine" for something that will actually do it.

### The Basic Editor
![image](https://github.com/user-attachments/assets/7248f050-affc-4b17-bb03-1ffb80204fbd)
