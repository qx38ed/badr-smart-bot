const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || '';

  // ردود بسيطة وطريفة
  if (text.toLowerCase().includes('هلا')) {
    bot.sendMessage(chatId, 'هلا والله! بدر الذكي هنا بكل طاقته!');
  } else if (text.toLowerCase().includes('من أنت')) {
    bot.sendMessage(chatId, 'أنا بدر الذكي، مساعدك الشخصي، صديقك، وأحيانًا فاصل نكته!');
  } else {
    bot.sendMessage(chatId, 'سم طال عمرك، وش تبيني أسوي؟');
  }
});
