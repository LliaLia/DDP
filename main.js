const prompt = require('prompt-sync')();
const fs = require('fs');

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 3;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
        "q": "Siswa Sistem Informasi di Pagi 3 adalah...",
        "o": [
            "Babon",
            "Lala",
            "Ica",
            "Trisna",
        ],
        "a": 3
    },
    {
        "q": "Apa Warna Langit Saat ini ?",
        "o": [
            "Biru",
            "Abu-Abu",
            "Pink",
            "Orange",
        ],
        "a": 0
    },
    {
        "q": "Apa Mata Kuliah Pagi ini ?",
        "o": [
            "KBD",
            "PTI",
            "DDP",
            "Pancasila",
        ],
        "a": 2
    }
    // Tambahkan 3 soal lainnya 
]

let waktu_mulai = new Date();
let nama = prompt('Nama: ');

console.log("")

for (let u = 0; u < soal.length; u++){

    console.log("\nSoal ", (u + 1), ":", soal[u].q);

    for (let j = 0; j < soal[u].o.length; j++) {

        console.log(j + 1 + "." + soal[u].o[j]);
    };

     let jawaban = prompt ("Jawab : ");

    if (jawaban == soal[u].a + 1){

        score += point_per_soal;
        jawaban_benar++;

        console.log("Jawaban Benar")

    } else {

        jawaban_salah++;

        console.log("Jawaban Salah")
    }

    soal_dimulai = new Date();

     let end_time_soal = new Date();
     let waktu_jawab_soal = end_time_soal - waktu_mulai;

     console.log('Waktu soal ' + (u + 1) + '\t:', waktu_jawab_soal, 'detik');
};
 
let waktu_selesai = new Date();

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)
console.log('Waktu Quiz\t:',waktu_mulai.toLocaleString())
console.log('Waktu selesai Quiz\t:',waktu_selesai.toLocaleString())

let data = {
    benar: jawaban_benar,
    salah: jawaban_salah,
    score: score,
    waktuMulai: waktu_mulai.toLocaleString(),
    waktuSelesai: waktu_selesai.toLocaleString(),
}

let jsondata= JSON.stringify(data)
console.log(jsondata)

// Writing data to JSON file
fs.writeFileSync("data.json", JSON.stringify(data, null, 4));

// Reading data from JSON file
try {
    const jsonData = fs.readFileSync("data.json", 'utf-8');
    const parsedData = JSON.parse(jsonData);
    console.log("Data from JSON file:", parsedData);
} catch (err) {
    console.error("Error reading JSON file:", err);
}


console.log("")

// Lengkapi code program yang belum selesai




