/* Define behavior of index.html */

const storage = localStorage;
const key = '⬡-Drone ID';

let droneId = 'XXXX';

/* Get DOMs. */
const iptDroneId = document.getElementById('ipt_drone_id');
const btSave = document.getElementById('bt_save');
const tbCode = document.getElementById('tb_code');
const spnStatus = document.getElementById('spn_status');

/* Load ⬡-Drone ID. */
if (storage.getItem(key) != null) {
	droneId = storage.getItem(key);
	iptDroneId.value = droneId;
	spnStatus.innerText = '⬡-Drone ID loaded.';
} else {
	spnStatus.innerText = '⬡-Drone ID is required.';
}

/* Setup button behavior */
btSave.addEventListener('click', (ev) => {
	droneId = iptDroneId.value;
	storage.setItem(key, droneId);
	spnStatus.innerText = '⬡-Drone ID saved.';
	buildTable(tbCode, droneId);
});

/* Build table body. */
buildTable(tbCode, droneId);
