import robots from '~/data/robots.json'
export default defineEventHandler(event => {
    return {
        robots
    }
}
)