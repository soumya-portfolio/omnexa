import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Column {
  key: string
  label: string
  sortable?: boolean
}

interface Row {
  id: string
  [key: string]: any
}

interface DataTableProps {
  columns: Column[]
  data: Row[]
  onSort?: (key: string) => void
  onRowClick?: (row: Row) => void
}

export function DataTable({ columns, data, onSort, onRowClick }: DataTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>
                {column.sortable ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 font-medium"
                    onClick={() => onSort?.(column.key)}
                  >
                    {column.label}
                  </Button>
                ) : (
                  column.label
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              className={onRowClick ? "cursor-pointer hover:bg-muted/50" : ""}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column) => (
                <TableCell key={`${row.id}-${column.key}`}>
                  {renderCell(row[column.key], column.key)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function renderCell(value: any, key: string) {
  if (key === "status" && typeof value === "string") {
    const variants: Record<string, any> = {
      active: "default",
      pending: "secondary",
      completed: "outline",
      error: "destructive",
    }
    return <Badge variant={variants[value] || "outline"}>{value}</Badge>
  }

  if (value === null || value === undefined) {
    return <span className="text-muted-foreground">—</span>
  }

  return String(value)
}
