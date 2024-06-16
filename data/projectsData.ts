interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Translation Agent',
    description: `吴恩达开源的翻译Agent项目，使用LangChain和OpenAI API进行Agent的搭建`,
    imgSrc: '/static/images/agent.png',
    href: 'https://github.com/andrewyng/translation-agent',
  },
  {
    title: 'LangChain',
    description: `快速搭建Prompt、RAG、Agent的开源项目`,
    imgSrc: '/static/images/langchain.png',
    href: 'https://python.langchain.com',
  },
]

export default projectsData
