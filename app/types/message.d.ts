// Grouping our messages like this allows us to put all of the messages in one header.
// Putting the date on this level allows us to be able to timestamp all of the messages together,
// as we only display the first message's timestamp in the chat history.
type MessageGroup = {
    userId: number,
    messages: Message[],
    date: Date,
}

type User = {
    id: number,
    name: string,
    avatarUrl: string
}

type Message = {
    message: string,
    isGif: boolean
}