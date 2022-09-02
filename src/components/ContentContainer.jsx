import React from 'react'
import classNames from 'classnames'

// Explain:
// Each element of res array is another small array
// This small array contains 2 value:
//    - The first value is text
//    - The second is type, currently there are 3 types:
//        + 0: Normal text, no styling
//        + 1: Hashtag, blue text
//        + 2: Mention, blue text
const styleText = text => {
  let temp = String(text.slice())
  let res = []

  const urlRegex =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/g

  // Analyse text
  let index = 0
  let urlIndex = temp.search(urlRegex)

  while (index < temp.length) {
    if (temp[index] === '@') {
      // Find first space letter or @ letter start from index
      let findIndex
      for (
        findIndex = index + 1;
        findIndex < temp.length &&
        /[\w\d_]/.test(temp[findIndex]) &&
        temp[findIndex] !== ' ';
        findIndex++
      );

      // Mention works as Twitter mention (mb)
      // SUMMARY
      // - If between 2 @ symbol are letters in [\d\w_] => It's not a mention
      // - If before @ symbos is a letter in [\d\w_] => It's not a mention
      // - We can write 2 continuous mention using some symbols that are not [\w\d_]
      // Eg:  @abc      => Yes
      //      abc@a     => No
      //      @abc@abc  => No
      //      @abc+@def => Yes (there are 2 mentions)
      if (
        findIndex - index > 1 &&
        (temp[findIndex] === ' ' || temp[findIndex] !== '@') &&
        (index === 0 || !/[\w\d_]/.test(temp[index - 1]))
      ) {
        res.push(
          <span className='text-linkColor cursor-pointer' key={index}>
            {temp.substring(index, findIndex)}
          </span>
        )
      } else {
        res.push(temp.substring(index, findIndex))
      }

      index = findIndex
    } else {
      // Find first @ letter start from index
      let findIndex = temp.indexOf('@', index)

      // If there's no @ character => That means there's no more mention in string
      findIndex = findIndex === -1 ? temp.length : findIndex

      // Compare the result to urlIndex, so we can determine which one is pushed to the array first
      if (urlIndex !== -1 && urlIndex < findIndex) {
        res.push(temp.substring(index, urlIndex))
        let spaceIndex = temp.indexOf(' ', urlIndex)

        // if there's no space => it means the URL in at the end of string
        if (spaceIndex === -1) {
          spaceIndex = temp.length
        }

        const urlStr = temp.substring(urlIndex, spaceIndex)
        res.push(
          <a
            href={urlStr}
            className='text-linkColor hover:underline'
            key={urlIndex}
          >
            {urlStr}
          </a>
        )
        index = spaceIndex

        urlIndex = temp.substring(index).search(urlRegex) + index
        continue
      }

      res.push(temp.substring(index, findIndex))
      index = findIndex
    }
  }

  return <p>{res}</p>
}

const ContentContainer = props => {
  return (
    <div className={classNames([props.className, 'whitespace-pre-wrap'])}>
      {styleText(props.children)}
    </div>
  )
}

export default ContentContainer
