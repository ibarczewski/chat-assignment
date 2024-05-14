type MessageGroup = {
    userId: number,
    messages: string[]
}

type User = {
    id: number,
    name: string,
    avatarUrl: string
}

type Message = {
    userId: number,
    message: string,
    // gif?: string
}