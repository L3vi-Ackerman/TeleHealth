import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query'
import './index.css'

import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx'

// ✅ Create QueryClient instance
const queryClient = new QueryClient()

// ✅ Get the Query Provider context (this already contains queryClient)
const TanStackQueryProviderContext = TanStackQueryProvider.getContext()

// ✅ Create the router
const router = createRouter({
  routeTree,
  context: {
    ...TanStackQueryProviderContext, // contains queryClient already
  },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      {/* ✅ Correct prop name: queryClient */}
      <TanStackQueryProvider.Provider queryClient={queryClient}>
        <RouterProvider router={router} />
      </TanStackQueryProvider.Provider>
    </StrictMode>,
  )
}
