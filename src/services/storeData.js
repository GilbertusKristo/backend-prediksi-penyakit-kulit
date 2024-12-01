const { Firestore } = require("@google-cloud/firestore");

// Fungsi untuk menyimpan data ke Firestore
async function storeData(id, data) {
    try {
        // Inisialisasi Firestore dengan kredensial Service Account dan Project ID
        const db = new Firestore({
            projectId: "submissionmlgc-gilbertusk", // Ganti dengan Project ID Anda
            keyFilename: "/home/kristo/submissionmlgc-gilbertusk-3af742bc9c6d.json", // Path ke file JSON kredensial
        });

        // Pilih koleksi Firestore
        const predictCollection = db.collection("predictions");

        // Simpan data ke dokumen dengan ID tertentu
        await predictCollection.doc(id).set(data);
        console.log(`Data berhasil disimpan dengan ID: ${id}`);
    } catch (error) {
        console.error("Error menyimpan data ke Firestore:", error.message);
        throw error;
    }
}

module.exports = storeData;
