document.addEventListener("DOMContentLoaded", function () {

    // 1. Sapaan otomatis berdasarkan waktu
    const heroLabel = document.querySelector(".hero-label");
    const jam = new Date().getHours();

    if (heroLabel) {
        if (jam >= 5 && jam < 11) {
            heroLabel.textContent = "SELAMAT PAGI, SELAMAT DATANG DI PROFIL SAYA";
        } else if (jam >= 11 && jam < 15) {
            heroLabel.textContent = "SELAMAT SIANG, SELAMAT DATANG DI PROFIL SAYA";
        } else if (jam >= 15 && jam < 18) {
            heroLabel.textContent = "SELAMAT SORE, SELAMAT DATANG DI PROFIL SAYA";
        } else {
            heroLabel.textContent = "SELAMAT MALAM, SELAMAT DATANG DI PROFIL SAYA";
        }
    }

    // 2. Navigasi mobile
    const menuNavigasi = document.getElementById("menuNavigasi");
    const tautanNavigasi = document.querySelectorAll("#menuNavigasi .nav-link");

    tautanNavigasi.forEach(function (tautan) {
        tautan.addEventListener("click", function () {
            if (
                menuNavigasi &&
                menuNavigasi.classList.contains("show") &&
                typeof bootstrap !== "undefined"
            ) {
                bootstrap.Collapse.getOrCreateInstance(menuNavigasi).hide();
            }
        });
    });

    // 3. Interaksi kartu keahlian
    const kartuKeahlian = document.querySelectorAll("#keahlian .skill-card");

    const detailKeahlian = [
        "Mampu bekerja sama dengan anggota tim untuk menyelesaikan tugas.",
        "Mampu menyampaikan informasi dan bertukar pendapat dengan baik.",
        "Mampu menyesuaikan diri dengan lingkungan dan situasi baru.",
        "Mampu mengatur waktu agar setiap tugas selesai sesuai jadwal."
    ];

    kartuKeahlian.forEach(function (kartu, indeks) {
        kartu.style.cursor = "pointer";
        kartu.setAttribute("tabindex", "0");

        function tampilkanDetail() {
            const kolomKartu = kartu.parentElement;
            const detailLama = kolomKartu.querySelector(".detail-keahlian");

            document.querySelectorAll("#keahlian .detail-keahlian").forEach(function (detail) {
                detail.remove();
            });

            if (!detailLama) {
                const detail = document.createElement("p");
                detail.className = "detail-keahlian";
                detail.textContent = detailKeahlian[indeks];

                detail.style.marginTop = "12px";
                detail.style.padding = "12px";
                detail.style.backgroundColor = "#eaf2fc";
                detail.style.color = "#142b4a";
                detail.style.borderRadius = "10px";
                detail.style.fontSize = "14px";

                kolomKartu.appendChild(detail);
            }
        }

        kartu.addEventListener("click", tampilkanDetail);

        kartu.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                tampilkanDetail();
            }
        });
    });

    // 4. Interaksi tabel pendidikan
    const barisPendidikan = document.querySelectorAll("#pendidikan tbody tr");

    barisPendidikan.forEach(function (baris) {
        baris.style.cursor = "pointer";

        baris.addEventListener("click", function () {
            barisPendidikan.forEach(function (item) {
                item.classList.remove("pendidikan-dipilih");
            });

            baris.classList.add("pendidikan-dipilih");
        });
    });

    // 5. Menandai tujuan yang sudah selesai
    const daftarTujuan = document.querySelectorAll(".goal-list li");

    daftarTujuan.forEach(function (tujuan) {
        tujuan.style.cursor = "pointer";

        tujuan.addEventListener("click", function () {
            tujuan.classList.toggle("tujuan-selesai");
        });
    });

    // 6. Gaya tambahan untuk fitur interaktif
    const styleInteraktif = document.createElement("style");

    styleInteraktif.textContent = `
        .pendidikan-dipilih {
            background-color: #dcecff !important;
        }

        .tujuan-selesai {
            text-decoration: line-through;
            color: #8994a3;
        }

        body.mode-gelap {
            background-color: #172235 !important;
            color: #edf3fb !important;
        }

        body.mode-gelap .content-card,
        body.mode-gelap .skill-card {
            background-color: #24344c !important;
            color: #edf3fb !important;
        }

        body.mode-gelap .section-background {
            background-color: #1d2b40 !important;
        }

        body.mode-gelap h2,
        body.mode-gelap h3,
        body.mode-gelap p,
        body.mode-gelap li,
        body.mode-gelap td {
            color: #edf3fb;
        }

        body.mode-gelap th {
            background-color: #304968 !important;
            color: white !important;
        }

        .tombol-js {
            position: fixed;
            right: 20px;
            z-index: 1050;
            border: none;
            border-radius: 25px;
            padding: 10px 16px;
            color: white;
            background-color: #2864a8;
            cursor: pointer;
        }

        #tombolTema {
            bottom: 20px;
        }

        #tombolKeAtas {
            bottom: 70px;
            display: none;
        }
    `;

    document.head.appendChild(styleInteraktif);

    // 7. Tombol mode gelap dan terang
    const tombolTema = document.createElement("button");

    tombolTema.id = "tombolTema";
    tombolTema.className = "tombol-js";
    tombolTema.type = "button";
    tombolTema.textContent = "Mode Gelap";

    document.body.appendChild(tombolTema);

    tombolTema.addEventListener("click", function () {
        const modeGelapAktif = document.body.classList.toggle("mode-gelap");

        tombolTema.textContent = modeGelapAktif ? "Mode Terang" : "Mode Gelap";
    });

    // 8. Tombol kembali ke atas
    const tombolKeAtas = document.createElement("button");

    tombolKeAtas.id = "tombolKeAtas";
    tombolKeAtas.className = "tombol-js";
    tombolKeAtas.type = "button";
    tombolKeAtas.textContent = "Kembali ke Atas";

    document.body.appendChild(tombolKeAtas);

    window.addEventListener("scroll", function () {
        tombolKeAtas.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    tombolKeAtas.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});