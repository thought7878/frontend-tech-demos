export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 2000));
  return message;
}
