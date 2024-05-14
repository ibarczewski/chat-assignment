type MessageGroup = {
    userId: number,
    messages: Message[]
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