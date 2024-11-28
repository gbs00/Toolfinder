import { Tool } from '@/types'
import toolsData from '@/data/tools.json'

export function getToolNavigation(currentToolId: string) {
  const tools = toolsData.tools
  const currentIndex = tools.findIndex(tool => tool.id === currentToolId)
  
  return {
    previousTool: currentIndex > 0 ? tools[currentIndex - 1] : null,
    nextTool: currentIndex < tools.length - 1 ? tools[currentIndex + 1] : null
  }
}
