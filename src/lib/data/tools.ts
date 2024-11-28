import { Tool } from "@/types"

export const tools: Tool[] = [
  {
    id: "vscode",
    slug: "vscode",
    name: "Visual Studio Code",
    description: "轻量级但功能强大的源代码编辑器",
    icon: "/tools/vscode.svg",
    categories: ["development"],
    features: [
      "智能感知",
      "调试功能",
      "内置Git",
      "扩展支持"
    ],
    content: "Visual Studio Code 是微软使用 Electron Framework 开发的源代码编辑器，支持 Windows、Linux 和 macOS。功能包括调试支持、语法高亮、智能代码补全、代码片段、代码重构和内置 Git。",
    links: [
      {
        title: "官方网站",
        url: "https://code.visualstudio.com"
      }
    ],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "figma",
    slug: "figma",
    name: "Figma",
    description: "协作式界面设计工具",
    icon: "/tools/figma.svg",
    categories: ["design"],
    features: [
      "实时协作",
      "原型设计",
      "组件系统",
      "插件生态"
    ],
    content: "Figma 是一个基于浏览器的协作式界面设计工具。它支持实时协作、原型设计、组件系统等功能，是设计师进行UI/UX设计的理想选择。",
    links: [
      {
        title: "官方网站",
        url: "https://www.figma.com"
      }
    ],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "chatgpt",
    slug: "chatgpt",
    name: "ChatGPT",
    description: "强大的AI对话助手",
    icon: "/tools/chatgpt.svg",
    categories: ["ai"],
    features: [
      "自然语言对话",
      "代码生成",
      "文本分析",
      "知识问答"
    ],
    content: "ChatGPT 是 OpenAI 开发的大型语言模型，能够进行自然语言对话、回答问题、生成代码等。它使用先进的AI技术，为用户提供智能对话服务。",
    links: [
      {
        title: "官方网站",
        url: "https://chat.openai.com"
      }
    ],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
]
