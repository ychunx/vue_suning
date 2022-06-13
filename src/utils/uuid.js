import { v4 as uuidv4 } from 'uuid'

export const getUuid = () => {
    // 如果本地已有生成的游客ID则无需再生成，直接返回
    let uuid = localStorage.getItem('UUID')
    if (!uuid) {
        // 若没有则生成存储
        uuid = uuidv4()
        localStorage.setItem('UUID', uuid)
    }
    return uuid
}