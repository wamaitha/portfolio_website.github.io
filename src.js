var fl = gsap.timeline();

fl.from("#nav", {
    x: -1500,
    duration: 2,
})
fl.from("#nav1",{
    y:-200,
    duration:2,
})


Shery.imageEffect("#image", {
    style: 5, config: {
        "a": { "value": 2, "range": [0, 30] },
        "b": { "value": -0.86, "range": [-1, 1] }, "zindex":
            { "value": -9996999, "range": [-9999999, 9999999] },
        "aspect": { "value": 0.8 }, "ignoreShapeAspect":
            { "value": true }, "shapePosition": {
                "value":
                    { "x": 0, "y": 0 }
            }, "shapeScale": {
                "value":
                    { "x": 0.5, "y": 0.5 }
            }, "shapeEdgeSoftness":
            { "value": 0, "range": [0, 0.5] }, "shapeRadius":
            { "value": 0.06, "range": [0, 2] }, "currentScroll":
            { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey":
            { "value": true }, "infiniteGooey":
            { "value": true }, "growSize":
            { "value": 4, "range": [1, 15] }, "durationOut":
            { "value": 1, "range": [0.1, 5] }, "durationIn":
            { "value": 1.5, "range": [0.1, 5] }, "displaceAmount":
            { "value": 0.5 }, "masker": { "value": true }, "maskVal":
            { "value": 1, "range": [1, 5] }, "scrollType":
            { "value": 0 }, "geoVertex": {
                "range":
                    [1, 64], "value": 1
            }, "noEffectGooey":
            { "value": true }, "onMouse": { "value": 1 },
        "noise_speed": {
            "value": 0.2, "range":
                [0, 10]
        }, "metaball": {
            "value": 0.2, "range":
                [0, 2], "_gsap": { "id": 3 }
        }, "discard_threshold":
            { "value": 0.5, "range": [0, 1] }, "antialias_threshold":
            { "value": 0, "range": [0, 0.1] },
        "noise_height": {
            "value": 0.5, "range":
                [0, 2]
        }, "noise_scale": {
            "value": 10, "range":
                [0, 100]
        }
    }, gooey: true,
})

// Script.js 
function validate() { 
	let name = 
		document.getElementById("name").value; 
	let subject = 
		document.getElementById("subject").value; 
	let phone = 
		document.getElementById("phone").value; 
	let email = 
		document.getElementById("email").value; 
	let message = 
		document.getElementById("message").value; 
	let error_message = 
		document.getElementById("error_message"); 

	error_message.style.padding = "10px"; 

	let errors = []; 

	if (name.length < 5) { 
		errors.push("Please Enter a valid Name");} 
	if (subject.length < 10) { 
		errors.push("Please Enter a Correct Subject");} 
	if (isNaN(phone) || phone.length != 10) { 
		errors.push("Please Enter a valid Phone Number");} 
	if (email.indexOf("@") == -1 || email.length < 6) { 
		errors.push( 
			"Please Enter a valid Email");} 
	if (message.length <= 40) { 
		errors.push( 
			"Please Enter More Than 40 Characters");} 

	if (errors.length > 0) { 
		error_message.innerHTML = 
			errors.join("<br>"); 
		return false;} 
	else { 
		alert( 
			"Form Submitted Successfully!"); 
		return true;}}



