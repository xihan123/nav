import type {PinnedRepo, ProfileData, Sponsor, TechCategory, Website} from '~~/shared/types'

const STATS_BASE = 'https://github-readme-stats.xihan.website'
const badge = (label: string, color: string, logo: string, url: string, logoColor = 'white') => ({
    label, url,
    img: `https://img.shields.io/badge/${label}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`,
})
const PIN = (repo: string) =>
    `${STATS_BASE}/api/pin/?username=xihan123&repo=${repo}&theme=dark&hide_border=true&description_lines_count=3`

export const profile: ProfileData = {
    avatar: 'https://avatars.githubusercontent.com/u/44894509?v=4',
    name: 'xihan123',
    location: 'Jiangxi, China',
    githubUrl: 'https://github.com/xihan123',
    githubUsername: 'xihan123',
    bio: '来自江西的个人开发者，热爱开源，专注于 Kotlin/Android 逆向、Web 开发与工具构建',
}

export const statsImg = `${STATS_BASE}/api?username=xihan123&count_private=true&show_icons=true&theme=dark&hide_border=true&card_width=450`
export const topLangsImg = `${STATS_BASE}/api/top-langs/?username=xihan123&layout=compact&theme=dark&hide_border=true&card_width=450`

export const pinnedRepos: PinnedRepo[] = [
    {name: 'KV Storage', url: 'https://github.com/xihan123/kv-storage', cardImg: PIN('kv-storage')},
    {name: 'Doro Collector', url: 'https://github.com/xihan123/doro-collector-web', cardImg: PIN('doro-collector-web')},
    {name: 'SignHook', url: 'https://github.com/xihan123/SignHook', cardImg: PIN('SignHook')},
    {name: 'FFmpeg-Audio', url: 'https://github.com/xihan123/FFmpeg-Audio', cardImg: PIN('FFmpeg-Audio')},
    {name: 'DnsSpeedTestApp', url: 'https://github.com/xihan123/DnsSpeedTestApp', cardImg: PIN('DnsSpeedTestApp')},
    {name: 'DocTransform', url: 'https://github.com/xihan123/DocTransform', cardImg: PIN('DocTransform')},
    {name: 'ExcelMatcher', url: 'https://github.com/xihan123/ExcelMatcher', cardImg: PIN('ExcelMatcher')},
    {name: 'WordExtractor', url: 'https://github.com/xihan123/WordExtractor', cardImg: PIN('WordExtractor')},
    {name: 'TurboHash', url: 'https://github.com/xihan123/TurboHash', cardImg: PIN('TurboHash')},
    {name: 'MyLanServer', url: 'https://github.com/xihan123/MyLanServer', cardImg: PIN('MyLanServer')},
]

export const techCategories: TechCategory[] = [
    {
        title: '前端开发',
        badges: [
            badge('React', '61DAFB', 'react', 'https://react.dev', 'black'),
            badge('Vue.js', '4FC08D', 'vue.js', 'https://vuejs.org'),
            badge('TypeScript', '3178C6', 'typescript', 'https://www.typescriptlang.org'),
            badge('JavaScript', 'F7DF1E', 'javascript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'black'),
        ],
    },
    {
        title: '后端开发',
        badges: [
            badge('Node.js', '339933', 'node.js', 'https://nodejs.org'),
            badge('Python', '3776AB', 'python', 'https://www.python.org'),
            badge('Go', '00ADD8', 'go', 'https://go.dev'),
            badge('Java', '007396', 'java', 'https://www.java.com'),
        ],
    },
    {
        title: '数据库与云服务',
        badges: [
            badge('MongoDB', '47A248', 'mongodb', 'https://www.mongodb.com'),
            badge('MySQL', '4479A1', 'mysql', 'https://www.mysql.com'),
            badge('Redis', 'DC382D', 'redis', 'https://redis.io'),
            badge('Docker', '2496ED', 'docker', 'https://www.docker.com'),
        ],
    },
    {
        title: '工具与平台',
        badges: [
            badge('Git', 'F05032', 'git', 'https://git-scm.com'),
            badge('VS Code', '007ACC', 'visual-studio-code', 'https://code.visualstudio.com'),
            badge('Linux', 'FCC624', 'linux', 'https://www.linux.org', 'black'),
        ],
    },
]

export const websites: Website[] = [
    {
        name: '阅读排行榜',
        description: '起点阅读时长排行榜',
        url: 'https://rank.xihan.website'
    },
    {
        name: 'Doro 表情包收集',
        description: 'Doro Sticker Collection',
        url: 'https://doro.xihan.website'
    },
]

export const sponsors: Sponsor[] = [
    {name: 'EdgeOne', url: 'https://cloud.tencent.com/product/teo'},
    {name: 'ESA', url: 'https://www.aliyun.com/product/esa'},
    {name: 'Cloudflare', url: 'https://www.cloudflare.com'},
]
