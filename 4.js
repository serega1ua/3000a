function array_diff_very_fast(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}