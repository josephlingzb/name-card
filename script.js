window.addEventListener('load', async function () {
	var getUser = function () {
		var url = window.location.href
		var formatUrl = url.split('/#/')[1] || 'joseph'
		return formatUrl
	}
	var user = getUser();
	
	var fetchUser = async function () {
		var userJson = await fetch(`./assets/user/${user}.json`)
		var userJsonParsed = await userJson.json()
		return userJsonParsed
	}
	var userData = await fetchUser();

	if (userData) {
		document.title = `${userData.fullname} - ${userData.title}`
		document.getElementById("avatarImage").src = `./assets/user/${userData.avatar}`;
		document.getElementById("fullname").textContent = userData.fullname;
		document.getElementById("title").textContent = userData.title;
		document.getElementById("email").textContent = userData.email;
		document.getElementById("email_link").href = `mailto:${userData.email}`;
		document.getElementById("phonenumber").textContent = userData.phonedisplay;
		document.getElementById("phonenumber_link").href = `tel:${userData.phone}`;
		document.getElementById("site").textContent = userData.url;
		document.getElementById("site_link").href = `//${userData.url}`;
		document.getElementById("address").textContent = userData.address;
		document.getElementById("address_link").href = userData.mapurl;
		document.getElementById("vcard").href = `./assets/user/${userData.vcard}`;
	}
});
