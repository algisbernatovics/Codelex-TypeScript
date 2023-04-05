/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

class Words {
  count(str: string) {
    str=str.toLowerCase().trim().replace('  ',' ').replace('\t',' ').replace('\n',' ')
    let words = str.split(' ')
    const result: { [key: string]: number } = {}
    words.forEach(word => {
      if (Object.hasOwn(result,word)) {
        result[word]++
        return;
      }
      result[word] = 1
    })
    return result
  }
}


export { Words };