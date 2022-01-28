import React from 'react'
import { Text } from 'native-base'

const parseTag = (regex: RegExp, para: string, paraIndex: number) => {
  const tags: JSX.Element[] = []
  const onlyBold = para.match(regex)
  if (onlyBold) {
    const [, onlyText] = onlyBold
    para.split(regex).forEach((boldpara, x) => {
      const key = `${para}-${boldpara}-${paraIndex}-${x}`
      if (boldpara === onlyText) {
        tags.push(
          <Text fontWeight={'bold'} key={key}>
            {onlyText}
          </Text>
        )
      } else {
        tags.push(<Text key={key}>{boldpara}</Text>)
      }
    })
  } else {
    tags.push(<Text key={`${para}-${paraIndex}`}>{para || '\n'}</Text>)
  }
  return tags
}

export const parseHtml = (text: string): any[] => {
  const boldRegex = /<b>(.*?)<\/b>/
  const final: JSX.Element[] = []
  const paragraphs = text.split(/<br>/)
  paragraphs.forEach((para, i) => {
    const simplePara = para.replace('<strong>', '<b>').replace('</strong>', '</b>')
    const tags = parseTag(boldRegex, simplePara, i)
    final.push(...tags)
  })
  return final
}
