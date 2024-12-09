'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Script } from '@/types/scripts'

export function AutomationScripts() {
  const pythonScripts: Script[] = [
    {
      title: "System Information Collector",
      language: "python",
      code: `
import platform
import psutil

def get_system_info():
    print(f"OS: {platform.system()} {platform.release()}")
    print(f"CPU Cores: {psutil.cpu_count()}")
    print(f"Total Memory: {psutil.virtual_memory().total / (1024**3):.2f} GB")

# Usage
get_system_info()
      `
    },
    {
      title: "Log File Size Checker",
      language: "python",
      code: `
import os

def check_log_file_sizes(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.log'):
            filepath = os.path.join(directory, filename)
            size = os.path.getsize(filepath) / (1024 * 1024)
            if size > 100:
                print(f"Large log file: {filename} - {size:.2f} MB")

# Usage
check_log_file_sizes("/path/to/log/directory")
      `
    },
    {
      title: "User Account Expiration Checker",
      language: "python",
      code: `
import datetime

def check_account_expiration(users):
    for user in users:
        expiration_date = datetime.datetime(2024, 12, 31)
        days_left = (expiration_date - datetime.datetime.now()).days
        if days_left < 30:
            print(f"User {user} account expires in {days_left} days")

# Usage
users = ["user1", "user2", "user3"]
check_account_expiration(users)
      `
    },
    {
      title: "Network Connectivity Test",
      language: "python",
      code: `
import socket

def test_network_connectivity(hosts):
    for host in hosts:
        try:
            socket.create_connection((host, 80), timeout=5)
            print(f"Connected to {host}")
        except (socket.timeout, socket.error):
            print(f"Could not connect to {host}")

# Usage
hosts = ["www.example.com", "www.google.com"]
test_network_connectivity(hosts)
      `
    },
    {
      title: "Disk Space Monitor",
      language: "python",
      code: `
import psutil

def monitor_disk_space(threshold=20):
    partitions = psutil.disk_partitions()
    for partition in partitions:
        usage = psutil.disk_usage(partition.mountpoint)
        free_percent = usage.free / usage.total * 100
        if free_percent < threshold:
            print(f"Low disk space on {partition.mountpoint}: {free_percent:.2f}% free")

# Usage
monitor_disk_space()
      `
    },
    {
      title: "Network Port Scanner",
      language: "python",
      code: `
import socket
import threading
from queue import Queue

def port_scan(target, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((target, port))
        if result == 0:
            print(f"Port {port} is open")
        sock.close()
    except:
        pass

def scan_ports(target, ports):
    queue = Queue()
    for port in ports:
        queue.put(port)
    
    def worker():
        while not queue.empty():
            port = queue.get()
            port_scan(target, port)
    
    threads = []
    for _ in range(100):
        thread = threading.Thread(target=worker)
        thread.start()
        threads.append(thread)
    
    for thread in threads:
        thread.join()

# Usage
target = "localhost"
ports = range(1, 1025)
scan_ports(target, ports)
      `
    }
  ]

  const powershellScripts: Script[] = [
    {
      title: "Active Directory User Bulk Creation",
      language: "powershell",
      code: `# ----- Edit these Variables for your own Use Case ----- #
$PASSWORD_FOR_USERS   = "Password1"
$USER_FIRST_LAST_LIST = Get-Content .\\names.txt
# ------------------------------------------------------ #

$password = ConvertTo-SecureString $PASSWORD_FOR_USERS -AsPlainText -Force
New-ADOrganizationalUnit -Name _USERS -ProtectedFromAccidentalDeletion $false

foreach ($n in $USER_FIRST_LAST_LIST) {
    $first = $n.Split(" ")[0].ToLower()
    $last = $n.Split(" ")[1].ToLower()
    $username = "$($first.Substring(0,1))$($last)".ToLower()
    Write-Host "Creating user: $($username)" -BackgroundColor Black -ForegroundColor Cyan
    
    New-AdUser -AccountPassword $password \\
               -GivenName $first \\
               -Surname $last \\
               -DisplayName $username \\
               -Name $username \\
               -EmployeeID $username \\
               -PasswordNeverExpires $true \\
               -Path "ou=_USERS,$(([ADSI]'').distinguishedName)" \\
               -Enabled $true
}`
    },
    {
      title: "User Account Management",
      language: "powershell",
      code: `
function Create-StandardUser {
    param (
        [string]$Username,
        [string]$Department
    )
    New-ADUser -Name $Username -Department $Department -Enabled $true
}

# Usage
Create-StandardUser -Username "JohnDoe" -Department "IT"
      `
    },
    {
      title: "System Backup Script",
      language: "powershell",
      code: `
function Backup-SystemFiles {
    $BackupPath = "C:\\Backups"
    $Date = Get-Date -Format "yyyyMMdd"
    Backup-Directory -Path "C:\\Important" -Destination "$BackupPath\\Backup_$Date"
}

# Usage
Backup-SystemFiles
      `
    },
    {
      title: "Service Health Checker",
      language: "powershell",
      code: `
function Check-ServiceStatus {
    $CriticalServices = @("Spooler", "MSSQLSERVER", "W32Time")
    
    foreach ($Service in $CriticalServices) {
        $Status = Get-Service -Name $Service
        if ($Status.Status -ne "Running") {
            Write-Host "Service $Service is not running!"
        }
    }
}

# Usage
Check-ServiceStatus
      `
    },
    {
      title: "System Resource Monitor",
      language: "powershell",
      code: `
function Monitor-SystemResources {
    $CPUUsage = (Get-WmiObject Win32_Processor).LoadPercentage
    $MemoryUsage = (Get-WmiObject Win32_OperatingSystem)
    
    if ($CPUUsage -gt 80) {
        Write-Host "High CPU Usage: $CPUUsage%"
    }
    
    $FreeMemoryPercent = ($MemoryUsage.FreePhysicalMemory / $MemoryUsage.TotalVisibleMemorySize) * 100
    if ($FreeMemoryPercent -lt 20) {
        Write-Host "Low Memory: $FreeMemoryPercent% free"
    }
}

# Usage
Monitor-SystemResources
      `
    },
    {
      title: "Automated Software Update Checker",
      language: "powershell",
      code: `
function Check-SoftwareUpdates {
    $UpdateSession = New-Object -ComObject Microsoft.Update.Session
    $UpdateSearcher = $UpdateSession.CreateUpdateSearcher()
    
    $SearchResult = $UpdateSearcher.Search("IsInstalled=0")
    
    Write-Host "Number of updates available: $($SearchResult.Updates.Count)"
}

# Usage
Check-SoftwareUpdates
      `
    }
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 dark:text-blue-100 font-serif">
        Automation Scripts
      </h2>

      <Tabs defaultValue="python" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="python">Python</TabsTrigger>
          <TabsTrigger value="powershell">PowerShell</TabsTrigger>
          <TabsTrigger value="bash">Bash</TabsTrigger>
        </TabsList>
        
        <TabsContent value="python">
          <ScrollArea className="h-[600px] w-full">
            <Accordion type="single" collapsible>
              {pythonScripts.map((script, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{script.title}</AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent className="p-4">
                        <pre className="text-sm overflow-x-auto">
                          <code>{script.code}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="powershell">
          <ScrollArea className="h-[600px] w-full">
            <Accordion type="single" collapsible>
              {powershellScripts.map((script, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{script.title}</AccordionTrigger>
                  <AccordionContent>
                    <Card>
                      <CardContent className="p-4">
                        <pre className="text-sm overflow-x-auto">
                          <code>{script.code}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}