var blurElements = [];

var currentShown = 0;

const updateCurrentShown = function () {
	for (let i = 0; i < blurElements.length; i++) {
		if (!blurElements[i].classList.contains("hidden")) {
			currentShown = blurElements[i];
			break;
		}
	}
};

const addClickListener = function (element, elementIndex) {
	element.addEventListener("click", function () {
		if (elementIndex < blurElements.length - 1) {
			let nextIndex = elementIndex + 1;
			showBlur(nextIndex);
		} else {
			showBlur("none");
		}
	});
};

const load = function () {
	for (let i = 0; i < 17; i++) {
		const blurElement = document.createElement("img");
		blurElement.id = `blur${i}`;
		// class="h-auto w-full z-30 absolute top-0 left-0 hidden"
		blurElement.classList.add("h-auto", "w-full", "z-30", "absolute", "top-0", "left-0", "hidden");
		blurElement.src = `./img/blur/${i}.svg`;
		blurElement.alt = `blur${i}`;

		document.getElementById("content").appendChild(blurElement);
	}
	document.getElementById("blur0").classList.remove("hidden");
	document.getElementById("content").classList.remove("hidden");

	blurElements = [
		document.getElementById("blur0"),
		document.getElementById("blur1"),
		document.getElementById("blur2"),
		document.getElementById("blur3"),
		document.getElementById("blur4"),
		document.getElementById("blur5"),
		document.getElementById("blur6"),
		document.getElementById("blur7"),
		document.getElementById("blur8"),
		document.getElementById("blur9"),
		document.getElementById("blur10"),
		document.getElementById("blur11"),
		document.getElementById("blur12"),
		document.getElementById("blur13"),
		document.getElementById("blur14"),
		document.getElementById("blur15"),
		document.getElementById("blur16")
	];

	for (let i = 0; i < blurElements.length; i++) {
		const element = blurElements[i];
		if (element) {
			// Überprüfen, ob das Element existiert
			addClickListener(element, i);
		}
	}
};

const showBlur = function (index) {
	blurElements.forEach((element) => {
		element.classList.add("hidden");
	});
	if (index === "none") {
		return;
	} else {
		blurElements[index].classList.remove("hidden");
	}
};

document.addEventListener("DOMContentLoaded", load);
