type MessageGroup = {
    user: User,
    messages: string[]
}

type User = {
    name: string,
    avatarUrl: string
}

type Message = {
    user: User,
    message: string,
}