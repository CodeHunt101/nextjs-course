import { useRouter } from "next/router"

// our-domain.com/news/newsId

function DetailPage() {
  const router = useRouter()

  const newsId = router.query.newsId

  // sent req to the backend API
  // to fetch the news item with newsId
  
  return <h1>The Detail Page</h1>
}

export default DetailPage
