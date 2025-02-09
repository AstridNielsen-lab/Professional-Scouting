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
      setMessages([
        {
          type: 'bot',
          content: 'Olá! Sou Julio Campos Machado, scouter profissional com mais de 20 anos de experiência. Como posso ajudar você hoje? Posso orientar sobre castings, TV, cinema, publicidade e muito mais!'
        }
      ]);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInput('');

    setTimeout(() => {
      const response = generateResponse(userMessage.toLowerCase(), messages);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    }, 1000);
  };

  const generateResponse = (message: string, previousMessages: Message[]): string => {
    // Keywords for different topics
    const keywords = {
      casting: ['casting', 'teste', 'seleção', 'oportunidade'],
      tv: ['novela', 'tv', 'televisão', 'série', 'programa'],
      modelo: ['modelo', 'moda', 'passarela', 'desfile'],
      publicidade: ['publicidade', 'comercial', 'campanha', 'propaganda'],
      contato: ['contato', 'whatsapp', 'email', 'telefone'],
      experiencia: ['experiência', 'currículo', 'trabalhou', 'carreira'],
      idade: ['idade', 'anos', 'velho', 'novo', 'jovem'],
      pagamento: ['pagar', 'pagamento', 'custo', 'valor', 'investimento', 'cobra'],
      agencia: ['agência', 'agencias', 'empresa', 'produtora']
    };

    // Check if this is a greeting
    if (/^(oi|olá|boa|bom|hey|hi|hello)/i.test(message)) {
      return 'Olá! Como posso ajudar você hoje? Estou aqui para orientar sobre oportunidades em TV, publicidade, moda e muito mais!';
    }

    // Check for thank you messages
    if (/obrigad|agradeç|valeu|thanks/i.test(message)) {
      return 'Por nada! Estou sempre à disposição para ajudar. Se precisar de mais informações, não hesite em perguntar!';
    }

    // Check for multiple topics in the message
    let matchedTopics = [];
    for (const [topic, words] of Object.entries(keywords)) {
      if (words.some(word => message.includes(word))) {
        matchedTopics.push(topic);
      }
    }

    if (matchedTopics.length > 0) {
      // Get responses for each matched topic
      const responses = matchedTopics.map(topic => {
        switch (topic) {
          case 'casting':
            return 'Para participar dos nossos castings, o primeiro passo é fazer um cadastro completo. Não cobramos nenhuma taxa para cadastro ou testes. Envie seu material para juliocamposmachado@gmail.com ou entre em contato pelo WhatsApp (11) 97060-3441.';
          case 'tv':
            return 'Trabalho diretamente com as principais emissoras do Brasil. Para TV, buscamos diversos perfis, com ou sem experiência. O mais importante é ter presença e comprometimento. Posso avaliar seu perfil pessoalmente.';
          case 'modelo':
            return 'Na área da moda, cada segmento tem suas especificações. Trabalhamos com moda comercial, editorial e passarela. O importante é ter seu material atualizado e disponibilidade para testes.';
          case 'publicidade':
            return 'O mercado publicitário está sempre buscando novos rostos. Trabalhamos com campanhas nacionais e internacionais. Cada cliente tem um perfil específico que buscamos atender.';
          case 'contato':
            return 'Você pode entrar em contato comigo pelo WhatsApp (11) 97060-3441 ou (11) 99294-6628, ou pelo email juliocamposmachado@gmail.com. Estou disponível para atendimento personalizado.';
          case 'experiencia':
            return 'A experiência prévia é bem-vinda, mas não é obrigatória. O mais importante é ter dedicação e comprometimento. Oferecemos orientação para iniciantes.';
          case 'idade':
            return 'Trabalhamos com todas as faixas etárias, cada projeto tem seu perfil específico. O importante é ter disponibilidade e comprometimento.';
          case 'pagamento':
            return 'Não cobramos nenhuma taxa para cadastro ou testes. Os valores são pagos pelos contratantes quando você é selecionado para um trabalho.';
          case 'agencia':
            return 'Trabalho de forma independente e também em parceria com as principais agências do mercado. Isso nos permite oferecer mais oportunidades para nossos talentos.';
          default:
            return null;
        }
      }).filter(response => response !== null);

      if (responses.length > 0) {
        // Return a combined response if multiple topics were matched
        return responses.join(' ');
      }
    }

    // Default response if no specific topics were matched
    return 'Posso ajudar você com informações sobre castings, TV, publicidade, moda e muito mais. Para um atendimento personalizado, entre em contato pelo WhatsApp (11) 97060-3441 ou email juliocamposmachado@gmail.com. Qual área mais te interessa?';
  };

  return (
    <>
      {/* Botão flutuante do chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-yellow-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors z-50"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Janela do chat */}
      {isOpen && (
        <div
          className={`fixed right-2 sm:right-4 bottom-4 w-[calc(100%-1rem)] sm:w-[400px] bg-white rounded-lg shadow-xl z-50 transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-[500px] sm:h-[600px]'
          }`}
        >
          {/* Header do chat */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-yellow-500 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="font-semibold text-sm sm:text-base">Julio Campos Machado</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-gray-200 transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" /> : <MinusSquare className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-200 transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Área de mensagens */}
              <div className="h-[400px] sm:h-[480px] overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
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
              <div className="p-3 sm:p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-2 text-sm sm:text-base border rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    ref={inputRef}
                  />
                  <button
                    onClick={handleSend}
                    className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition-colors"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
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