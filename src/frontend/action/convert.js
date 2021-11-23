function convert(i) {
    if (i >= 1000) {
        return String((i - (i % 1000)) / 1000) + "k"
    }
    else {
        return String(i)
    }
}
export  default convert