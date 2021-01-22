const apps = [
  {
    name: 'micor-fms',
    entry: '//localhost:11000',
    container: '#fms',
    activeRule: '/fms'
  },
  {
    name: 'micor-umi',
    entry:"//localhost:12000",
    container: "#umi",
    activeRule: '/umi'
  },
  {
    name:'micor-react',
    entry: "//localhost:13000",
    container: "#root",
    activeRule: '/react'
  }
]

export default apps