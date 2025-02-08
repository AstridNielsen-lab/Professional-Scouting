import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, MinusSquare, Maximize2 } from 'lucide-react';

interface Message {
  type: 'user' | 'bot';
  content: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensagem inicial do bot
      setMessages([
        {
          type: 'bot',
          content: 'Olá! Sou Julio Campos Machado, scouter profissional com mais de 20 anos de experiência. Como posso ajudar você hoje? Posso falar sobre castings, TV, cinema, publicidade e muito mais!'
        }
      ]);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput('');

    // Simular resposta do bot baseada em palavras-chave
    setTimeout(() => {
      const response = generateBotResponse(userMessage.toLowerCase());
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    }, 1000);
  };

  const generateBotResponse = (message: string): string => {
    if (message.includes('casting') || message.includes('teste')) {
      return 'Para participar dos nossos castings, é importante ter um bom material fotográfico e disponibilidade para testes. Cada projeto tem requisitos específicos que avaliamos cuidadosamente. Para um atendimento personalizado, entre em contato pelo WhatsApp (11) 97060-3441 ou (11) 99294-6628.';
    }
    
    if (message.includes('novela') || message.includes('tv') || message.includes('televisão')) {
      return 'Trabalho diretamente com as principais emissoras do Brasil, incluindo Globo, SBT e Record. Para TV, buscamos talentos com ou sem experiência, mas é fundamental ter técnica de atuação e fotogenia. Posso avaliar seu perfil pessoalmente, me envie um email para juliocamposmachado@gmail.com';
    }
    
    if (message.includes('modelo') || message.includes('moda') || message.includes('passarela')) {
      return 'Na área da moda, avalio perfis para passarela, catálogos e campanhas publicitárias. Cada segmento tem suas especificações de altura e biotipo. Para uma avaliação detalhada do seu perfil, entre em contato pelo WhatsApp (11) 97060-3441.';
    }
    
    if (message.includes('publicidade') || message.includes('comercial')) {
      return 'Para campanhas publicitárias, trabalhamos com diversos perfis. O mercado publicitário busca pessoas autênticas e carismáticas. Se você tem interesse, podemos avaliar seu perfil. Entre em contato pelo email juliocamposmachado@gmail.com';
    }
    
    if (message.includes('contato') || message.includes('whatsapp') || message.includes('email')) {
      return 'Você pode entrar em contato comigo através do:\nWhatsApp: (11) 97060-3441 ou (11) 99294-6628\nEmail: juliocamposmachado@gmail.com\nTerei prazer em avaliar seu perfil pessoalmente!';
    }

    return 'Posso ajudar você a entender melhor sobre o mundo artístico e suas oportunidades. Tenho vasta experiência com castings para TV, publicidade, moda e cinema. Para um atendimento personalizado, entre em contato pelo WhatsApp (11) 97060-3441 ou email juliocamposmachado@gmail.com';
  };

  return (
    <>
      {/* Botão flutuante do chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors z-50"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Janela do chat */}
      {isOpen && (
        <div
          className={`fixed right-4 bottom-4 w-96 bg-white rounded-lg shadow-xl z-50 transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-[600px]'
          }`}
        >
          {/* Header do chat */}
          <div className="flex items-center justify-between p-4 border-b bg-yellow-500 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-6 h-6" />
              <span className="font-semibold">Julio Campos Machado</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-gray-200 transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-5 h-5" /> : <MinusSquare className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Área de mensagens */}
              <div className="h-[480px] overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input de mensagem */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    ref={inputRef}
                  />
                  <button
                    onClick={handleSend}
                    className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;