export interface Note {
    id: number,
    user_id: number,
    status: "idle" | "editing",
    date: Date,
    title: string,
    content: string
}