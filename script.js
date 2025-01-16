/*                                                            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿  */
/*   File:         script.js                                  ⡇⣶⠆⣴⣶⡶⢠⡖⡴⣴⠂⢄⣒⡂⡶⣐⣒⣒⣒⡂⢲⡆⢲⣦⠐⣶⣶⣶⣶⣶⠀⡔⣶⣶⣶⡶⢠⣶⡀⡆⣶⡶⠶⡀⢢⢶⡖⡀⠄⡲⣶⣶⣖⡆⠠⢰⣶⣆⢶⡄⢲⢸  */
/*                                                            ⡇⡟⡆⣿⣿⡇⣾⠃⣿⠃⢢⣿⣿⡇⣧⣿⣿⣿⣿⣷⡀⣿⢠⢻⣆⠜⣿⣿⣯⣿⡇⢧⢻⠛⣿⢃⣾⣿⡅⢧⣶⣿⣿⣿⣔⠕⠳⢳⡌⢄⠙⣿⣿⡼⢂⢃⢿⣿⡜⡇⣇⢸  */
/*   Project:      landing-page                               ⡇⢇⡇⣿⣿⠀⣿⠸⡟⢀⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣧⡸⣇⣧⢿⣄⠸⣿⣿⣻⣿⢸⡜⡤⣿⢸⣿⣿⠇⣸⣿⣿⣿⣿⣿⣧⣻⡄⢿⣄⠄⠘⣿⣿⣼⡘⢸⣿⡇⡇⢸⢸  */
/*   Github:       marsdevx                                   ⡇⢸⡇⠟⣿⠀⡟⠀⢁⣾⣿⡿⢿⣛⡸⠿⠯⠿⣿⣛⡿⣷⣝⢞⢷⡙⢦⠈⢿⣿⣿⡀⣷⡄⠞⣾⣿⡿⣰⣿⣿⣿⡿⣿⣻⠿⠯⠿⠦⣝⢳⠄⠈⢿⡆⡇⢺⣿⡇⣇⢸⢸  */
/*                                                            ⡇⢸⡇⠠⣿⡀⡇⢀⣿⠿⠉⠈⠁⢀⣀⠀⠀⠀⠀⠀⠉⠓⢿⣯⣏⠻⣦⣕⠄⠙⢿⣧⠘⣿⣦⣻⣿⣿⣿⣿⣿⠗⠋⠁⠀⣀⠀⠀⠀⠀⠀⠉⠐⠀⠃⡃⢸⣿⡇⢸⢸⣸  */
/*   Created:      22:22   16/01/2025                         ⡇⡘⣿⠀⢺⡇⠃⢈⠁⠀⢠⣴⠀⣬⡍⠀⠀⠀⢠⣦⠀⣤⡐⢌⢿⣷⣬⣻⢷⣥⣀⠘⠳⡘⣿⣿⣿⣿⣿⠟⠅⣠⡔⢀⣬⡅⠀⠀⠀⣰⣦⠰⣤⠀⠀⠁⢸⡿⢀⡟⣿⢸  */
/*   Updated:      22:22   16/01/2025                         ⡇⡇⣿⡆⠈⢿⡀⢾⣿⣄⠸⣿⠸⣿⣧⠀⠀⢀⣾⣯⠶⢿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣶⣬⣌⣻⣿⣿⣿⣿⣴⣿⣧⢸⣿⣇⠀⠀⣠⣿⡷⠶⡟⢀⣾⠃⣾⠃⣼⠃⣿⢸  */
/*                                                            ⡇⣇⠿⣷⠐⡌⢧⠸⣿⣿⣷⢽⠣⠹⢿⣿⣿⡿⠿⢋⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡂⠹⠿⣿⣿⣿⠿⠣⣪⢵⣿⠇⣸⠃⢠⡟⣰⣿⢸  */
/*   Path:         ./script.js                                ⡇⣿⢠⣿⡇⢹⡆⢣⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣴⠁⢰⢸⢱⢸⣿⢸  */
/*                                                            ⡇⣿⡼⢹⣿⡀⢻⣮⡂⠻⣿⣿⣿⡿⣽⣟⡾⣷⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣻⢯⡿⣽⣿⣿⠟⠑⢠⡆⠐⠇⠎⣾⣿⢸  */
/*                                                            ⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣶⣾  */

// Copy elemnts

const appendSuffix = (source_id, suffix) => `${source_id}_${suffix}`;

function copyTextToTargets(source_id) {
	const source_text = document.getElementById(source_id).innerText;
	document.getElementById(appendSuffix(source_id, 'c')).innerText = source_text;
	document.getElementById(appendSuffix(source_id, 'b')).innerText = source_text;
}

copyTextToTargets("first_block_title");
copyTextToTargets("second_block_title");


// Animations

const screen_position = window.innerHeight;
const load_arr = document.querySelectorAll(".intro .title, .intro .text, .intro .buttons, .intro .intro-imgs");
const scroll_arr = document.querySelectorAll(
  ".second-screen .left-side, .second-screen .pre-title, " +
  ".second-screen .subtitle, .second-screen .text, " +
  ".second-screen .sec-sc-item, .third-screen .right-side, " +
  ".third-screen .pre-title, .third-screen .subtitle, " +
  ".third-screen .th-sc-block"
);

function load_anim(arr) {
	arr.forEach(function (element) {
		element.classList.add("visible");
	});
}

function scroll_anim(arr) {
	arr.forEach(function (element) {
		let obj_position = element.getBoundingClientRect().top;
		if (obj_position < screen_position) {
			element.classList.add("visible");
		}
	})
}

window.addEventListener("load", () => load_anim(load_arr));
window.addEventListener("scroll", () => scroll_anim(scroll_arr));