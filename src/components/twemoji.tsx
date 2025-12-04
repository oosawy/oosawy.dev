type TwemojiProps = {
  emoji: string
}

export const Twemoji = (props: TwemojiProps) => {
  const code = props.emoji.codePointAt(0)?.toString(16)

  return (
    <div>
      {code && <img className="size-[1em]" src={`https://twemoji.maxcdn.com/2/svg/${code}.svg`} alt="" />}
    </div>
  )
}
