import { graphql, useStaticQuery } from "gatsby"
import { useEffect } from "react"
import storage from "util/storage"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          version
        }
      }
    }
  `)
  const { siteMetadata = {} } = data?.site || {}
  useEffect(() => {
    const checkVersion = async () => {
      if (storage.load("version") !== siteMetadata.version) {
        localStorage.clear()
        storage.save("version", siteMetadata.version)
        console.info("Cleared Storage for new App Version.")
        if ("caches" in window) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then((names: string[]) => {
            for (const name of names) caches.delete(name)
          })
        }
        window.location.reload(true)
      }
    }
    checkVersion()
    return () => {
      storage.save("version", siteMetadata.version)
    }
  })
}
