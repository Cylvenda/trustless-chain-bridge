import { Activity, Check, Clock, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export type BlockchainStatusType = "connected" | "pending" | "disconnected" | "error"

interface BlockchainStatusProps {
  status: BlockchainStatusType
  networkName?: string
  blockHeight?: number
}

export function BlockchainStatus({ 
  status, 
  networkName = "Ethereum", 
  blockHeight 
}: BlockchainStatusProps) {
  const getStatusConfig = () => {
    switch (status) {
      case "connected":
        return {
          icon: Check,
          label: "Connected",
          className: "status-confirmed",
          animate: false
        }
      case "pending":
        return {
          icon: Clock,
          label: "Syncing",
          className: "status-pending",
          animate: true
        }
      case "error":
        return {
          icon: AlertCircle,
          label: "Error",
          className: "status-error",
          animate: false
        }
      default:
        return {
          icon: Activity,
          label: "Disconnected",
          className: "bg-muted text-muted-foreground",
          animate: false
        }
    }
  }

  const config = getStatusConfig()
  const Icon = config.icon

  return (
    <div className="flex items-center gap-2">
      <Badge className={`${config.className} flex items-center gap-1`}>
        <Icon 
          className={`h-3 w-3 ${config.animate ? 'animate-pulse-slow' : ''}`} 
        />
        {config.label}
      </Badge>
      <span className="text-sm text-muted-foreground">
        {networkName}
        {blockHeight && ` • Block ${blockHeight.toLocaleString()}`}
      </span>
    </div>
  )
}