import robots from '~/data/robots.json'

// Define an event handler to provide a response to an event
export default defineEventHandler(event => {
  // Return an object with a property called "robots" and the value of the imported robots JSON data
  return {
    robots
  }
})
