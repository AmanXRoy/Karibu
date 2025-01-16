import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function TopBanner() {
  return (
    <div className="bg-primary flex justify-between px-16 py-1 text-white">
      <div className="email">
        KaribuWinner@gmail.com
      </div>
      <div className="language_dropdown flex items-end gap-1">
        <Select>
          <SelectTrigger className="border-0">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>

              <SelectItem value="English">English</SelectItem>
              <SelectItem value="French">French</SelectItem>
              <SelectItem value="German">German</SelectItem>
              <SelectItem value="Maltese">Maltese</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default TopBanner