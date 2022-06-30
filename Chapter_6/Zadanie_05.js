const numery = [5, 8, 10, 23, 48, 60]
for (const numer of numery) {
    if (numer % 2 == 0) {
        console.log(`Liczba ${numer} jest parzysta`)
    } else {
        console.log(`Liczba ${numer} jest nieparzysta`)
    }
}