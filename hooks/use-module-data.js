import { useEffect } from 'react'
import { useApiStore, refreshModule } from '@/app/store/use-api-store'

export function useModuleData(module, url) {
  const data = useApiStore(state => state.modules[module])
  const setData = useApiStore(state => state.setModuleData)

  useEffect(() => {
    async function load() {
      await refreshModule(module, url)
    }
    if (!data) {
      load()
    }
  }, [module, url])

  return [data, (d) => setData(module, d)]
}
