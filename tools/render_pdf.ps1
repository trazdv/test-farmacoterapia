param([string]$Pdf, [string]$OutDir, [int]$Width = 2000)
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
$null = [Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$ext = [System.WindowsRuntimeSystemExtensions].GetMethods()
$asTaskOp = ($ext | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
$asTaskAct = ($ext | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' })[0]
function AwaitOp($op, [Type]$type) { $t = $asTaskOp.MakeGenericMethod($type).Invoke($null, @($op)); $t.Wait(-1) | Out-Null; return $t.Result }
function AwaitAct($op) { $t = $asTaskAct.Invoke($null, @($op)); $t.Wait(-1) | Out-Null }
$file = AwaitOp ([Windows.Storage.StorageFile]::GetFileFromPathAsync($Pdf)) ([Windows.Storage.StorageFile])
$doc = AwaitOp ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
"paginas=" + $doc.PageCount
for ($i = 0; $i -lt $doc.PageCount; $i++) {
  $page = $doc.GetPage($i)
  $opts = New-Object Windows.Data.Pdf.PdfPageRenderOptions
  $opts.DestinationWidth = [uint32]$Width
  $opts.DestinationHeight = [uint32]([math]::Round($Width * $page.Size.Height / $page.Size.Width))
  $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
  AwaitAct ($page.RenderToStreamAsync($stream, $opts))
  $out = Join-Path $OutDir ("p{0}.png" -f ($i + 1))
  $in = [System.IO.WindowsRuntimeStreamExtensions]::AsStreamForRead($stream.GetInputStreamAt(0))
  $fs = [System.IO.File]::Create($out); $in.CopyTo($fs); $fs.Close(); $in.Dispose(); $stream.Dispose()
  "{0}  {1}x{2}  (tamaño pdf {3})" -f (Split-Path $out -Leaf), $opts.DestinationWidth, $opts.DestinationHeight, $page.Size
  $page.Dispose()
}
