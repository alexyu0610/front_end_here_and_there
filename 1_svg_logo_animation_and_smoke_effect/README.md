# SVG Logo Animation and Smoke Effect

* First part of `app.js` outputs the total length  of each SVG letter to the console, a necessary data as input parameter to the stroke properties in CSS.

* `stroke-dasharray` separates the contour of the letter with spaces. Higher value means visually closer to the full contour.

*  `stroke-dashoffset` shifts the distance where the spacing occurs. Identical offset value (identical to dasharray) wipes out the content entirely while zero offset reveals the full content. We made use of this property for backward animation to create the illusion of gradually revealing the content.

* General Idea:  
1. Define animation function that controls the offset value
2. Use `nth-child` to target specific letter. Set up increment delay when animating the content with the function defined in step 1.
3. Define another animation function that fills the outline of the logo. Define initial state as transparent to avoid visual shock when the filling effect takes place.
4. Apply function in Step 3 to the `logo` parent class. 
