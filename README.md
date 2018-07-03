### Process and decisions

The process followed was fairly standard for a React application.
I created the app using create-react-app, then decided on a basic
layout for its UI, with some very basic paper sketches and
decided what I thought the data for the application
should look like.

Visually, I decided to go with a UI library, to make developing
something aesthetically-pleasing faster. Choice was between Bootstrap
and SemanticUI. Even though I like Bootstrap's grid system more,
I went with SemanticUI since I prefer its visual style. I also
decided to simply use the CSS for SemanticUI, rather than the React
implementation of the library due to the reduced overhead and the
limited time.

I also felt like using Redux for handling the bookmarks data,
though it could have been achieved without. I prefer using it because
it helps data / component separation, logically.

### Challenges and further development

One small challenge I faced during development was removing and editing
entries. I used the URL as a unique identifier, but I should have
assigned unique IDs using lodash or something similar, in order to
better keep track of each entry. Deleting worked fine with using the URL
as identifier (though this will be problematic if same URL is added),
but editing would've been problematic unless I made the URL field uneditable.
Because overhauling these and implementing editing would've taken me over the
4 hours, I decided to forego editing.

Editing would've worked by adding a button next to "Remove",
which would turn the fields in the table to editable inputs,
and the Edit button would transform into a 'Save'. This would update
the entry and simply pass the updated array to the action creator that
saves the bookmarks array on the redux store (and in localStorage).
