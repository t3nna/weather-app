export default function highestFrequency(obj){
    let array = obj.map(item =>item.status)
    let icon = obj.map(item =>item.icon)
    const map = {}
    let maxFreq = 0
    let maxFreqStr = array[0]

    for (let i = 0; i < array.length; i++) {
        const current = array[i]

        if (map[current]) {
            map[current]++
        } else {
            map[current] = 1
        }

        if (map[current] > maxFreq) {
            maxFreq = map[current]
            maxFreqStr = {current, icon: icon[i]}
        }
    }

    return maxFreqStr
}