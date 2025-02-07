import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory)
}

export function getPostData(postIdentifier) {
  const filePath = path.join(postsDirectory, `${postIdentifier}.md`) // Corrected path
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  
  const postData = {
    slug: postIdentifier,
    ...data,
    content,
  }

  return postData
}

export function getAllPosts() {
  const postFiles = getPostsFiles()
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile.replace(/\.md$/, '')) // Remove .md from filename
  })
  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
  return sortedPosts
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter(post => post.isFeatured)
  return featuredPosts
}
