export function textPipe(text: string | null) {
  if (typeof text === 'string') {
    return text.replace(/\n/g, '').replace(/\[.*?\]/g, '');
  }
  if (!text) {
    return '';
  }
}
