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