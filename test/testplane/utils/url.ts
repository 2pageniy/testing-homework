export function browserUrl(url: string): string {
    const bug_id = process.env.BUG_ID;
    return `http://localhost:3000/hw/store${url}${bug_id ? '?bug_id=' + bug_id : ''}`;
}