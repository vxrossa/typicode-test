export interface GetPostsDto {
  page?: number | string
  limit?: number | string
  title?: string
}

export interface GetPostDto {
  id: string | number
}
