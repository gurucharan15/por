import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { relayStylePagination } from "@apollo/client/utilities"

const httpLink = createHttpLink({
  uri: "https://api-ap-south-1.hygraph.com/v2/clel2vhda1eg901uo33gk1e8i/master",
})

const authLink = setContext((_, { headers }) => {
  const token = "https://api-ap-south-1.hygraph.com/v2/clel2vhda1eg901uo33gk1e8i/master/upload"
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NzczOTcwMjYsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZWwydmhkYTFlZzkwMXVvMzNnazFlOGkvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjM5MjdkZDA4LTUwYTYtNGRlMi1iODIzLThlMzBlN2YzZTcwOSIsImp0aSI6ImNsYXZnd3RvZzJ6anQwMXQxM3luNmhxbDAifQ.gJczAWTH3dhvNgPEgjxB5swhtEJa4aWHuLzRyTrhvYb9mk5NIz6s6_lM71P4JtA6dAtaQp4n_Yoi9jyuqbanYuh-3A6c7OvfD5Wj5iRYbeiEpE2irBXx5KCg6lyeNhlFAnok82W0fG3196NWQNrCuswvBeY6N0W00cp3JOUNyo6uPMSz-Me2aCrEOLr-R6T2v5d59Nlgbru9iYkz5M6sUw22yBW5afJc1wWMp2Zs69lXr6G74BF1wD612HnJcsGNFOPCepN_dgeRS0NVFsxPr5o05neoEwY8aMnIDaA3oWAHcu4AzwmfP-SSzDFAysrLtAr4Ec1mz5zekUiu7HWeOG7E1JrhBB38394OaXOn7onXSFqbNfr54kbvs8ObXvdJgUpGUerZuOmX04mAlO-czNcv1mL9QBUYShVQr6TGVsOqvXqYCioqF-9zcN6dY36y_lkJdjMND0tQkppBi3w9UWiT49pFNrnSStf9UwXN6wNN93AQqtwSZvdtPwXwxDvbicOqlQQuj6E-vGFydBGEnimP2mcY14Nwc2iGzJK6GESplooh-5F58vVeGskmxrmujhrIiyAetESpemQPiutYk2y2p1CrbqFevZeKDdaGENof5qmC3HtJY4FSfXGHgPYfazuI3pSwid-RH3z42-bRq-007Bb2RrNsOzR4q4837Vw` : "",
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          worksConnection: relayStylePagination(),
          guestBooksConnection: relayStylePagination(),
          blogs: {
            //first merge func gets called and then read func. fetchMore always sends a network request which then comes back to the cache and gets merged
            //with the help of merge function. Then cache tries to read the query to send the required data back to the client. But if a read
            // function is present then the moment cache will try to read the query, it will instantly call the read function.
            read(existing, { args: { skip, first } }: any) {
              return existing && existing.slice(skip, skip + first)
            },
            keyArgs: false,
            merge(existing, incoming, { args: { skip } }: any) {
              const merged = existing ? existing.slice(0) : []
              for (let i = 0; i < incoming.length; ++i) {
                merged[skip + i] = incoming[i]
              }
              return merged
            },
          },
        },
      },
    },
  }),
})

export const currentWorkTab = makeVar<string>("All")
export const currentMenu = makeVar<number>(1)
export const currentWork = makeVar<null | string>(null)
export const showMenu = makeVar<boolean>(false)

export default client
